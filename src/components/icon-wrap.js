import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledWrap = styled.div`
  ${tw`px-12 text-xl font-extrabold tracking-wide text-center`}

  img {
    ${tw`h-40 mx-auto mb-9`}
  }
`

const IconWrap = ({ className, children }) => {
  return <StyledWrap className={className}>{children}</StyledWrap>
}

IconWrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default IconWrap
