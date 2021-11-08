import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Container from "./container"
import IconCheck from "../icons/icon-check"

const StyledCoverImage = styled.section`
  ${tw`relative py-24 bg-brand-primaryFaded`}
`

const Heading = styled.h3`
  ${tw`text-6xl uppercase md:w-1/2 xl:w-1/4 mb-9 font-display`}
`

const CheckWrap = styled.span`
  ${tw`flex-shrink-0 inline-block mr-3 align-middle`}

  width: 1.75em;
`

const CoverImage = ({ className, list, heading, children, callToAction }) => {
  return (
    <StyledCoverImage className={className}>
      {children}
      <Container tw="relative z-10">
        {heading && <Heading>{heading}</Heading>}
        {list && (
          <ul tw="mb-12">
            {list.map((item, i) => (
              <li key={i} tw="mb-4 text-2xl font-medium flex">
                <CheckWrap>
                  <IconCheck />
                </CheckWrap>
                <span tw="pt-1">{item}</span>
              </li>
            ))}
          </ul>
        )}
        {callToAction && <>{callToAction}</>}
      </Container>
    </StyledCoverImage>
  )
}

CoverImage.defaultProps = {
  className: ``,
  heading: ``,
  list: [],
}

CoverImage.propTypes = {
  list: PropTypes.array,
  className: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node,
  callToAction: PropTypes.node,
}

export default CoverImage
