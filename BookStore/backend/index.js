import express from 'express';//express app
import {mongoUrl} from './configdb.js';//connection string
import { mongoose} from'mongoose';//for interaction
//import {db} from './models/schema.js'//database schema rules
 import {ObjectId} from 'mongodb';
import routes from './Route/bookroutes.js';
import cors from 'cors';


const app = express();


//midlwaere for parsing req body
app.use(express.json());

//midlwaere for route
app.use('/books',routes);

//midlwaere for cors

app.use(cors())//option:1 >allow all orgins as default(*)

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['content-type','utf-8'],
//   changeOrigin: true,
// }));




//connection to database
mongoose.connect(mongoUrl)
.then(()=>{
   console.log('app is conxeted to databse')

     app.listen(5000,()=>{
    console.log("app is runnning on port 5k")
})

 })
 .catch((err)=>{
   console.log(err)
})




