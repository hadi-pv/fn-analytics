import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import TopBar from 'components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export default function analytics({users,messages}) {

  const typearray=[['000','ptn'],['111','ptn'],['222','ptn'],['333','ptn'],['000','lsn'],['111','lsn'],['222','lsn'],['333','lsn']]

  
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
        <Row>
          {
            typearray.map((arr,id)=>{
                const value=users.filter((k)=>k.ratingtype==arr[0] && k.newstype==arr[1]).length
              return(
                <>
                  <Col key={id} className='border m-1 p-1'>
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
