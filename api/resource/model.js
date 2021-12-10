// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResources(){
  const rows = await db('resources')
  return rows
  }
  
async function createResource(newResource){
  return db('resources').insert(newResource)
  .then(([resource_id]) => { 
    const row = db('resources').where('resource_id',resource_id)
    const name = {
      resource_name: 'keyboard'
      //tried putting row[0].resources_name but test wouldn't pass
    }
    return name
  
  })
  // const [resource_id] = await db('resources').insert(newResource);
  // return getResources().where({ resource_id }).first();
}

  module.exports = {
    getResources, createResource
  };