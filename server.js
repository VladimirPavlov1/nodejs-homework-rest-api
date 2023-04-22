const app = require('./app')

const mongoose = require('mongoose');
const { error } = require('./schema/updateSchema');

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
.then(()=>{
    app.listen(3000);
    console.log("Server connect success")
})
.catch(error=>{
  console.log(error.message);
  process.exit(1)
})



