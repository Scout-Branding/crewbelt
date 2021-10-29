import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <Container>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
  </Layout>
)

export default IndexPage
