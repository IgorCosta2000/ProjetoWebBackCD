const express =require('express');

const servidor = express();

servidor.get('/api',(req,res)=> {
    res.send('VOCÊ ESTA NO CAMPINHO DIGITAL!')

});



servidor.listen(3000)