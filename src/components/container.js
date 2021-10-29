import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const ContainerDiv = styled.div`
  ${tw`container mx-auto`}
`

const Container = ({ className, children }) => {
  return <ContainerDiv className={className}>{children}</ContainerDiv>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
