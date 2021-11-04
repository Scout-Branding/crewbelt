import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Container from "./container"
import { H3 } from "./headings"

const StyledRow = styled.section`
  ${tw`py-24 bg-brand-gray-100`}
`

const IconRow = ({ className, children, heading }) => {
  return (
    <StyledRow className={className}>
      <Container>
        {heading && <H3 tw="mb-16">{heading}</H3>}
        <div tw="flex justify-center">{children}</div>
      </Container>
    </StyledRow>
  )
}

IconRow.defaultProps = {
  className: ``,
  heading: ``,
}

IconRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
}

export default IconRow
