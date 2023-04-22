const app = require('./app')

const mongoose = require('mongoose');
const { error } = require('./schema/updateSchema');

const DB_HOST = "mongodb+srv://Bogdan:3xId0DwnHqy03VW3@cluster0.avn2th9.mongodb.net/contacts_read?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
.then(()=>{
    app.listen(3000);
    console.log("Server connect success")
})
.catch(error=>{
  console.log(error.message);
  process.exit(1)
})



