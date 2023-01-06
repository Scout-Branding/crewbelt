import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled, theme } from "twin.macro"

const StyledH2 = styled.h2`
  ${tw`mb-12 text-2xl font-extrabold text-center lg:font-medium sm:text-3xl md:text-4xl`}
`

export const H2 = ({ className, children }) => {
  return (
    <StyledH2
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

H2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const StyledH3 = styled.h3`
  ${tw`mb-12 text-3xl font-medium text-center`}

  color: var(--heading-color, ${theme`colors.black`})
`

export const H3 = ({ className, children }) => {
  return (
    <StyledH3
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default H2
