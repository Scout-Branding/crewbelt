import * as React from "react"
import tw, { styled } from "twin.macro"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import diamondPlate from "../images/diamond-plate.svg"

const How = styled.div`
  ${tw`py-24 text-center bg-top bg-repeat bg-brand-gray-100`}
  background-image: url(${diamondPlate});
  background-size: 77px;
`

const Tabs = styled.div`
  ${tw`relative flex max-w-2xl mx-auto text-white transform -translate-y-1/2 rounded-full bg-brand-primaryFaded`}

  &::after {
    ${tw`absolute top-0 bottom-0 z-0 w-1/2 duration-200 ease-in-out rounded-full shadow-lg bg-brand-primary`}
    content: '';
    left: var(--tabs-active-position, 0);
    transition-property: left;
  }
`

const TabButton = styled.button`
  ${tw`relative z-10 w-1/2 px-3 py-4 text-lg font-bold leading-tight text-center rounded-full md:tracking-wide`}

  &::before {
    ${tw`absolute z-0 w-0 h-1 duration-200 ease-in-out transform -translate-x-1/2 bg-transparent rounded-full left-1/2`}
    content: '';
    top: -2px;
    transform-property: background-color, width;
  }

  &:hover,
  &:focus,
  &:active {
    &::before {
      ${tw`w-24 bg-brand-highlight-contractor`}
    }
  }
`

const IndexPage = () => {
  const [tabIndex, setTabIndex] = React.useState(parseInt(0))
  const tabs = React.useRef()

  const handleClick = event => {
    setTabIndex(event.target.dataset.index)
  }

  React.useEffect(() => {
    if (!tabs.current) {
      return
    }

    tabs.current.style.setProperty(
      "--tabs-active-position",
      `${tabIndex * 0.5 * 100}%`
    )
  }, [tabIndex])

  return (
    <Layout>
      <Seo />
      <How>
        <Container>
          <h2 tw="font-extrabold text-3xl">How will you be using CrewBelt?</h2>
        </Container>
      </How>
      <Container>
        <Tabs ref={tabs}>
          <TabButton onClick={handleClick} data-index={0}>
            I'm an Independent Electrician
          </TabButton>
          <TabButton onClick={handleClick} data-index={1}>
            I'm a Project Manager
          </TabButton>
        </Tabs>
      </Container>
    </Layout>
  )
}

export default IndexPage
