import * as React from "react"
import tw, { styled, theme } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Features from "./features"
import IconRow from "./icon-row"
import IconWrap from "./icon-wrap"
import CoverImage from "./cover-image"
import Button from "./button"
import iconMoney from "../images/icon-money.svg"
import iconSelect from "../images/icon-select.svg"
import IconMap from "../icons/icon-map"

const StyledCoverImage = styled(GatsbyImage)`
  ${tw`absolute inset-0`}
`

const JourneyManager = () => {
  const { coverImage, meta } = useStaticQuery(
    graphql`
      query {
        coverImage: file(relativePath: { eq: "cover-manager.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1600)
          }
        }
        meta: site {
          siteMetadata {
            portalLink
          }
        }
      }
    `
  )

  return (
    <>
      <style>
        {`:root{
          --heading-color: ${theme`colors.brand.highlight.manager`};
          --feature-highlight: ${theme`colors.brand.highlight.manager`};
        }`}
      </style>
      <Features
        heading="Add quality personnel to your crew with a streamlined recruitment process."
        type="desktop"
        features={[
          {
            text: "Quickly find talent to hire for a job",
            image: "features-desktop-1.png",
          },
          {
            text: "See tradesman ratings from past engagements",
            image: "features-desktop-2.png",
          },
          {
            text: "Search for applicants with a specific skill set",
            image: "features-desktop-3.png",
          },
          {
            text: "Negotiate pay rate",
            image: "features-desktop-4.png",
          },
          {
            text: "Collect time electronically",
            image: "features-desktop-5.png",
          },
          {
            text: "Receive automated invoices",
            image: "features-desktop-6.png",
          },
          {
            text: "Pay automatically upon approval of invoice",
            image: "features-desktop-7.png",
          },
        ]}
      />
      <IconRow heading="As a project manager, CrewBelt provides:">
        <IconWrap heading="A cost-effective solution to engage quality contract labor">
          <img src={iconMoney} alt="" tw="w-36" />
        </IconWrap>
        <IconWrap heading="Transparency and visibility into the contract labor force">
          <img src={iconSelect} alt="" />
        </IconWrap>
        <IconWrap heading="Broadened access to a skilled workforce">
          <IconMap />
        </IconWrap>
      </IconRow>
      <CoverImage
        heading="Staff your next project in minutes"
        list={[
          "Create an account in the project manager desktop portal",
          "Create a job description and post it to our marketplace",
          "Review and select qualified applicants to hire for your project",
        ]}
        callToAction={
          meta?.siteMetadata?.portalLink && (
            <Button
              type="primary"
              tw="mr-2 inline-flex items-center flex-row"
              href={meta.siteMetadata.portalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Create an Account
            </Button>
          )
        }
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
