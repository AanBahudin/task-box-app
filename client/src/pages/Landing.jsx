import { About, Hero, LandingBox, OurMIssion, SmallInfo } from "../components/landing"

const Landing = () => {
  return (
    <>
      <Hero />
      <LandingBox />
      <SmallInfo title='NOT SURE ? TRY OUT OUR DEMO APP !' buttonText='Try Demo ->' />
      <About />
      <OurMIssion />
      <SmallInfo title="LET'S CREATE YOUR ACCOUNT !" buttonText='Get Started ->' />
    </>
  )
}

export default Landing