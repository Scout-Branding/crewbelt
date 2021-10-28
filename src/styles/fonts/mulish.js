import React from "react"
import { Helmet } from "react-helmet"
import { injectGlobal } from "@emotion/css"
import mulishRegular from "../../static/fonts/mulish-v5-latin-regular.woff2"
import mulishMedium from "../../static/fonts/mulish-v5-latin-500.woff2"
import mulishBold from "../../static/fonts/mulish-v5-latin-700.woff2"
import mulishExtrabold from "../../static/fonts/mulish-v5-latin-800.woff2"

injectGlobal`
  /* mulish-regular - latin */
  @font-face {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(""),
      url("${mulishRegular}") format("woff2")
  }
  /* mulish-500 - latin */
  @font-face {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(""),
      url("${mulishMedium}") format("woff2")
  }
  /* mulish-700 - latin */
  @font-face {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(""),
      url("${mulishBold}") format("woff2")
  }
  /* mulish-800 - latin */
  @font-face {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(""),
      url("${mulishExtrabold}") format("woff2")
  }
`

const Mulish = () => {
  return (
    <Helmet>
      <link
        rel="preload"
        href={mulishRegular}
        as="font"
        type="font/woff2"
        crossorigin
      />
      <link
        rel="preload"
        href={mulishMedium}
        as="font"
        type="font/woff2"
        crossorigin
      />
      <link
        rel="preload"
        href={mulishBold}
        as="font"
        type="font/woff2"
        crossorigin
      />
      <link
        rel="preload"
        href={mulishExtrabold}
        as="font"
        type="font/woff2"
        crossorigin
      />
    </Helmet>
  )
}

export default Mulish
