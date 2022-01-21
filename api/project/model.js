// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects(){
    const rows = await db('projects')

    rows.forEach(row=>{
      if(row.project_completed === 0){
        row.project_completed = false
      }else{
       row.project_completed = true
      }
    })

    return rows
  }
  
async function createProjects(project){
// const [project_id] = await db('projects').insert(project)

// return getProjects().where({ project_id }).first(); 
return db('projects')
    .insert(project)
    .then(([project_id]) => { 
      return db('projects').where('project_id',project_id).select('project_completed', 'project_description', 'project_name')
    })
}
  
  module.exports = {
    getProjects, createProjects
  };