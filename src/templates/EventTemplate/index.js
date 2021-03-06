import React, { useState, useEffect } from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Heading1,
  Heading2,
} from "../../components/global-styles/typography.css"

import {
  EventHeroContainer,
  EventContentContainer,
  DateContainer,
  DateWrapper,
  Time,
  ButtonWrapper,
  ImageWrapper,
} from "./index.css"

import { TextContainer } from "../../components/Pages/SlideOutMenuPages/Space/Space.css"
import { Button } from "../../components/global-styles/GlobalStyles.css"
import { BreakLine } from "../../components/MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import Slider from "../../components/ImageSlider"
import { useStaticQuery, graphql } from "gatsby"

const EventTemplate = ({  }) => {
  // const eventData = pageContext.eventData
  // const eventDateTime = eventData.eventDate.split(" ")
  // const [imageData, setImageData] = useState([]);
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allContentfulLongsongEvents {
  //       edges {
  //         node {
  //           id
  //           eventMedia {
  //             title
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // useEffect(() => {
  //   data.allContentfulLongsongEvents.edges.forEach(({node}) => {
  //     if(node.id === eventData.id) setImageData(node.eventMedia)
  //   })
  // }, [eventData, data])

  return (
    <Layout fd="column">
      <Seo title="Home" />
      {/* <EventHeroContainer>
        <ImageWrapper>
          {imageData.length > 0 && <Slider imageData={imageData} />}
          <StaticImage
            className="play-button"
            src="../../images/EventTemplate/playbutton.png"
            alt="play-button"
          />
          <StaticImage
            className="fullscreen-button"
            src="../../images/EventTemplate/fullscreenbutton.png"
            alt="fullscreen-button"
          />
        </ImageWrapper>
        <DateContainer>
          <DateWrapper>
            <Heading2>{eventDateTime[0]}</Heading2>
            <Time>{eventDateTime[1]}</Time>
          </DateWrapper>
          <ButtonWrapper>
            <Button>VIEW NEXT DAY</Button>
            <Button>VIEW PREVIOUS DAY</Button>
          </ButtonWrapper>
        </DateContainer>
      </EventHeroContainer>
      <EventContentContainer>
        <TextContainer marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="lg">{eventData.eventName}</Heading1>
          {renderRichText(eventData.eventDescription)}
          <Heading1 marginBottom="lg">{eventData.drinksSpecialTitle}</Heading1>
          {renderRichText(eventData.drinksSpecialDetails)}
          <Heading1 marginBottom="lg">{eventData.foodSpecialTitle}</Heading1>
          {renderRichText(eventData.foodSpecialDetails)}
          <Button>RETURN TO CALENDAR OVERVIEW</Button>
        </TextContainer>
      </EventContentContainer> */}
    </Layout>
  )
}

export default EventTemplate
