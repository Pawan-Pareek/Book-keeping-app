const mongoose=require('mongoose');

const dbConnect = ()=>{
    //connect data base
    mongoose.connect(process.env.MONGODB_URL,{
    // useFindAndModify:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    useNewUrlParser:true,
}).then(()=>console.log('DB connected'))
.catch((err)=>console.log(err));
}

module.exports=dbConnect;