import { useStaticQuery, graphql } from 'gatsby'
import ScrollReveal from 'scrollreveal'

const useBuildTime = () => {
  // Reveal animations
  const sr = ScrollReveal()

  sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
    duration: 1000,
    distance: '40px',
    easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    origin: 'left',
    interval: 150,
  })

  sr.reveal('.hero-illustration', {
    duration: 1000,
    distance: '40px',
    easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    origin: 'right',
    interval: 150,
  })

  sr.reveal('.feature', {
    duration: 1000,
    distance: '40px',
    easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    interval: 100,
    origin: 'bottom',
    scale: 0.9,
    viewFactor: 0.5,
  })

  const pricingTables = document.querySelectorAll('.pricing-table')

  pricingTables.forEach(pricingTable => {
    const pricingTableHeader = [].slice.call(pricingTable.querySelectorAll('.pricing-table-header'))
    const pricingTableList = [].slice.call(pricingTable.querySelectorAll('.pricing-table-features li'))
    const pricingTableCta = [].slice.call(pricingTable.querySelectorAll('.pricing-table-cta'))
    const elements = pricingTableHeader.concat(pricingTableList).concat(pricingTableCta)

    sr.reveal(elements, {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5,
    })
  })

  const time = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `)

  return time.site.buildTime
}

export default useBuildTime
