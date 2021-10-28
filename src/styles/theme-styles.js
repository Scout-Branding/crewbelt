import React from "react"
import { Global } from "@emotion/react"
import tw, { GlobalStyles, css } from "twin.macro"
import "./fonts/mulish"
import Mulish from "./fonts/mulish"
import TypeKit from "./fonts/typekit"

const ThemeStyles = () => {
  return (
    <>
      <TypeKit />
      <Mulish />
      <GlobalStyles />
      <Global
        styles={css`
          html {
            ${tw``}
          }
        `}
      />
    </>
  )
}

export default ThemeStyles
