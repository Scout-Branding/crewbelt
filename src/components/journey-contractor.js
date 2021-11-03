import * as React from "react"
// import tw, { styled } from "twin.macro"
import Features from "./features"
import IconRow from "./icon-row"
import IconWrap from "./icon-wrap"
import iconCalendar from "../images/icon-calendar.svg"
import iconContractor from "../images/icon-contractor.svg"
import iconMap from "../images/icon-map.svg"

const JourneyContractor = () => {
  return (
    <>
      <Features
        heading="CrewBelt gives you the freedom to find jobs that fit your skillset."
        type="mobile"
        features={[
          {
            text: "Market yourself with a customizable profile",
            image: "features-mobile.png",
          },
          {
            text: "Quickly apply for projects that interest you",
            image: "header-phone.png",
          },
          {
            text: "Negotiate your pay rate",
            image: "features-mobile.png",
          },
          {
            text: "Electronically submit your time",
            image: "features-mobile.png",
          },
          {
            text: "Receive payment via direct deposit",
            image: "features-mobile.png",
          },
          {
            text: "Earn more opportunities through the rating system",
            image: "features-mobile.png",
          },
        ]}
      />
      <IconRow heading="As an independent contractor, CrewBelt enables you to:">
        <IconWrap>
          <img src={iconContractor} alt="" />
          Increase your value
        </IconWrap>
        <IconWrap>
          <img src={iconMap} alt="" />
          See more opportunities
        </IconWrap>
        <IconWrap>
          <img src={iconCalendar} alt="" />
          Control your schedule
        </IconWrap>
      </IconRow>
    </>
  )
}

export default JourneyContractor
