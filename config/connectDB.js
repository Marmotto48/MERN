const mongoose = require('mongoose');

const connectDB = async() =>{
    try 
    {
        const res = await mongoose.connect(process.env.URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        console.log('database connected')
    }
    catch (error) {
        console.error(error)

    }
}
module.exports = connectDB;