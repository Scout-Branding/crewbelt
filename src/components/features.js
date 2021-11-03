import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Container from "./container"
import { H2 } from "./headings"
import Feature from "./feature"
import Image from "./image"

const StyledImage = styled(Image)`
  ${tw`px-24`}
  height: 80vh;
  max-height: 600px;
`

const Features = ({ heading, features, type }) => {
  const [activeFeature, setActiveFeature] = React.useState(0)
  const featuresHalfCount = Math.floor(features.length / 2)
  const featuresLeft = features.slice(0, featuresHalfCount)
  const featuresRight = features.slice(featuresHalfCount, features.length)

  const handleMouseEnter = event => {
    setActiveFeature(parseInt(event.target.dataset.index))
  }

  return (
    <Container tw="py-12">
      {heading && <H2>{heading}</H2>}

      <div tw="flex items-center font-medium text-2xl">
        <ul tw="w-1/3">
          {featuresLeft.map((feature, i) => {
            const featureIndex = features.length - (features.length - i)
            return (
              <Feature
                key={featureIndex}
                data-index={featureIndex}
                active={featureIndex === activeFeature}
                onMouseEnter={handleMouseEnter}
                align="right"
              >
                {feature.text}
              </Feature>
            )
          })}
        </ul>
        <StyledImage
          alt={features[activeFeature].text}
          filename={features[activeFeature].image}
          imgStyle={{ objectFit: "contain" }}
        />
        <ul tw="w-1/3">
          {featuresRight.map((feature, i) => {
            const featureIndex =
              features.length - (features.length - (i + featuresHalfCount))
            return (
              <Feature
                key={featureIndex}
                data-index={featureIndex}
                active={featureIndex === activeFeature}
                onMouseEnter={handleMouseEnter}
              >
                {feature.text}
              </Feature>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

Features.defaultProps = {
  heading: ``,
}

Features.propTypes = {
  heading: PropTypes.string,
  features: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["mobile", "desktop"]).isRequired,
}

export default Features
