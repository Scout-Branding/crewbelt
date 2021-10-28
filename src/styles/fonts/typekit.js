import React from "react"
import { Helmet } from "react-helmet"

const TypeKit = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://use.typekit.net" crossorigin />
      <link
        rel="preload"
        as="style"
        href="https://use.typekit.net/puh6lhj.css"
      />
      <link
        rel="stylesheet"
        href="https://use.typekit.net/puh6lhj.css"
        media="print"
        onload="this.media='all'"
      />
    </Helmet>
  )
}

export default TypeKit
