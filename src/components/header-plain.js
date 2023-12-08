import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Container from "./container"
import headerBg from "../images/header-bg.svg"
import logo from "../images/crewbelt-logo.svg"

const StyledHeader = styled.header`
  ${tw`relative py-8 bg-center bg-no-repeat md:py-12 lg:py-24`}
  background-image: url(${headerBg});
  background-size: auto 110%;

  &::before {
    ${tw`absolute top-0 left-0 w-1/2 h-full bg-brand-gray-100`}
    content: '';
    z-index: -1;
  }

  > * {
    ${tw`relative z-10`}
  }
`

const Brand = styled(Link)`
  ${tw`block w-40`}
`

const NavContainer = styled(Container)`
  ${tw`flex items-end justify-between pb-6`}
`

const LinkUnderline = styled(OutboundLink)`
  ${tw`relative hidden text-base font-extrabold leading-loose tracking-wider uppercase transition-colors sm:inline-block text-brand-primary`}

  &::before,
  &::after {
    ${tw`absolute bottom-0 block h-1 rounded-sm`}
    content: "";
  }

  &::before {
    ${tw`z-10 w-0 duration-200 ease-in-out transform -translate-x-1/2 left-1/2 bg-brand-highlight-manager`}
    transition-property: width;
  }

  &::after {
    ${tw`w-full bg-brand-primary`}
  }

  &:hover {
    &::before {
      ${tw`w-full`}
    }
  }
`

const HeaderPlain = ({ title, siteTitle, portalLink }) => (
  <StyledHeader>
    <nav aria-label="Primary">
      <NavContainer>
        <Brand to="/">
          <img src={logo} alt={siteTitle} />
        </Brand>
        <div>
          {portalLink && (
            <LinkUnderline
              href={portalLink}
              target="_blank"
              rel="nofollow noopener"
            >
              Project Manager Portal
            </LinkUnderline>
          )}
        </div>
      </NavContainer>
    </nav>
    <Container tw="py-8 md:py-16 lg:py-32">
      <h1 tw="font-display uppercase text-5xl md:text-7xl 2xl:text-8xl mb-6 md:w-10/12 lg:w-7/12">
        {title}
      </h1>
    </Container>
  </StyledHeader>
)

HeaderPlain.propTypes = {
  siteTitle: PropTypes.string,
  portalLink: PropTypes.string,
  appLinks: PropTypes.object,
}

HeaderPlain.defaultProps = {
  siteTitle: ``,
  portalLink: ``,
}

export default HeaderPlain
