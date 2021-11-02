import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledContainer = styled.div`
  ${tw`container mx-auto`}
`

const JourneyManager = ({ className, children }) => {
  return (
    <StyledContainer className={className}>{children}Manager</StyledContainer>
  )
}

JourneyManager.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default JourneyManager
