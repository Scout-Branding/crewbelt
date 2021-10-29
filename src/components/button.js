import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const ButtonEl = styled.a`
  ${tw`inline-block px-6 py-2 text-sm tracking-wide text-white uppercase transition transform translate-y-0 rounded-full cursor-pointer bg-brand-secondary`}

  &:hover {
    ${tw`shadow-lg`}
    --tw-translate-y: -3px;
  }

  ${props => props.type === "primary" && tw`bg-brand-primary`}
  ${props => props.type === "secondary" && tw`bg-brand-secondary`}
`

const Button = ({ className, children, type, ...props }) => {
  return (
    <ButtonEl className={className} {...{ type }} {...props}>
      {children}
    </ButtonEl>
  )
}

Button.defaultProps = {
  type: "primary",
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default Button
