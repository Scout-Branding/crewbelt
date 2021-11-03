import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"
import iconIos from "../images/icon-ios.svg"
import iconWindows from "../images/icon-windows.svg"
import Button from "./button"

const AppButtons = () => {
  const data = useStaticQuery(graphql`
    query AppLinks {
      site {
        siteMetadata {
          appLinks {
            ios
            microsoft
          }
        }
      }
    }
  `)

  const appLinks = data.site.siteMetadata.appLinks

  return (
    <>
      {appLinks?.ios && (
        <Button
          type="secondary"
          tw="mr-2 inline-flex items-center flex-row"
          href={appLinks.ios}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconIos} alt="" tw="w-4 h-4 mr-2" />
          Download for iOS
        </Button>
      )}

      {appLinks?.microsoft && (
        <Button
          tw="inline-flex items-center flex-row"
          href={appLinks.microsoft}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconWindows} alt="" tw="w-4 h-4 mr-2" />
          Download for Windows
        </Button>
      )}
    </>
  )
}

export default AppButtons
