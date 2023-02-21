import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"
import iconAndroid from "../images/icon-android.svg"
import iconIos from "../images/icon-ios.svg"
import iconWindows from "../images/icon-windows.svg"
import Button from "./button"

const AppButtons = () => {
  const data = useStaticQuery(graphql`
    query AppLinks {
      site {
        siteMetadata {
          appLinks {
            android
            ios
            windows
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

      {appLinks?.android && (
        <Button
          type="secondary"
          tw="mr-2 inline-flex items-center flex-row"
          href={appLinks.android}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconAndroid} alt="" tw="w-4 h-4 mr-2" />
          Download for Android
        </Button>
      )}

      {appLinks?.windows && (
        <Button
          tw="inline-flex items-center flex-row"
          href={appLinks.windows}
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
