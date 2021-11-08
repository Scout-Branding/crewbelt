import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled, css, theme } from "twin.macro"

const StyledFeature = styled.li`
  ${tw`relative py-6 text-center`}

  &::before {
    ${tw`absolute bottom-0 z-0 w-0 h-1 duration-200 ease-in-out transform -translate-x-1/2 bg-transparent rounded-full left-1/2`}
    content: '';
    transition-property: background-color, height, width;
  }

  @media (min-width: ${theme`screens.lg`}) {
    &::before {
      ${tw`left-auto w-1 h-0 translate-x-0 -translate-y-1/2 top-1/2`}
    }
  }

  ${props =>
    props.align === "right" &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${tw`text-right`}

        &::before {
          ${tw`left-auto -right-4`}
        }
      }
    `}

  ${props =>
    props.align === "left" &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${tw`text-left`}

        &::before {
          ${tw`-left-4`}
        }
      }
    `}

  ${props =>
    props.active &&
    css`
      ${tw`font-extrabold`}

      &::before {
        ${tw`w-24 bg-brand-primary`}
      }

      @media (min-width: ${theme`screens.lg`}) {
        &::before {
          ${tw`w-1`}

          height: calc(100% - 2rem);
        }
      }
    `}

  &:hover {
    ${tw`font-extrabold cursor-pointer`}

    &::before {
      ${tw`w-24`}

      background-color: var(
        --feature-highlight,
        ${theme`colors.brand.highlight.contractor`}
      );
    }

    @media (min-width: ${theme`screens.lg`}) {
      &::before {
        ${tw`w-1`}

        height: calc(100% - 2rem);
      }
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
