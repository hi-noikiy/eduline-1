var mongoose = require('mongoose');

//注意大坑：如果是user对应的数据集会自动变成users    
  var Course = mongoose.model('course', new mongoose.Schema({  
  	  title: String,
  	  type:Number,
  	  logo:String,
  	  brief:String,
  	  uid:String,
  	  uname:String,
  	  status:Number,  //0表未完结,1表提交申请中,2表审核通过
  	  pubtime:Date
    },{_id:true}));

module.exports=Course;