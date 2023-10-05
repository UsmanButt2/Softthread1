import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoute from './routes/orderRoute.js'
import saleprodRoute from './routes/saleprodRoute.js'
import cors from 'cors';


dotenv.config();

connectDB();


//rest object
const app = express()


app.use(express.static('public'));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
 app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's actual URL
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Enable CORS credentials (if needed)
}));

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/saleproduct', saleprodRoute)
app.use('/api/v1/order', orderRoute)

//rest Api
app.get('/', (req,res) => {
    res.send({message:'welcome'})
})



//port

const PORT =process.env.PORT || 5000;
if(process.env.NODE_ENV="production"){
   app.use(express.static("client\Build")); 
}
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})