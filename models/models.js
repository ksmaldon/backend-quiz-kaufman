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

