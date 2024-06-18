const errorMiddlewareHandler = (err,req,res,next)=>{
    //set status code
    const errorStatusCode=res.statusCode === 200 ? 500 : res.statusCode;

    res.status(errorStatusCode);
    res.json({
        message: err.message,
    });
};

//curley braces because we pull it as a object.
module.exports={errorMiddlewareHandler};