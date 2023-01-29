import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import TopBar from 'components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export default function newsanalytics({news,messages,users,logs}) {


  
  return (
    <>
      <Row style={{'padding':'5vh'}}>
        {
            news.map((v,index)=>{
                const k1=messages.filter((k)=>k.fk_news_id==v.id && k.send_to=='family').length
                const k2=messages.filter((k)=>k.fk_news_id==v.id && k.send_to=='friend').length
                const k3=messages.filter((k)=>k.fk_news_id==v.id && k.send_to=='colleague').length

                const k4=logs.filter((k)=>k.news_id==v.id && k.rt=='000' && k.task=='00').length
                const k5=logs.filter((k)=>k.news_id==v.id && k.rt=='000' && k.task=='01').length

                const k6=logs.filter((k)=>k.news_id==v.id && k.rt=='111' && k.task=='10').length
                const k7=logs.filter((k)=>k.news_id==v.id && k.rt=='111' && k.task=='11').length
                const k8=logs.filter((k)=>k.news_id==v.id && k.rt=='111' && k.task=='13').length

                const k9=logs.filter((k)=>k.news_id==v.id && k.rt=='222' && k.task=='20').length
                const k10=logs.filter((k)=>k.news_id==v.id && k.rt=='222' && k.task=='21').length
                const k11=logs.filter((k)=>k.news_id==v.id && k.rt=='222' && k.task=='22').length
                
                const k12=logs.filter((k)=>k.news_id==v.id && k.rt=='333' && k.task=='30').length
                const k13=logs.filter((k)=>k.news_id==v.id && k.rt=='333' && k.task=='31').length
                const k14=logs.filter((k)=>k.news_id==v.id && k.rt=='333' && k.task=='33').length

                return(
                <Col md={3} key={v.id} className='p-2 border'>
                    <Row className='bg-[#bde1b9] rounded-md ' >
                      <center className='d-md-block'><img className="h-full" src={v.image} alt="img" height={180} width={180} /></center>
                    </Row>
                    <Row>
                       <h5>News Type : {v.nt}</h5><h5>Fake or Real :{v.fake? 'Real':'Fake'}</h5> 
                    </Row>
                    <Row>
                        <Col>Family : {k1}</Col><Col>Friend : {k2}</Col><Col>Colleague : {k3}</Col>
                    </Row>
                    <Row className='p-2 border m-2'>
                        <h5>Rating type : 000</h5>
                        <Col className='p-2 border m-2'><h5>Send : {k4}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed : {k5}</h5></Col>
                    </Row>
                    <Row className='p-2 border m-2'>
                        <h5>Rating type : 111</h5>
                        <Col className='p-2 border m-2'><h5>Send : {k6}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 1 : {k7}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 3 : {k8}</h5></Col>
                    </Row>
                    <Row className='p-2 border m-2'>
                        <h5>Rating type : 222</h5>
                        <Col className='p-2 border m-2'><h5>Send : {k9}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 1 : {k10}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 2 : {k11}</h5></Col>
                    </Row>
                    <Row className='p-2 border m-2'>
                        <h5>Rating type : 333</h5>
                        <Col className='p-2 border m-2'><h5>Send : {k12}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 1 : {k13}</h5></Col>
                        <Col className='p-2 border m-2'><h5>Closed at modal 3 : {k14}</h5></Col>
                    </Row>
                </Col>
                )
            })
        }
      </Row>
    </>
  )
}
