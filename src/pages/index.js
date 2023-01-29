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
  const [loading,setLoading]=useState(true)

   const fetchData=async()=>{
      document.getElementById('loading').hidden=false
      let dupusers=await axios.get('/api/users')
      dupusers=await dupusers.data.message
      setUsers(dupusers)
      let dupmessages=await axios.get('/api/messages')
      dupmessages=await dupmessages.data.message
      setMessages(dupmessages)
      let duplogs=await axios.get('/api/logs')
      duplogs=await duplogs.data.message
      setLogs(duplogs)
      console.log(duplogs)
    }

  
  return (
    <>
      <TopBar />
      <br/> 
      <center><strong><button type='button' className='btn btn-primary' onClick={fetchData}>fetchdata</button></strong></center>

      {(!users || !messages || !logs)? <h1 id='loading' hidden>Loading....</h1>:
      <>
      <Analytics users={users} messages={messages}/>
      <Newsanalytics logs={logs} news={data} users={users} messages={messages}/>
      </>}
    </>
  )
}
