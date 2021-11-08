import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled, theme } from "twin.macro"

const StyledWrap = styled.div`
  ${tw`w-full mb-12 text-xl font-extrabold tracking-wide text-center md:px-8 lg:px-12 md:w-1/3 md:mb-0`}

  div {
    ${tw`flex items-center justify-center w-40 max-w-full mx-auto mb-9`}

    > * {
      ${tw`max-w-full max-h-full`}
    }
  }

  @media (min-width: ${theme`screens.md`}) {
    div {
      ${tw`w-auto h-40`}
    }
  }
`

const IconWrap = ({ className, children, heading }) => {
  return (
    <StyledWrap className={className}>
      <div>{children}</div>
      {heading}
    </StyledWrap>
  )
}

IconWrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
}

export default IconWrap
