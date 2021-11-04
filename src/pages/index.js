import * as React from "react"
import tw, { styled, theme } from "twin.macro"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import JourneyContractor from "../components/journey-contractor"
import JourneyManager from "../components/journey-manager"
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

  &:hover::before {
    ${tw`w-24`}

    background-color: var(
      --tabs-highlight,
      ${theme`colors.brand.highlight.contractor`}
    );
  }

  &[data-journey="manager"] {
    --tabs-highlight: ${theme`colors.brand.highlight.manager`};
  }
`

const StyledTransition = styled.div`
  ${tw`overflow-hidden`}

  &.fade-enter {
    opacity: 0;

    & > * {
      opacity: 0;
      transform: translateX(var(--journey-enter-translate-x, 20%));
    }
  }

  &.fade-exit {
    opacity: 1;

    & > * {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.fade-enter-active {
    opacity: 1;

    & > * {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.fade-exit-active {
    opacity: 0;

    & > * {
      opacity: 0;
      transform: translateX(var(--journey-exit-translate-x, -20%));
    }
  }

  &.fade-enter-active,
  &.fade-exit-active {
    transition: opacity 250ms;

    & > * {
      transition: opacity 250ms, transform 250ms;
    }
  }
`

const SwitchJourneys = styled.button`
  ${tw`w-full text-xl tracking-wider text-center text-white uppercase py-9 bg-brand-primary font-display`}

  span {
    ${tw`transition-colors border-b border-transparent pointer-events-none`}
  }

  &:hover {
    span {
      ${tw`border-white`}
    }
  }
`

const IndexPage = () => {
  const [tabIndex, setTabIndex] = React.useState(parseInt(0))
  const [journey, setJourney] = React.useState("contractor")
  const [firstLoad, setFirstLoad] = React.useState(false)
  const tabsRef = React.useRef()
  const journeysRef = React.useRef()
  const scrollToRef = React.useRef()

  const handleClick = event => {
    setFirstLoad(true)
    setTabIndex(event.target.dataset.index)
    setJourney(event.target.dataset.journey)
  }

  React.useEffect(() => {
    if (tabsRef.current) {
      tabsRef.current.style.setProperty(
        "--tabs-active-position",
        `${tabIndex * 0.5 * 100}%`
      )
    }

    if (journeysRef.current) {
      journeysRef.current.style.setProperty(
        "--journey-exit-translate-x",
        `${tabIndex < 1 ? "-5%" : "5%"}`
      )
      journeysRef.current.style.setProperty(
        "--journey-enter-translate-x",
        `${tabIndex < 1 ? "5%" : "-5%"}`
      )
    }
  }, [tabIndex])

  return (
    <Layout>
      <Seo />
      <How ref={scrollToRef}>
        <Container>
          <h2 tw="font-extrabold text-3xl">How will you be using CrewBelt?</h2>
        </Container>
      </How>
      <Container>
        <Tabs ref={tabsRef}>
          <TabButton
            onClick={handleClick}
            data-index={0}
            data-journey="contractor"
          >
            I'm an Independent Electrician
          </TabButton>
          <TabButton
            onClick={handleClick}
            data-index={1}
            data-journey="manager"
          >
            I'm a Project Manager
          </TabButton>
        </Tabs>
      </Container>

      <div ref={journeysRef}>
        <SwitchTransition>
          <CSSTransition
            key={journey}
            classNames="fade"
            timeout={200}
            onEntered={() => {
              if (!scrollToRef.current || !firstLoad) {
                return
              }

              scrollToRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <StyledTransition>
              {journey === "contractor" && (
                <>
                  <JourneyContractor />
                  <SwitchJourneys
                    onClick={handleClick}
                    data-index={1}
                    data-journey="manager"
                  >
                    <span>View as Project Manager</span>
                  </SwitchJourneys>
                </>
              )}
              {journey === "manager" && (
                <>
                  <JourneyManager />
                  <SwitchJourneys
                    onClick={handleClick}
                    data-index={0}
                    data-journey="contractor"
                  >
                    <span>View as Independent Contractor</span>
                  </SwitchJourneys>
                </>
              )}
            </StyledTransition>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </Layout>
  )
}

export default IndexPage
