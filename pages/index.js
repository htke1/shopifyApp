import EmailEditor from 'react-email-editor'
import React from 'react'
class Index extends React.Component {

  constructor(props) {
    super(props)
 
    this.saveDesign=this.saveDesign.bind(this)  
    this.exportHtml=this.exportHtml.bind(this)
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
    })
  }
  saveDesign = () => {
    const url= process.env.SHOPIFY_APP_URL;
    this.exportHtml();
    this.editor.saveDesign(design => {
      fetch('/?shop=khampa59.myshopify.com/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: design
        })
        console.log(design)
      })
    }
  
  
  
render()
{
  return(
   <div>
   <button >Create</button>
   <button >Edit</button>
   <button onClick={this.saveDesign}>Save</button>
   <EmailEditor
   ref={editor => this.editor = editor}
   />
   </div>
  )
}
  }


export default Index;