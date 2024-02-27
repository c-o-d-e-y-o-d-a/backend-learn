const asyncHandler = (requestHandler) => {
    (res,req,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler}



//using the try and catch methd
// const asyncHandler = (fn) => async (req,res,next) => {
//     try{
//         await fn(req,res,next);
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         });
//     }

// }
// // (fn) => { (fn) => {}}, we just removed the curly brackets