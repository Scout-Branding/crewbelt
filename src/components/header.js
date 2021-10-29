import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Container from "./container"
import logo from "../images/crewbelt-logo.svg"
import iconIos from "../images/icon-ios.svg"
import iconWindows from "../images/icon-windows.svg"
import Button from "./button"

const Brand = styled(Link)`
  ${tw`block w-44`}
`

const NavContainer = styled(Container)`
  ${tw`flex items-end justify-between py-24`}
`

const LinkUnderline = styled.a`
  ${tw`inline-block font-extrabold leading-loose tracking-wider uppercase transition-colors text-brand-primary`}

  &::after {
    ${tw`block w-full h-1 transition-colors rounded-sm bg-brand-primary`}
    content: '';
  }

  &:hover {
    ${tw`text-brand-secondary`}

    &::after {
      ${tw`bg-brand-secondary`}
    }
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <nav aria-label="Primary">
      <NavContainer>
        <Brand to="/">
          <img src={logo} alt={siteTitle} />
        </Brand>
        <div>
          <LinkUnderline href="#1" target="_blank" rel="nofollow noopener">
            Project Manager Portal
          </LinkUnderline>
        </div>
      </NavContainer>
    </nav>
    <Container>
      <div tw="w-1/2">
        <h1 tw="font-display uppercase text-6xl 2xl:text-7xl mb-6">
          Go from Connection to Construction, on Demand.
        </h1>
        <p tw="text-xl mb-6">
          CrewBelt is the only digital employment platform that instantly
          connects independent electricians with contractors who need skilled
          talent on jobsites.
        </p>
        <Button type="secondary" tw="mr-2 inline-flex items-center flex-row">
          <img src={iconIos} alt="" tw="w-4 h-4 mr-2" />
          Download for iOS
        </Button>
        <Button tw="inline-flex items-center flex-row">
          <img src={iconWindows} alt="" tw="w-4 h-4 mr-2" />
          Download for Windows
        </Button>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
