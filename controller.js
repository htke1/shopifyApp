export default saveData = async (req,res)=>{
    
    const Post = req.body
        try{
        await Post.save()
        res.status(201).json(newPost);
        }
        catch(error){
           res.status(409).json({message:error.message})
        }
        }
