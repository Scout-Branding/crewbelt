import * as React from "react"
import tw, { styled, theme } from "twin.macro"
import FeaturesContractor from "./features-contractor"
import Container from "./container"
import { H3 } from "./headings"
import iconCalendar from "../images/icon-calendar.svg"
import iconContractor from "../images/icon-contractor.svg"
import iconMap from "../images/icon-map.svg"

const IconRow = styled.section`
  ${tw`py-24 bg-brand-gray-200`}

  --heading-color: ${theme`colors.brand.primary`}
`

const IconWrap = styled.div`
  ${tw`px-12 text-xl font-extrabold tracking-wide text-center`}

  img {
    ${tw`h-40 mx-auto mb-9`}
  }
`

const JourneyContractor = () => {
  return (
    <>
      <FeaturesContractor />
      <IconRow>
        <Container>
          <H3>As an independent contractor, CrewBelt enables you to:</H3>
          <div tw="flex justify-center mt-16">
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
          </div>
        </Container>
      </IconRow>
    </>
  )
}

export default JourneyContractor
