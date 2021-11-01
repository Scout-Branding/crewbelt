import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledLink = styled.a`
  ${tw`transition-colors border-b border-transparent`}

  &:hover {
    ${tw`border-white`}
  }
`

const FooterLink = ({ link, target, title }) => {
  return (
    <>
      <StyledLink href={link} target={target}>
        {title}
      </StyledLink>
      <br />
    </>
  )
}

FooterLink.propTypes = {
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FooterLink.defaultProps = {
  target: ``,
}

export default FooterLink
