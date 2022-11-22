import express from "express";
var questionsRouter = express.Router();

//import functions from models:
import {
    getAllQuestions,
    getQuestionsByTopic,
    getQuestionById,
    createQuestion,
    updateQuestionById,
    deleteQuestionById,
} from "../models/questions.js"


// //We have to write our CRUD routes 


questionsRouter.get("/", async function (req, res) {
    if (req.query.question !== undefined) {
      const result = await getQuestionsByTopic(req.query.topic);
      return res.json({ success: true, payload: result });
    }
    const result = await getAllQuestions();
    res.json({ success: true, payload: result });
  });



  //get by id
  questionsRouter.get("/:id", async function (req, res){
  const result = await getQuestionById(req.params.id)
  return res.json({ success: true, payload: result });
  })
  
  questionsRouter.post("/", async function (req, res){
      const result = await createQuestion(req.body)
      res.json({ success: true, payload: result });
  } )
  
  //update
  questionsRouter.patch("/:id", async function (req, res){
      const result = await updateQuestionById(req.params.id, req.body)
      res.json({ success: true, payload: result });
  })

  //delete

  questionsRouter.delete("/:id", async function (req,res) {
    const result = await deleteQuestionById (req.params.id);
    res.json({ success: true, payload: result });
  })
  

  export default questionsRouter