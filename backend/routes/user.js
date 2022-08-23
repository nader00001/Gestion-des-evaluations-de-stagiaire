var express = require('express');
var user = express.Router();

const db = require('./../db');

user.get('/',(req,res)=>{
    let qr= `select * from user`;
    db.query(qr,(err,result)=>{
     if(err)
     {
         console.log(err,'errs')
     }
     if(result.length>0)
    {res.send({
     message: 'all user data',
     data :result
     });
     }
     });
 // console.log('get users');
 
 });
 
 //get data note
//  user.get('/',(req,res)=>{
//      let qr= `select note from eval , user where user.date=eval.date`;
//      db.query(qr,(err,result)=>{
//       if(err)
//       {
//           console.log(err,'errs')
//       }
//       if(result.length>0)
//      {res.send({
//       message: 'all eval data',
//       data :result
//       });
//       }
//       });
//      });
 // get single data  user
 user.get('//:id',(req, res)=>{
     // console.log('get simple data ');
     let gid = req.params.id ;
     let qr = `select * from user where id = ${gid}`;
     db.query(qr ,(err, result)=>{
         if(err){console.log(err);}
         if(result.length>0)
         {
             res.send({
                 message: 'get single data ',
                 data: result
             });
         }
         else{
             res.send({
                 message:'data not found'
             });
         }
     });
 });
 
 // create data user
 user.post('/', (req , res)=>{
     console.log('postedata');

     console.log(req.body,'createdata');
     let Id = req.body.id ; //??
     let intitule = req.body.Intitule ;
     let nomf = req.body.Nomf ;
     let Date = req.body.date ;
     let Lieu = req.body.lieu;
     let nomp = req.body.Nomp;
     let Etabli = req.body.etabli;
     let Datef = req.body.datef;
     let qr = `insert into user (Intitule , Nomf , date ,lieu ,Nomp ,etabli , datef) values( '${intitule}' , '${nomf}' ,'${Date}','${Lieu}','${nomp}' , '${Etabli}' , '${Datef}')`;
     console.log(qr , 'qr')
     db.query(qr,(err, result)=>{
         if (err){console.log(err);}
         console.log(result , 'result')
         
             res.send({
                 message : 'data inserted',
             });
         
         
     });
 });
 
 
 // id?: number;
   
 // Intitule?: string;
 // Nomf?: string;
 // date?: string;
 // lieu?: string;
 // Nomp?:string;
 // etabli?:string;
 
 // update data user
 user.put('//:id' , (req , res)=>{
     console.log(req.body,'updatedata');
     let Id = req.params.id ;
     let intitule = req.body.Intitule ;
     let nomf = req.body.Nomf ;
     let Date = req.body.date ;
     let Lieu = req.body.lieu;
     let nomp = req.body.Nomp;
     let Etabli = req.body.etabli;
     let Datef = req.body.datef;
 
     let qr=`update user set Intitule = '${intitule}' ,' Nomf'='${nomf}' , 'date' ='${Date}' ,'lieu'='${Lieu}','Nomp'='${nomp}','etabli'='${Etabli}','datef'='${Datef}'
     where id = '${Id}'`;
     db.query(qr,(err,result)=>{
         if(err){console.log(err);}
         res.send({
             message:'data updated'
         });
     });
 
 });
 
    
 // delete data 
 user.delete('//:id',(req , res)=>{
     let Id = req.params.id ;
     let qr = `delete from eval where id=${Id}`;
     db.query(qr, (err, result)=>{
         if (err){console.log(err);}
         res.send(
             {
                 message:'data deleted'
             }
         )
     });
 });
 
 
 // get date 
 // user.get('//:id',(req, res)=>{
 //     // console.log('get simple data ');
 //     let gid = req.params.id ;
 //     let nomf = req.body.Nomf ;
 //     let qr = `select Nomf from  user where da `;
 //     db.query(qr ,(err, result)=>{
 //         if(err){console.log(err);}
 //         if(result.length>0)
 //         {
 //             res.send({
 //                 message: 'get single data ',
 //                 data: result
 //             });
 //         }
 //         else{
 //             res.send({
 //                 message:'data not found'
 //             });
 //         }
 //     });
 // });
 module.exports=user ;