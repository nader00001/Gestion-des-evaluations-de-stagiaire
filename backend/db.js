const mysql = require('mysql2');
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'x',
    database: 'simpledb',
    port: 3306
});


db.connect(err=>{
    if(err)
    {console.log(err,'dber');}
    else{
        console.log('database connected .....');
    }
    
})

module.exports=db ;