import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled, css } from "twin.macro"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import Container from "./container"
import { H2 } from "./headings"
import Feature from "./feature"
import Image from "./image"
import bgMobile from "../images/mask-mobile.png"
import bgDesktop from "../images/mask-desktop.png"

const FeaturesWrap = styled.div`
  ${tw`relative flex flex-col overflow-hidden text-2xl font-medium lg:flex-row lg:items-center lg:justify-between`}
  min-height: 600px;
`

const featureListVariants = {
  mobile: tw`lg:w-1/3`,
  desktop: tw`lg:w-1/4`,
}

const FeatureList = styled.ul(() => [
  tw`relative z-20 order-last lg:order-none`,
  ({ type = "mobile" }) => featureListVariants[type],
])

const StyledTransition = styled.div`
  ${tw`hidden lg:block`}

  .fade-enter {
    [data-main-image] {
      ${tw`(transform translate-y-1/2 opacity-0)!`}
    }
  }

  .fade-exit {
    [data-main-image] {
      ${tw`(transform translate-y-0 opacity-100)!`}
    }
  }

  .fade-enter-active {
    [data-main-image] {
      ${tw`(translate-y-0 opacity-100)!`}
    }
  }

  .fade-exit-active {
    [data-main-image] {
      ${tw`(translate-y-1/2 opacity-0)!`}
    }
  }

  .fade-enter {
    [data-main-image] {
      transition: opacity 100ms, transform 100ms;
      will-change: opacity, transform;
    }
  }

  .fade-exit {
    [data-main-image] {
      transition: opacity 250ms, transform 250ms !important;
    }
  }
`

const styledImageVariants = {
  mobile: css`
    ${tw`lg:w-1/4`}

    &::before {
      background-image: url(${bgMobile});
    }

    img {
      padding: 13% 0;
    }
  `,
  desktop: css`
    ${tw`lg:w-2/3`}

    &::before {
      background-image: url(${bgDesktop});
    }

    img {
      padding: 20% 0;
    }
  `,
}

const StyledImage = styled(Image)(() => [
  css`
    ${tw`absolute top-0 bottom-0 transform -translate-x-1/2 left-1/2`}
    height: 600px;

    &::before {
      ${tw`absolute inset-0 z-10 bg-center bg-no-repeat bg-cover`}
      content: "";
    }
  `,
  ({ type = "mobile" }) => styledImageVariants[type],
])

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
      <FeaturesWrap>
        <FeatureList {...{ type }}>
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
        </FeatureList>

        <StyledTransition>
          <SwitchTransition>
            <CSSTransition key={activeFeature} classNames="fade" timeout={200}>
              <StyledImage
                alt={features[activeFeature].text}
                filename={features[activeFeature].image}
                imgStyle={{ objectFit: "contain" }}
                {...{ type }}
              />
            </CSSTransition>
          </SwitchTransition>
        </StyledTransition>

        <FeatureList {...{ type }}>
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
        </FeatureList>
      </FeaturesWrap>
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
