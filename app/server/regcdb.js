'use strict';
var mongoose = require("mongoose");
mongoose.connect("mongodb://admin:admin@ds159509.mlab.com:59509/lms", { useMongoClient: true });
var userSchema =mongoose.Schema({userid:{type:'string'},email:{type:'string'},fname:{type:'string'},lname:{type:'string'},
  add:{type:'string'},dob:{type:'string'},gender:{type:'string'},mobile:{type:'number'},pwd:{type:'string'},
  repass:{type:'string'},role: {
    rolename: {type: 'string'},
    right: [
      {rightname: {type: 'string'}, link: {type: 'string'}},
      {rightname: {type: 'string'}, link: {type: 'string'}},
      {rightname: {type: 'string'}, link: {type: 'string'}},
      {rightname: {type: 'string'}, link: {type: 'string'}},
      {rightname: {type: 'string'}, link: {type: 'string'}}
    ]
  }});
var RegUser = mongoose.model("users",userSchema);
module.exports=RegUser;

