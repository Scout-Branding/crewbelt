import * as React from "react"
import tw, { styled, theme } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Features from "./features"
import IconRow from "./icon-row"
import IconWrap from "./icon-wrap"
import CoverImage from "./cover-image"
import AppButtons from "./app-buttons"
import iconCalendar from "../images/icon-calendar.svg"
import iconContractor from "../images/icon-contractor.svg"
import IconMap from "../icons/icon-map"

const StyledCoverImage = styled(GatsbyImage)`
  ${tw`absolute inset-0`}
`

const JourneyContractor = () => {
  const { coverImage } = useStaticQuery(
    graphql`
      query {
        coverImage: file(relativePath: { eq: "cover-contractor.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1600)
          }
        }
      }
    `
  )

  return (
    <>
      <style>
        {`:root{
          --heading-color: ${theme`colors.brand.primary`};
        }`}
      </style>
      <Features
        heading="CrewBelt gives you the freedom to find jobs that fit your skillset."
        type="mobile"
        features={[
          {
            text: "Market yourself with a customizable profile",
            image: "test-1.png",
          },
          {
            text: "Quickly apply for projects that interest you",
            image: "test-2.png",
          },
          {
            text: "Negotiate your pay rate",
            image: "test-1.png",
          },
          {
            text: "Electronically submit your time",
            image: "test-2.png",
          },
          {
            text: "Receive payment via direct deposit",
            image: "test-1.png",
          },
          {
            text: "Earn more opportunities through the rating system",
            image: "test-2.png",
          },
        ]}
      />
      <IconRow heading="As an independent contractor, CrewBelt enables you to:">
        <IconWrap heading="Increase your value">
          <img src={iconContractor} alt="" />
        </IconWrap>
        <IconWrap heading="See more opportunities">
          <IconMap />
        </IconWrap>
        <IconWrap heading="Control your schedule">
          <img src={iconCalendar} alt="" />
        </IconWrap>
      </IconRow>
      <CoverImage
        heading="Find your next job in minutes"
        list={[
          "Download the CrewBelt app",
          "Customize your profile",
          "Browse listings and apply with a tap",
        ]}
        callToAction={<AppButtons />}
      >
        {coverImage && (
          <StyledCoverImage
            alt=""
            image={getImage(coverImage.childImageSharp)}
            loading="lazy"
          />
        )}
      </CoverImage>
    </>
  )
}

export default JourneyContractor
