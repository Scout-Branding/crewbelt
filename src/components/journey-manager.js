import * as React from "react"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Features from "./features"
import IconRow from "./icon-row"
import IconWrap from "./icon-wrap"
import iconCalendar from "../images/icon-calendar.svg"
import iconContractor from "../images/icon-contractor.svg"
import iconMap from "../images/icon-map.svg"
import CoverImage from "./cover-image"

const StyledCoverImage = styled(GatsbyImage)`
  ${tw`absolute inset-0`}
`

const JourneyManager = () => {
  const { coverImage } = useStaticQuery(
    graphql`
      query {
        coverImage: file(relativePath: { eq: "cover-manager.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1600)
          }
        }
      }
    `
  )

  return (
    <>
      <Features
        heading="Find and hire quality labor with a streamlined recruitment process."
        type="desktop"
        features={[
          {
            text: "Quickly find talent to hire for a job",
            image: "features-mobile.png",
          },
          {
            text: "See tradesman ratings from past engagements",
            image: "header-phone.png",
          },
          {
            text: "Search for applicants with a specific skill set",
            image: "features-mobile.png",
          },
          {
            text: "Negotiate pay rate",
            image: "features-mobile.png",
          },
          {
            text: "Collect time electronically",
            image: "features-mobile.png",
          },
          {
            text: "Receive automated invoices",
            image: "features-mobile.png",
          },
          {
            text: "Pay automatically upon approval of invoice",
            image: "features-mobile.png",
          },
        ]}
      />
      <IconRow heading="As a project manager, CrewBelt provides:">
        <IconWrap>
          <img src={iconContractor} alt="" />A cost-effective solution to engage
          quality contract labor
        </IconWrap>
        <IconWrap>
          <img src={iconMap} alt="" />
          Transparency and visibility into the contract labor force
        </IconWrap>
        <IconWrap>
          <img src={iconCalendar} alt="" />
          Broadened access to a skilled workforce
        </IconWrap>
      </IconRow>
      <CoverImage
        heading="Staff your next project in minutes"
        list={[
          "Create an account in the project manager desktop portal",
          "Create a job description and post it to our marketplace",
          "Review and select qualified applicants to hire for your project",
        ]}
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

export default JourneyManager
