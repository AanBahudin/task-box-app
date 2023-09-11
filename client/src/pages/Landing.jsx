import { About, Hero, LandingBox, OurMIssion, SmallInfo } from "../components/landing"

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <LandingBox />
      <SmallInfo title="LET'S CREATE YOUR ACCOUNT !" buttonText='Get Started ->' />
      <OurMIssion />
    </>
  )
}

export default Landing