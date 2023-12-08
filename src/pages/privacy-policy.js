import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Container from "../components/container";
import PrivacyContent from "../components/privacy-content";

const PrivacyPolicyPage = () => {
  return (
    <Layout plainHeader={true}>
      <Seo title="Privacy Policy"/>
      <Container>
        <PrivacyContent/>
      </Container>
    </Layout>
  );
}

export default PrivacyPolicyPage
