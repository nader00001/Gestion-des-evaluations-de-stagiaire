var express = require('express');
var router = express.Router();
const db = require('./../db');



router.post('/', (req , res)=>{
    // console.log('postedata');
    console.log(req.body,'createdata');
    let note = req.body.note;
    let qr = `insert into eval ( note , user_id) values(${note} , 25)`;
    console.log(qr , 'qr')
    db.query(qr,(err, result)=>{
        if (err){console.log(err);}
        console.log(result , 'result')
        
            res.send({
                message : 'data inserted',
            });
        
        
    });
});
// get data eval
router.get('/',(req,res)=>{
    let qr= `select * from eval`;
    db.query(qr,(err,result)=>{
     if(err)
     {
         console.log(err,'errs')
     }
     if(result.length>0)
    {res.send({
     message: 'all eval data',
     data :result
     });
     }
     });
    });

    // get single data eval
 router.put('//:id' , (req , res)=>{
    console.log(req.body,'updatedata');
    let Id = req.params.id ;
    let Date = req.body.date ;
    
    let Note = req.body.note;
    let qr=`update eval set  'date' ='${Date}' , note =${Note}
    where id = '${Id}'`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        res.send({
            message:'data updated'
        });
    });

});
//update data eval
router.put('//:id' , (req , res)=>{
    console.log(req.body,'updatedata');
    let Id = req.params.id ;
    
    let Date = req.body.date ;
    let Note = req.body.date;

    let qr=`update eval set  'date' ='${Date}' , note=${Note}
    where id = '${Id}'`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        res.send({
            message:'data updated'
        });
    });

});

//delete data eval
router.delete('//:id',(req , res)=>{
    let Id = req.params.id ;
    let qr = `delete from user where id=${Id}`;
    db.query(qr, (err, result)=>{
        if (err){console.log(err);}
        res.send(
            {
                message:'data deleted'
            }
        )
    });
});

module.exports=router ;