const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ParentZen')
.then(
    ()=>{
        console.log('Connected !');
    }
)
.catch ( 
    (err)=>{
        console.log(err);
    }
)
module.exports=mongoose;