import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import SEO from './SEO'
import theme from '../../config/theme'
import useBuildTime from '../hooks/useBuildTime'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    font-family: ${props => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`

const Footer = styled.footer`
  background-color: #212a34;

  color: #6a7988;

  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`

const SpanWithMr = styled.span`
  margin-right: 12px;
`

class Layout extends React.Component {
  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
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
    })
  }

  render() {
    const { customSEO, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          {!customSEO && <SEO />}
          <GlobalStyle />
          {children}
          {/* <Footer>
          <div>
            <div style={{ marginBottom: 8 }}>
              <span>&copy; NeverQ 2019 All rights reserved.</span>
            </div>
            <div>
              <SpanWithMr>Contact</SpanWithMr>
              <SpanWithMr>About us</SpanWithMr>
              <SpanWithMr>FAQ's</SpanWithMr>
              <SpanWithMr>Support</SpanWithMr>
            </div>
          </div>
        </Footer> */}
        </>
      </ThemeProvider>
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
