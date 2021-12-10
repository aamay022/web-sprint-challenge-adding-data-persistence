// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTask(){
  const rows = await db('projects as pr')
  .join('tasks as ts', 'pr.project_id', 'ts.project_id')
  .select('task_id', 'task_description', 'task_notes', 'pr.project_id', 'task_completed', 'pr.project_name', 'pr.project_description')
  
  rows.forEach(row=>{
    if(row.task_completed === 0){
      row.task_completed = false
    }else{
     row.task_completed = true
    }
  })

  
  return rows
  }
  
  async function createTask(newTask){
    return db('tasks').insert(newTask)
    .then(([task_id])=>{
      return db('tasks').where('task_id', task_id)
    })
  }
  
  module.exports = {
    getTask,createTask
  };