import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import TopBar from 'components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import { ExportToCsv } from 'export-to-csv';


export default function analytics({users,messages,logs}) {

  const typearray=[['000','ptn'],['111','ptn'],['222','ptn'],['333','ptn'],['000','lsn'],['111','lsn'],['222','lsn'],['333','lsn']]

  const usercsv=()=>{
    console.log(users[0])
    var data=users.map((user)=>{
      var socialmediausage=''
      user.socialmediausage.map((s)=>{
        socialmediausage+=s+','
      })
      return({
        user_id:user.user_id,
        name:user.name,
        age:user.age,
        gender:user.gender,
        mothertongue:user.mothertongue,
        homestate:user.homestate,
        educationalqualification:user.educationalqualification,
        educationalbackground:user.educationalbackground,
        occupation:user.occupation,
        socialmediausage:socialmediausage,
        socialmediausageorder:String(user.socialmediausageorder[1])+','+String(user.socialmediausageorder[2])+','+String(user.socialmediausageorder[3]),
        socialmediausagetime:user.socialmediausagetime,
        iswhatsappgroupmember:user.iswhatsappgroupmember,
        whatsappusagefrequencyfornews:user.whatsappusagefrequencyfornews,
        prefferedlanguageonsocialmedia:user.prefferedlanguageonsocialmedia,
        email:user.email,
        family:user.family,
        friend:user.friend,
        colleague:user.colleague,
        ratingtype:user.ratingtype,
        newstype:user.newstype,
        collegename:user.collegename,
        datetime:String(user.datetime)
      })
    })
       const options = { 
        filename: 'UsersCSV',
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'UsersCSV',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
       };
       
      const csvExporter = new ExportToCsv(options);
       
      csvExporter.generateCsv(data);
  }
  const messagecsv=()=>{
       const options = { 
        filename: 'MessagesCSV',
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'MessagesCSV',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
       };
       
      const csvExporter = new ExportToCsv(options);
       
      csvExporter.generateCsv(messages);
  }
  const logscsv=()=>{
       const options = { 
        filename: 'LogsCSV',
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'LogsCSV',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
       };
       
      const csvExporter = new ExportToCsv(options);
       
      csvExporter.generateCsv(logs);
  }
  return (
    <>
      <div style={{'padding':'5vh'}}>
        <Row>
          <Col>
            <h5>Number of users : &emsp;{users.length}</h5>
          </Col>
          <Col>
            <h5>Number of messages send : &emsp;{messages.length}</h5>
          </Col>
        </Row>
        <br/>
        <center>
        <Row style={{'width':'50%'}}>
          <Col style={{'padding':'1vh'}}><center><strong><button type='button' className='btn btn-primary' onClick={usercsv}>Users</button></strong></center></Col>
          <Col style={{'padding':'1vh'}}><center><strong><button type='button' className='btn btn-primary' onClick={messagecsv}>Messages</button></strong></center></Col>
          <Col style={{'padding':'1vh'}}><center><strong><button type='button' className='btn btn-primary' onClick={logscsv}>logs</button></strong></center></Col>
        </Row>
        </center>
        <br/>
        <Row>
          {
            typearray.map((arr,id)=>{
                const value=users.filter((k)=>k.ratingtype==arr[0] && k.newstype==arr[1]).length
              return(
                <>
                  <Col key={id} className={`${styles.col2} border m-1 p-1`}>
                    <h5>Rating : {arr[0]}</h5>
                    <h5>News Type : {arr[1]=='ptn'? 'Plain':'LikeShare'}</h5>
                    <h5>{value}</h5>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </div>
    </>
  )
}
