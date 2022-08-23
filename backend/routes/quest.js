var express = require('express');
var quest = express.Router();
const db = require('./../db');



quest.post('/', (req , res)=>{
    // console.log('postedata');
    console.log(req.body,'createdata');
    
    let text_lequel = req.body.text_lequel;
    let text_nom = req.body.text_nom;
    let tel = req.body.tel;
    let fax = req.body.fax;
    let email = req.body.email;
    let text_sug = req.body.text_sug;
    let qr = `insert into quest ( text_lequel ,text_nom , tel, fax ,email ,text_sug ) values('${text_lequel}','${text_nom}',${tel},${fax}, '${email}','${text_sug}')`;
    console.log(qr , 'qr')
    db.query(qr,(err, result)=>{
        if (err){console.log(err);}
        console.log(result , 'result')
        
            res.send({
                message : 'data inserted',
            });
        
        
    });
});
// get data quest
quest.get('/',(req,res)=>{
    let qr= `select * from quest`;
    db.query(qr,(err,result)=>{
     if(err)
     {
         console.log(err,'errs')
     }
     if(result.length>0)
    {res.send({
     message: 'all quest data',
     data :result
     });
     }
     });
    });

    // get single data quest
 quest.put('//:id' , (req , res)=>{
    console.log(req.body,'updatedata');
    let Id = req.params.id ;
    // let Date = req.body.date ;
    let text_lequel = req.body.text_lequel;
    let text_nom = req.body.text_nom;
    let tel = req.body.tel;
    let fax = req.body.fax;
    let email = req.body.email;
    let text_sug = req.body.text_sug;
    // let Note = req.body.note;
    let qr=`update quest set  'text_lequel'='${text_sug}' ,'text_nom' ='${text_nom}' , tel =${tel} , fax =${fax} ,'email'='${email}','text_sug'='${text_sug}'    where id = '${Id}'`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        res.send({
            message:'data updated'
        });
    });

});
//update data quest
// quest.put('//:id' , (req , res)=>{
//     console.log(req.body,'updatedata');
//     let Id = req.params.id ;
    
//     let Date = req.body.date ;
//     let Note = req.body.date;

//     let qr=`update quest set  'date' ='${Date}' , note=${Note}
//     where id = '${Id}'`;
//     db.query(qr,(err,result)=>{
//         if(err){console.log(err);}
//         res.send({
//             message:'data updated'
//         });
//     });

// });

//delete data quest
quest.delete('//:id',(req , res)=>{
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

module.exports=quest ;