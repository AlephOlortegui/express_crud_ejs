const mongoose = require("mongoose");

const connectDB = async (app) => { 
    try {
        const LINK = process.env.MONGO_URI;
        const PORT = process.env.PORT || 3000;
        await mongoose.connect(LINK, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, console.log(`Server running on port ${PORT} DB mongo connected!!`))
    } catch (err) {
        console.log(err.message)
    }
 }

 module.exports = connectDB