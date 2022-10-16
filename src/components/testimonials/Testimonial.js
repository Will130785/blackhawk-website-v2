import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TestimonialCard from './TestimonialCard'
import SiteButton from '../SiteButton'

class Testimonial extends Component {
  render () {
    return (
      <div class='testimonials'>
        <Container>
          <Row>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Highly recommended!!! Was abit reluctant to book due to a previous bad experience with another company but when these guys came over. WOW! What a transformation. My 15 year old cooker and extractor now looks better than new! These guys are awesome. Worth every penny! Massive thumbs up from me!' name='Marie Harris' />
              </div>
            </Col>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Our oven was an absolute mess after only cleaning it once in the last 2 years, and we couldn’t face doing it ourselves. Highly recommend this company - they spent an hour today cleaning on bank holiday Monday, no mess, no fuss and they’re absolutely sparkling! £45 for a single oven plus £4 for trays' name='Katie Parker' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Asked on a Sunday afternoon if they could fit us in on the Tuesday, and they went out of their way to make that happen. Did a fantastic job of cleaning the oven and pan and the oven looks like it had just been installed.  Great delivery and friendly service and have recommended to friends.' name='Steve Padmore' />
              </div>
            </Col>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Immediate response to my internet request for a quote and answered all my queries.  They managed to fit me in at short notice and the quality of the oven clean was superb.  I have no hesitation in recommending and would definitely use again.  Many Thanks' name='Paul Barnet' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test="I responded to an advert on facebook, and received a speedy response. We quickly agreed on a date for Blackhawn Oven cleaners to come and sort out my ten year old double oven. A very polite and professional young man arrived slightly earlier than we'd arranged, and quickly got busy with my oven. It was all done in around an hour, and my oven now looks like new. I would highly recommend using Blackhawk Oven Cleaners for a quick, professional service." name='Karen Angiolini' />
              </div>
            </Col>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test="Cleaned my oven yesterday with BlackHawk. Ryan, the technician, arrived on time. Oven looks sparkling new. Also very good pricing compared to other oven cleaners in the area so I have no hesitation in recommending blackhawk. Use them, you won't be disappointed." name='Nate Ovie' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test="Last company I used damaged my oven! As you can imagine we was very cautious going down this route. The man from this company spent about 5 min just examining my oven and told me what can be done and what can't be done due to the risk of damage. We appreciated his honesty and he done a fantastic job with out any damage! Thank you will be using you again." name='Anna Lowe' />
              </div>
            </Col>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Had our Oven cleaned today and it was an exceptional service. Communication, arrival time and the actual clean was very impressive. My wife and I could not be happier. Already told our neighbours.' name='Kamran Hussain' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test="What a difference thank you ! Oven looks New and no damage done. ( I have used others in the area who have damaged my oven before) Young man took extra care and didn't force anything open and explained everything I needed to know. Extremley happy." name='Liz Carson' />
              </div>
            </Col>
            <Col lg>
              <div className='testimonials__card'>
                <TestimonialCard test='Arrived on time and did an excellent Job. I have used select oven cleaning and mr clean oven and they did a good enough job but this lot are a level up I would say. I will Deffinatley be recommending to family and friends.' name='Chris Martin' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='testimonials__button'>
                <SiteButton location='/contact' content='Get in contact' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Testimonial
