import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Container from "./container"
import FooterLink from "./footer-link"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import logoIcon from "../images/crewbelt-logo-icon.svg"
import downloadAndroid from "../images/download-android.png"
import downloadIos from "../images/download-ios.svg"
import downloadMicrosoft from "../images/download-microsoft.svg"
import termsOfUse from "../static/terms-of-use.pdf"
import privacyPolicy from "../static/privacy-policy.pdf"

const StyledFooter = styled.footer`
  ${tw`pt-16 text-sm leading-relaxed tracking-wide text-white pb-9 bg-brand-black`}
`

const StyledContainer = styled(Container)`
  ${tw`flex flex-wrap items-end justify-between`}
`

const Colophon = styled.div`
  ${tw`w-full text-xs leading-loose border-t border-white border-opacity-20 pt-9`}

  a {
    span {
      ${tw`transition-colors border-b border-transparent`}
    }

    &:hover span {
      ${tw`border-white`};
    }
  }
`

const Footer = ({ siteTitle, portalLink, appLinks }) => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div tw="md:w-1/4 mb-16">
          <img src={logoIcon} alt={siteTitle} tw="w-24" />
        </div>

        <div tw="md:w-1/4 mb-16">
          <span tw="font-extrabold">Need Help?</span>
          <br />
          <FooterLink
            link="mailto:support@crewbelt.com"
            title="support@crewbelt.com"
          />
          {/* <FooterLink link="tel:+18885550000" title="888.555.0000" /> */}
        </div>

        <div tw="md:w-1/4 mb-16">
          {portalLink && (
            <FooterLink
              link={portalLink}
              target="_blank"
              title="Project Manager Portal"
            />
          )}
          <FooterLink link={termsOfUse} target="_blank" title="Terms of use" />
          <FooterLink
            link={privacyPolicy}
            target="_blank"
            title="Privacy Policy"
          />
        </div>

        <div tw="md:w-1/4 mb-16 text-right flex">
          {appLinks?.ios && (
            <OutboundLink
              href={appLinks.ios}
              target="_blank"
              rel="noopener noreferrer"
              tw="mr-4"
            >
              <img
                src={downloadIos}
                alt="Download on the App Store"
                tw="h-12 inline-block"
              />
            </OutboundLink>
          )}

          {appLinks?.android && (
            <OutboundLink
              href={appLinks.android}
              target="_blank"
              rel="noopener noreferrer"
              tw="mr-4"
            >
              <img
                src={downloadAndroid}
                alt="Get it on Google Play"
                tw="h-12 inline-block"
              />
            </OutboundLink>
          )}

          {appLinks?.windows && (
            <OutboundLink
              href={appLinks.windows}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={downloadMicrosoft}
                alt="Get it from Microsoft"
                tw="h-12 inline-block"
              />
            </OutboundLink>
          )}
        </div>

        <Colophon id="colophon">
          &copy; {new Date().getFullYear()}, CrewBelt, LLC. All rights reserved.
          <br />
          <OutboundLink
            href="https://scoutbrand.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 10 11"
              tw="w-4 h-4 inline-block mr-2 align-middle"
            >
              <g fill="#fff">
                <path d="M9.996 2.139 9.82 2C9.717 1.918 7.272 0 5 0 2.729 0 .283 1.918.18 2l-.177.14L0 2.367c-.046 5.122 4.547 8.323 4.743 8.457L5 11l.257-.176c.195-.133 4.788-3.335 4.743-8.456l-.004-.229zm-4.936 8.16-.06.042-.059-.04C4.896 10.27.517 7.219.559 2.511v-.054L.6 2.424C.695 2.35 2.943.586 5 .586c2.057 0 4.304 1.764 4.401 1.838l.04.033v.055c.041 4.706-4.337 7.758-4.381 7.787z" />
                <path d="M5.906 2.539h-.684v2.238l2.032-1.264-.338-.58 1.188.307-.303 1.206-.344-.588-2.044 1.271 1.32.821.342-.588.305 1.205-1.19.309.338-.579-1.306-.814V7.79h.672l-.868.88-.867-.88h.686V5.483l-1.309.814.338.578-1.188-.308.304-1.204.343.588 1.321-.821-2.041-1.272-.343.587-.305-1.205 1.188-.308-.337.58 2.028 1.264V2.539h-.672l.866-.879.868.879z" />
                <path d="M4.844 2.539v2.236L2.816 3.511l.338-.578-1.189.307.305 1.205.343-.587 2.041 1.271-1.321.822-.343-.588-.304 1.204 1.188.309-.338-.579 1.308-.814V7.79h-.685l.867.88.868-.88h-.672V5.483l1.306.814-.338.579 1.19-.309-.306-1.204-.344.588-1.317-.822 2.044-1.271.344.587.303-1.205-1.188-.307.337.578-2.031 1.265V2.539h.684l-.868-.879-.866.879z" />
              </g>
            </svg>
            <span>Site by Scout Branding</span>
          </OutboundLink>
        </Colophon>
      </StyledContainer>
    </StyledFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
  portalLink: PropTypes.string,
  appLinks: PropTypes.object,
}

Footer.defaultProps = {
  siteTitle: ``,
  portalLink: ``,
}

export default Footer
