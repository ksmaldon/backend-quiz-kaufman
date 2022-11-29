import express from "express";
var topicsRouter = express.Router();

//import functions from models:
import {
    getAllTopics,
    getTopicsByCategory,
    getTopicById,
    createTopic,
    updateTopicById,
    deleteTopicById,
} from "../models/topics.js"


// //We have to write our CRUD routes 


topicsRouter.get("/", async function (req, res) {
    if (req.query.topic !== undefined) {
      const result = await getTopicsByCategory(req.query.topic);
      return res.json({ success: true, payload: result });
    }
    const result = await getAllTopics();
    res.json({ success: true, payload: result });
  });

  

  //get by id
  topicsRouter.get("/:id", async function (req, res){
  const result = await getTopicById(req.params.id)
  return res.json({ success: true, payload: result });
  })
  
  topicsRouter.post("/", async function (req, res){
      const result = await createTopic(req.body)
      res.json({ success: true, payload: result });
  } )
  
  //update
  topicsRouter.patch("/:id", async function (req, res){
      const result = await updateTopicById(req.params.id, req.body)
      res.json({ success: true, payload: result });
  })

  //delete

  topicsRouter.delete("/:id", async function (req,res) {
    const result = await deleteTopicById (req.params.id);
    res.json({ success: true, payload: result });
  })
  

  export default topicsRouter 