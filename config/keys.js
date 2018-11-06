if (process.env.NODE_ENV === "production") {
  //return production set of keys
  module.exports=require(./prod);
} else {
  //we are in development return dev set of keys
  module.exports= require(./dev);
}
