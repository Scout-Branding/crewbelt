import * as React from "react"
import tw, { styled } from "twin.macro"
import Container from "./container"
import Features from "./features"

const Heading = styled.h2`
  ${tw`mb-12 text-4xl font-medium text-center`}
`

const FeaturesContractor = () => {
  return (
    <Container tw="py-12">
      <Heading>
        CrewBelt gives you the freedom to find jobs that fit your skillset.
      </Heading>

      <Features
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
    </Container>
  )
}

export default FeaturesContractor
