const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogRoutes')

dotenv.config({path: './config/config.env'})

const app = express();

//Get access to the MongoDB
const LINK = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
mongoose.connect(LINK, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, console.log(`Server running on port ${PORT} DB mongo connected!!`))
    })
    .catch(err => console.log(err.message))

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