import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledContainer = styled.div`
  ${tw`container mx-auto`}
`

const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
