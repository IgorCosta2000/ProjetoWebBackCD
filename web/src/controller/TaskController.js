const TaskModel = require('../model/TaskModel');

const now = new Date();

const {
      startOfDay,
      endOfDay,
      startOfWeek,
      endOfWeek,
      startOfMonth,
      endOfMonth,
      startOfYear,
      endOfYear
      } = require('date-fns');



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
    async create(req,res){
        //recebe a requisição do front
        const task = new TaskModel(req.body)
        //salva no banco de dados
        await task
        .save()//metodo utilizado para salvar dados que vem do front no banco de dados
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});
    
    
    
    
    
    }
    async update(req,res){
        
       await TaskModel
       .findByIdAndUpdate({'_id' : req.params.id} ,req.body, {new:true})
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});
    
    
    
    
    
    }
    async readAll(req,res){
        
        await TaskModel
        .find({macadress: {'$in': req.body.macadress}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async readById(req,res){
        
        await TaskModel
        .findById(req.params.id)
         .then(response => {
            if(response) 
                return res.status(200).json(response)
            else
                return res.status(404).json({error : 'Tarefa Não Encontrada' })
         })
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async delete(req,res){
        
        await TaskModel
        .deleteOne({'_id' : req.params.id})
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async done(req,res){
        
        await TaskModel
        .findByIdAndUpdate({'_id' : req.params.id} ,{'done':req.params.done}, {new:true})
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async late(req,res){
        
        await TaskModel
        .find({'when' :{'$lt':now},'macadress':{'$in':req.body.macadress}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async today(req,res){
        
        await TaskModel
        .find({'macadress': {'$in': req.body.macadress}, 'when':{'$gte': startOfDay(now), '$lt': endOfDay(now)}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async week(req,res){
        
        await TaskModel
        .find({'macadress': {'$in': req.body.macadress}, 'when':{'$gte': startOfWeek(now), '$lt': endOfWeek(now)}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async month(req,res){
        
        await TaskModel
        .find({'macadress': {'$in': req.body.macadress}, 'when':{'$gte': startOfMonth(now), '$lt': endOfMonth(now)}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
     async year(req,res){
        
        await TaskModel
        .find({'macadress': {'$in': req.body.macadress}, 'when':{'$gte': startOfYear(now), '$lt': endOfYear(now)}})
        .sort('when')
         .then(response => {return res.status(200).json(response)})
         .catch(error => {return res.status(500).json(error)});
     
     
     
     
     
     }
       }
       

module.exports = new TaskController();
//save()metodo utilizado para salvar dados que vem do front no banco de dados
//then() resposta positiva caso o salvamento for bem sucedido
//catch()= tratamento de erro, caso for mau sucedido