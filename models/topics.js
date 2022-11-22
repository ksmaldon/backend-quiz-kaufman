import query from "../db/index.js"


export async function getAllTopics(){
    const allTopics = await query("SELECT * FROM topics")
    return allTopics.rows
}

//search by topic category
export async function getTopicsByCategory(category){
    const result = await query("SELECT * FROM topics WHERE topic ILIKE $1", [`%${category}%`])
    
    return result.rows
}

//get topic by id
export async function getTopicById(id){
    const topicByID = await query("SELECT * FROM topics WHERE topic_id = $1", [id])
        
    return topicByID.rows[0]
}

 // createThing
 export async function createTopic(topics){
    const newTopic = await query("INSERT INTO topics (topic, text_link, video_link, interactive_link) VALUES ($1, $2, $3, $4) RETURNING *", [topics.topic, topics.text_link, topics.video_link, topics.interactive_link])
   return newTopic.rows
}

// Update

 export async function updateTopicById (id,updatedTopic) {
    const update = await query  ('UPDATE topics SET  (topic, text_link, video_link, interactive_link) = ($1, $2, $3, $4) WHERE topic_id = $5 RETURNING * ', [updatedTopic.topic,updatedTopic.text_link,updatedTopic.video_link,updatedTopic.interactive_link,id]);
    return update.rows
}

//Delete Topic 
export async function deleteTopicById(id){
    const deleteTopic = await query("DELETE FROM topics WHERE topic_id = $1  RETURNING * ", [id])
    return deleteTopic.rows[0]
}