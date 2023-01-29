import axios from 'axios'
import dbClient from './postgres'

export default async function handler(req, res) {
    


  const queryText='select * from users'
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
                  const {user_id,name,age,gender,mothertongue,homestate,educationalqualification,educationalbackground,occupation,socialmediausage,socialmediausageorder,socialmediausagetime,iswhatsappgroupmember,whatsappusagefrequencyfornews,prefferedlanguageonsocialmedia,email,family,friend,colleague,ratingtype,newstype,collegename}=row
                  return {user_id,name,age,gender,mothertongue,homestate,educationalqualification,educationalbackground,occupation,socialmediausage,socialmediausageorder,socialmediausagetime,iswhatsappgroupmember,whatsappusagefrequencyfornews,prefferedlanguageonsocialmedia,email,family,friend,colleague,ratingtype,newstype,collegename}
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