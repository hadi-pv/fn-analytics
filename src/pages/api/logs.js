import axios from 'axios'
import dbClient from './postgres'

export default async function handler(req, res) {
    


  const queryText='select * from logs'
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
                  const {id,news_id,user_id,task,rt,nt,send_to,close_from,time_in_sec,add_info}=row
                  return {id,news_id,user_id,task,rt,nt,send_to,close_from,time_in_sec,add_info}
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