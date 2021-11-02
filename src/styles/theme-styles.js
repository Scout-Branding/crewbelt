import React from "react"
import { GlobalStyles } from "twin.macro"
import "./fonts/mulish"
import Mulish from "./fonts/mulish"
import TypeKit from "./fonts/typekit"

const ThemeStyles = () => {
  return (
    <>
      <TypeKit />
      <Mulish />
      <GlobalStyles />
    </>
  )
}

export default ThemeStyles
