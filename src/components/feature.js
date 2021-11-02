import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled, css } from "twin.macro"

const StyledFeature = styled.li`
  ${tw`relative py-6`}

  &::before {
    ${tw`absolute z-0 w-1 h-0 duration-200 ease-in-out transform -translate-y-1/2 bg-transparent rounded-full -left-4 top-1/2`}
    content: '';
    transform-property: background-color, height;
  }

  ${props =>
    props.align === "right" &&
    css`
      ${tw`text-right`}

      &::before {
        ${tw`left-auto -right-4`}
      }
    `}

  ${props =>
    props.active &&
    css`
      ${tw`font-extrabold`}

      &::before {
        ${tw`bg-brand-primary`}

        height: calc(100% - 2rem);
      }
    `}

  &:hover {
    ${tw`font-extrabold cursor-pointer`}

    &::before {
      ${tw`bg-brand-highlight-contractor`}

      height: calc(100% - 2rem);
    }
  }
`

const Feature = ({ children, align, active, ...props }) => {
  return (
    <StyledFeature {...{ align }} {...{ active }} {...props}>
      {children}
    </StyledFeature>
  )
}

Feature.defaultProps = {
  active: false,
  align: "left",
  image: "",
}

Feature.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  align: PropTypes.string,
  image: PropTypes.string,
}

export default Feature
