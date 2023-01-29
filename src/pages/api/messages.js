import axios from 'axios'
import dbClient from './postgres'

export default async function handler(req, res) {
    


  const queryText='select * from message'
  const queryValues=[]
  try{
      await dbClient.connect()
      

      const result=await dbClient.query(queryText,queryValues)
      if(result.rowCount==0){
          res.status(200).send('No data')
      }

      res.status(200).send({
          message:Array.from(
              result.rows,(row)=>{
                  const {id,fk_news_id,send_by,send_to,timetaken}=row
                  return {id,fk_news_id,send_by,send_to,timetaken}
              }
          )
      })
  }catch(e){
      console.log(e)
      res.status(500).send({
          message:"Server Error"
      })
  }
  return
  
  
}