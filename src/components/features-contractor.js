import * as React from "react"
import "twin.macro"
import Container from "./container"
import Features from "./features"
import { H2 } from "./headings"

const FeaturesContractor = () => {
  return (
    <Container tw="py-12">
      <H2>
        CrewBelt gives you the freedom to find jobs that fit your skillset.
      </H2>

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
