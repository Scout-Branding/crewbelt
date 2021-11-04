import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "./container"
import AppButtons from "./app-buttons"
import headerBg from "../images/header-bg.svg"
import logo from "../images/crewbelt-logo.svg"

const StyledHeader = styled.header`
  ${tw`relative py-24 bg-center bg-no-repeat`}
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

const Header = ({ siteTitle, portalLink }) => (
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
    <Container tw="py-32">
      <h1 tw="font-display uppercase text-7xl 2xl:text-8xl mb-6 w-7/12">
        Go from Connection to Construction, on Demand.
      </h1>
      <p tw="text-xl mb-9 w-5/12">
        CrewBelt is the only digital employment platform that instantly connects
        independent electricians with contractors who need skilled talent on
        jobsites.
      </p>
      <div tw="w-7/12">
        <AppButtons />
      </div>
    </Container>

    <div tw="w-1/2 absolute left-1/2 bottom-0">
      <StaticImage
        src="../images/header-phone.png"
        width={600}
        alt="Using CrewBelt on a phone"
        loading="eager"
      />
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  portalLink: PropTypes.string,
  appLinks: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  portalLink: ``,
}

export default Header
