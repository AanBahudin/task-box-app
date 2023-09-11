import { About, Hero, LandingBox, OurMIssion, SmallInfo } from "../components/landing"

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <LandingBox />
      <OurMIssion />
      <SmallInfo title="LET'S CREATE YOUR ACCOUNT !" buttonText='Get Started ->' />
    </>
  )
}

export default Landing