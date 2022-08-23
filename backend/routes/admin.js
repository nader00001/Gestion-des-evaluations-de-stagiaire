var express = require('express');
var router = express.Router();
const db = require('./../db');


router.get('/',(req,res)=>{
    console.log('get users')
    let sql ='select * from admin'
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err,'errs')
        }
        if(result.length>0)
        {
            res.send({
                message:'admin data',
                data:result 
                
            })
           
        }
    })
 })

module.exports = router;