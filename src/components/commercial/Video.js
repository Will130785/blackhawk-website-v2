import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VideoFile from '../../video/video.mp4'

class Video extends Component {
  render () {
    return (
      <div className='video'>
        <Container>
          <Row className='video__row'>
            <Col lg>
              <div className='video__content'>
                <p>All our commercial work comes with a certificate which you can show all your customers and give them confidence in you</p>
              </div>
            </Col>
            <Col lg>
              <div className='video__vid'>
                <video className='video__vid--mp4' src={VideoFile} controls>Your browser does not support this media type</video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Video
