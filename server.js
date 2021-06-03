require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const koaBody = require('koa-body')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const { default: Shopify, ApiVersion } = require('@shopify/shopify-api');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
dotenv.config();
const saveData = require('./controller.js')
Shopify.Context.initialize({
    API_KEY: process.env.SHOPIFY_API_KEY,
    API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
    SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
    HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
    API_VERSION: ApiVersion.October20,
    IS_EMBEDDED_APP: false,
    SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
  });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ACTIVE_SHOPIFY_SHOPS = {};

app.prepare().then(() => {

    const server = new Koa();
    const router = new Router();
    server.keys = [Shopify.Context.API_SECRET_KEY];
  
    server.use(
      
        createShopifyAuth({
          afterAuth(ctx) {

            const { shop, scope } = ctx.state.shopify;
            ACTIVE_SHOPIFY_SHOPS[shop] = scope;

                ctx.redirect(`/?shop=${shop}`);
                console.log(port)
            
          },
        }),
      );


      

    const handleRequest = async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    };

    router.get("/", async (ctx) => {
    const shop = ctx.query.shop;

    console.log(ctx);

    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });


  router.post('/save', saveData,
  async (ctx, next) => {
    console.log("coneector")
  })
    router.get('(.*)', handleRequest);
    router.get("(/_next/static/.*)", handleRequest);
    router.get("/_next/webpack-hmr", handleRequest);
    router.get("(.*)", verifyRequest(), handleRequest);
    
    server.use(router.allowedMethods());
    server.use(router.routes());
    server.use(bodyParser.json())
    const uri = "mongodb+srv://tenzin:tenzin1234@cluster0.85j0b.mongodb.net/editorData?retryWrites=true&w=majority";
   mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=> server.listen(port, ()=>console.log("connected")))
  })