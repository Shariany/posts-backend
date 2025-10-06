const express = require("express")
const connectDB = require("./db");

require('dotenv').config();
const userRoutes = require ("./routes/user")
const postRoutes = require("./routes/posts")

const app = express();
app.use(express.json());

//middleware to handle CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Connect-Type', 'Authorization'],
    credentials: true,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome to my posts api')
})

//routes
app.use ('/user', userRoutes)
app.use('/posts', postsRoutes);

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Sever is running on port ${PORT}`)
})

connectDB();