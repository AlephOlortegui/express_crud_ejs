const express = require('express')
const dotenv = require('dotenv')
const blogRouter = require('./routes/blogRoutes')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

const app = express();

//Get access to the MongoDB
connectDB(app)

//set engine
app.set('view engine', 'ejs')
// statics
app.use(express.static('public'))
// to parse incoming x-www-form-urlencoded data | post method
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => res.redirect('/blogs'))
app.get('/about', (req,res) => {
    res.render('about', {myTitle: 'About'})
})
// Use routes
app.use('/blogs', blogRouter)

//404 app.use
app.use((req,res)=>{
    res.status(404).render('404', {myTitle: '404'})
})