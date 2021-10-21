const TaskModel = require('../model/TaskModel');

//A controller faz o tráfego,recebendo e enviando respostas 
class TaskController{
     
    //metodo responsavel por receber a requisiçao de armazenamento no banco de dados e criar esse armazenamento
    async create(req,res){
        //recebe a requisição do front
        const task = new TaskModel(req.body)
        //salva no banco de dados
        await task
        .save()//metodo utilizado para salvar dados que vem do front no banco de dados
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});
    
    
    
    
    
    }

       }

module.exports = new TaskController();
//save()metodo utilizado para salvar dados que vem do front no banco de dados
//then() resposta positiva caso o salvamento for bem sucedido
//catch()= tratamento de erro, caso for mau sucedido