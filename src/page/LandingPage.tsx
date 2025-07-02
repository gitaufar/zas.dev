import { HomePage } from "../section/HomePage"
import { OurServicesPage } from "../section/OurServicesPage"
import { AboutPage } from "../section/AboutPage"
import { PortfolioPage } from "../section/PortfolioPage"

export const LandingPage = () => {
  return (
    <main>
        <HomePage/>
        <OurServicesPage/>
        <AboutPage/>
        <PortfolioPage/>
    </main>
  )
}
