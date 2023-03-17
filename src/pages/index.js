import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import TopBar from 'components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import Analytics from 'components/analytics';
import axios from 'axios'
import data from '../../news.json'
import Newsanalytics from 'components/newsanalytics';

export default function Home() {

  const [users,setUsers]=useState('')
  const [messages,setMessages]=useState('')
  const [logs,setLogs]=useState('')
  const [alldata,setAlldata]=useState('')
  const [loading,setLoading]=useState(true)
  const [value,setValue]=useState('Enter passphrase')

   const fetchData=async()=>{
      console.log('start fetching data')
      document.getElementById('loading').innerHTML='Loading.... 0%'

      let dupusers=await axios.get('/api/users')
      dupusers=await dupusers.data.message
      setUsers(dupusers)
      document.getElementById('loading').innerHTML='Loading.... 25%'

      let dupmessages=await axios.get('/api/messages')
      dupmessages=await dupmessages.data.message
      setMessages(dupmessages)
      document.getElementById('loading').innerHTML='Loading.... 50%'

      let duplogs=await axios.get('/api/logs')
      duplogs=await duplogs.data.message
      setLogs(duplogs)
      document.getElementById('loading').innerHTML='Loading.... 75%'

      let dupalldata=await axios.get('/api/alldata')
      dupalldata=await dupalldata.data.message
      setAlldata(dupalldata)
      document.getElementById('loading').innerHTML='Loading.... 100%'
      
    }

    

  
  return (
    <>
      <TopBar />
      <br/> 
      <center>
        <input className='p-1 m-2 rounded' placeholder='Enter the passphrase' onChange={(e)=>{
          axios.post('/api/password',{password:e.target.value})
          .then((req)=>{
            console.log("Correct Password")
            document.getElementById('fetchdata').hidden=false
            document.getElementById('fetchdata').innerHTML='Fetch Data'
          })
          .catch((err)=>{
          })
        }}></input>
      </center>
      <br/>
      <center><strong><button id='fetchdata' hidden={true} type='button' className='btn btn-primary' onClick={fetchData}>Enter the passphrase</button></strong></center>
        <hr/>
      {(!users || !messages || !logs)? <h1 id='loading'></h1>:
      <>
      <Analytics users={users} messages={messages} logs={logs} alldata={alldata}/>
      <Newsanalytics logs={logs} news={data} users={users} messages={messages}/>
      </>}
    </>
  )
}
