import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledWrap = styled.div`
  ${tw`w-1/3 px-12 text-xl font-extrabold tracking-wide text-center`}

  img,
  svg {
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
