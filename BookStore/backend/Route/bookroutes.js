import express from 'express';
import {db} from '../models/schema.js'//database schema rules
import {ObjectId} from 'mongodb';


const router = express.Router();

//route
// router.get('/',(req,res)=>{
//    res.status(200).json("")

// })


//route to get all books in database
router.get("/", async (req, res) => {
  console.log("Received request to:", req.url);

   try {   
          const displayallbooks= await db.find({})//db has the name of collection
            return res.status(200).json({
                count:displayallbooks.length,
                data: displayallbooks
            });
            
        } catch (error) {
            console.log(error)
            res.status(500).send({message: error.message})
        }

   
});


//route to get all books in database
router.get('/', async (req,res)=>{
       

     
        try {
            
          const displayallbooks= await db.find({})//db has the name of collection
            return res.status(200).json({
                count:displayallbooks.length,
                data: displayallbooks
            });
            
        } catch (error) {
            console.log(error)
            res.status(500).send({message: error.message})
        }


})


//route to create a book
router.post('/', async (req,res)=>{
//validating usr input before proceding
const schema=(!req.body.title ||
             !req.body.author ||
             !req.body.publishYear)
    try {
        if(schema){
        return res.status(400).send({
            message:"please provide all the required fields"
        })
    }else{
    const newBook = {
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear};
   //saving the book into db
    const newBookcreated = await db.create(newBook)
        res.status(201).json(newBookcreated)
       
     }
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }
})


//route to get one book frm db, by id
router.get('/:id',async (req,res)=>{
  const usrid= req.params.id;
    try {
        if(!ObjectId.isValid(usrid)){
              res.status(404).send("id doesnt match bro") 
         }else{  
            const listofbooks= await db.findById(usrid)
              res.status(200).json(listofbooks) 
        }
      
    } catch (error) {
         console.log(error)
            res.status(500).send({message: error.message})
    }
})

//route to update the or edit 

router.put('/:id', async(req,res)=>{
   const schema=(!req.body.title ||
             !req.body.author ||
             !req.body.publishYear)

             try {
                if(schema){ //if any of the field is empty then we will return 400
                  return res.status(400).send({ message:"please provide all the required fields"})
                };
                 //else we will update the book
                  const usrid= req.params.id;
                  const updatebook= await db.findByIdAndUpdate(usrid,req.body)

                if(!updatebook){
                return res.status(404).json({message: "book not found"})
                }else{
                res.status(202).json({message:'succufully created'})
                }

               } catch (error) {
                  console.log(error)
                     res.status(500).send({message: error.message})
             }


})


//logic for delete.

router.delete('/:id',async (req,res)=>{
    const usrid= req.params.id;
    const deletebook= await db.findByIdAndDelete(usrid)
    try {
        if(deletebook)
        res.status(202).json({message:'succufully deleted'})
        else{
            res.status(404).json({message: "book not found"})
        }
    } catch (error) {
        console.log(error)
          res.status(500).send({message: error.message})
    }
})

export default router;