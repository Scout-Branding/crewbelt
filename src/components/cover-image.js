import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Container from "./container"
import iconCheck from "../images/icon-check.svg"
import AppButtons from "./app-buttons"

const StyledCoverImage = styled.section`
  ${tw`relative py-24 bg-brand-primaryFaded`}
`

const Heading = styled.h3`
  ${tw`w-1/4 text-6xl uppercase mb-9 font-display`}
`

const CheckWrap = styled.span`
  ${tw`flex-shrink-0 inline-block mr-3 align-middle`}

  width: 1.75em;
`

const CoverImage = ({ className, list, heading, children }) => {
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
                  <img src={iconCheck} alt="" />
                </CheckWrap>
                <span tw="pt-1">{item}</span>
              </li>
            ))}
          </ul>
        )}
        <AppButtons />
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
}

export default CoverImage
