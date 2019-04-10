import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faBell, faUsers, faCloudDownloadAlt, faSmileBeam } from '@fortawesome/free-solid-svg-icons'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

import '../scss/style.scss'

library.add(faStopwatch, faBell, faUsers, faCloudDownloadAlt, faSmileBeam)

const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const ContactBlock = styled.div`
  text-align: center;
  margin-top: 10px;
`

const FeatureIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 16px;
  color: #333;
`

const FeatureWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`

const FeatureBlock = styled.div`
  text-align: center;
  padding: 12px;
  width: 276px;
  max-width: 276px;
`

const FeatureInner = styled.div`
  height: 100%;
  background: #fff;
  padding: 40px 44px;
  box-shadow: 0 16px 48px #e2e8ed;
`

const FeatureTitle = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 6px;
  margin-bottom: 14px;
`

const FeatureInfo = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #6f7e8c;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <div className="is-boxed has-animations">
      <div className="body-wrap boxed-container">
        <header className="site-header">
          <div className="container">
            <div className="site-header-inner">
              <div className="brand header-brand">
                <h1 className="m-0">
                  <a href="#">
                    <svg width="48" height="32" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                      <title>Agnes</title>
                      <defs>
                        <linearGradient x1="0%" y1="100%" y2="0%" id="logo-a">
                          <stop stopColor="#007CFE" stopOpacity="0" offset="0%" />
                          <stop stopColor="#007DFF" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="logo-b">
                          <stop stopColor="#FF4F7A" stopOpacity="0" offset="0%" />
                          <stop stopColor="#FF4F7A" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <rect fill="url(#logo-a)" width="32" height="32" rx="16" />
                        <rect fill="url(#logo-b)" x="16" width="32" height="32" rx="16" />
                      </g>
                    </svg>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <div className="flex-just-center">
                    <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M273.73 48.7444C274.566 48.5041 276.523 47.9401 277.433 45.2773L279.308 39.792L280.063 40.0468C280.408 40.1638 280.786 39.9784 280.904 39.6349L281.91 36.692C282.027 36.3485 281.841 35.9722 281.495 35.8554L257.189 27.6332C256.844 27.5164 256.465 27.702 256.347 28.0453L255.341 30.9881C255.224 31.3314 255.411 31.7079 255.756 31.8248L256.51 32.08L254.601 37.6652C253.7 40.3018 254.296 41.1922 255.427 42.5397L260.346 48.3992L259.798 50.0033C257.915 50.4096 252.997 51.4757 252.335 51.6659C251.499 51.9065 249.541 52.47 248.631 55.1331L247.017 59.856L246.262 59.6011C245.917 59.4843 245.539 59.6695 245.421 60.013L244.416 62.9558C244.298 63.2992 244.485 63.6755 244.83 63.7926L269.137 72.015C269.481 72.1316 269.86 71.9462 269.978 71.6025L270.983 68.6603C271.101 68.3168 270.914 67.9402 270.569 67.8232L269.815 67.5681L271.463 62.7452C272.364 60.1088 271.768 59.218 270.637 57.8712L265.719 52.0114L266.267 50.4074C268.149 50.0012 273.067 48.9353 273.73 48.7444ZM263.457 53.0214L268.806 59.3927C269.216 59.8815 269.434 60.1484 269.492 60.3927C269.563 60.6862 269.469 61.2059 269.204 61.9805L267.555 66.8037L249.276 60.6205L250.89 55.8977C251.4 54.407 252.324 54.1409 252.998 53.9468C253.525 53.7951 258.05 52.8083 260.962 52.1815C261.371 52.0935 261.705 51.7979 261.84 51.4033L262.821 48.5321C262.955 48.14 262.874 47.7071 262.607 47.3893L257.275 41.0371L257.259 41.0175C256.848 40.5287 256.631 40.2618 256.572 40.0173C256.501 39.7238 256.596 39.2046 256.861 38.4295L258.769 32.8443L277.049 39.0275L275.174 44.513C274.665 46.004 273.741 46.2697 273.067 46.4639C272.539 46.6157 268.015 47.6028 265.103 48.2291C264.693 48.3173 264.36 48.6126 264.225 49.0075L263.244 51.8784C263.11 52.2706 263.191 52.7032 263.457 53.0214Z"
                        fill="black"
                      />
                      <path
                        d="M280 80C280 80 278.5 78.5 276.752 78.8858C276.663 78.929 276.577 78.9763 276.494 79.0273C276.406 79.0578 276.319 79.0932 276.232 79.1334C273.85 80.2396 271.366 81.0184 268.808 81.4701C268.775 81.4747 268.742 81.4766 268.709 81.4826C268.106 81.5888 267.492 81.6773 266.885 81.7465C266.878 81.7476 266.872 81.7492 266.865 81.75C265.75 81.8724 264.623 81.935 263.483 81.935C250.347 81.935 239.144 73.5398 234.994 61.8542C234.931 61.6759 234.868 61.498 234.809 61.3194C233.814 58.3393 233.273 55.1544 233.273 51.8458C233.273 48.5303 233.816 45.3383 234.815 42.3528C234.837 42.2876 234.858 42.2229 234.88 42.1575C234.94 41.9837 235.002 41.8105 235.065 41.6378C235.094 41.5567 235.123 41.476 235.154 41.3955C238.603 32.1487 246.492 25.0352 256.228 22.6358C256.234 22.6344 256.24 22.634 256.247 22.6326C256.39 22.597 256.536 22.5623 256.681 22.529C256.697 22.5254 256.713 22.5194 256.728 22.5155C258.852 22.0306 261.061 21.7699 263.327 21.7584L263.353 24.852C263.361 25.8125 263.97 26.0899 264.705 25.4691L271.266 19.9299C272.001 19.3091 271.994 18.3026 271.247 17.6942L264.594 12.2655C263.848 11.6571 263.244 11.9447 263.252 12.905L263.279 15.9925C253.739 16.0451 244.779 19.7679 238.028 26.4921C237.362 27.1545 236.728 27.8388 236.122 28.5423C236.118 28.5463 236.115 28.5496 236.111 28.554C236.088 28.5799 236.067 28.6069 236.045 28.6328C230.731 34.8436 227.735 42.5845 227.5 50.7966C227.494 50.8604 227.488 50.9237 227.486 50.9889C227.48 51.2629 227.476 51.5414 227.476 51.8167C227.476 52.2683 227.485 52.7259 227.503 53.1772C227.504 53.2301 227.511 53.2817 227.517 53.3337C227.821 60.8159 230.419 67.89 234.976 73.7493C234.991 73.7694 235.004 73.791 235.019 73.8111C235.465 74.3834 235.935 74.9503 236.417 75.4958C236.448 75.5309 236.482 75.5613 236.514 75.5947C237.001 76.142 237.504 76.678 238.028 77.1994C243.373 82.5233 250.103 85.9655 257.408 87.1951C257.43 87.1991 257.453 87.2035 257.475 87.2076C257.492 87.2101 257.508 87.2112 257.524 87.2136C259.494 87.5386 261.487 87.7018 263.483 87.7018C268.79 87.7018 273.903 86.5771 278.678 84.36C278.678 84.36 278.855 84.2561 278.973 84.1996L279.289 84.069C279.944 83.7504 281.233 83.0504 281.233 83.0504C280.5 82 280 80 280 80ZM288.569 35.0637C289.127 35.892 290.042 36.339 290.974 36.339C291.529 36.339 292.09 36.1804 292.586 35.8487C293.913 34.9605 294.265 33.1692 293.374 31.8475C292.967 31.2445 292.536 30.6465 292.093 30.0703C291.122 28.8053 289.305 28.5648 288.035 29.532C286.765 30.4997 286.524 32.3094 287.495 33.574C287.867 34.0578 288.228 34.559 288.569 35.0637ZM292.245 42.636C292.431 43.215 292.602 43.8086 292.754 44.4007C293.087 45.705 294.265 46.5726 295.557 46.5726C295.793 46.5726 296.034 46.5434 296.274 46.4826C297.823 46.0894 298.759 44.5194 298.364 42.9766C298.184 42.2725 297.98 41.5662 297.758 40.8772C297.271 39.3607 295.642 38.5247 294.119 39.0105C292.596 39.4963 291.757 41.1195 292.245 42.636ZM290.401 71.2543C289.191 70.2129 287.364 70.345 286.318 71.5495C285.917 72.0107 285.498 72.4651 285.071 72.9001C283.954 74.0392 283.975 75.8646 285.119 76.9777C285.682 77.5258 286.412 77.7989 287.142 77.7989C287.894 77.7989 288.646 77.5084 289.213 76.9305C289.721 76.412 290.221 75.8708 290.697 75.3215C291.743 74.1166 291.61 72.2957 290.401 71.2543ZM296.667 49.9731C295.066 49.9252 293.734 51.1774 293.687 52.7689C293.669 53.3785 293.631 53.995 293.575 54.6013C293.429 56.1869 294.601 57.5906 296.193 57.7361C296.283 57.7444 296.372 57.7483 296.461 57.7483C297.94 57.7483 299.203 56.6245 299.34 55.1285C299.407 54.4047 299.452 53.6691 299.474 52.9413C299.521 51.3501 298.265 50.0207 296.667 49.9731ZM295.379 61.154C293.89 60.5731 292.211 61.3047 291.628 62.7878C291.405 63.3549 291.161 63.9236 290.904 64.4771C290.232 65.9218 290.863 67.6355 292.314 68.305C292.708 68.4869 293.121 68.5729 293.529 68.5729C294.622 68.5729 295.668 67.9535 296.157 66.901C296.464 66.242 296.754 65.5657 297.019 64.8901C297.602 63.4075 296.868 61.7347 295.379 61.154ZM285.521 27.0703C286.472 25.7903 286.202 23.9847 284.917 23.0371C284.332 22.6054 283.725 22.1862 283.114 21.7902C281.774 20.9223 279.981 21.3005 279.109 22.6355C278.238 23.9704 278.618 25.7561 279.958 26.6244C280.471 26.9567 280.98 27.3091 281.472 27.6717C281.99 28.0535 282.594 28.2379 283.193 28.2379C284.078 28.2379 284.953 27.834 285.521 27.0703Z"
                        fill="black"
                      />
                      <rect
                        x="277.935"
                        y="79.3142"
                        width="23.354"
                        height="5.10341"
                        transform="rotate(30.8976 277.935 79.3142)"
                        fill="black"
                        stroke="black"
                        strokeLinejoin="round"
                      />
                      <g filter="url(#filter0_i)">
                        <path
                          d="M53.12 24.32L62.56 24.08C63.04 24.08 63.28 24.5333 63.28 25.44C63.28 26.2933 63.04 26.72 62.56 26.72H58.8C57.7333 26.72 57.04 26.96 56.72 27.44C55.4933 29.2533 54.8267 46.4267 54.72 78.96C54.6133 79.3333 54.1867 79.52 53.44 79.52C52.6933 79.52 52.1333 79.3333 51.76 78.96C36.1867 60.4533 23.92 45.76 14.96 34.88H14.64C14.8533 54.2933 15.0133 65.8933 15.12 69.68C15.2267 73.4667 15.7867 75.36 16.8 75.36H21.2C21.68 75.36 21.92 75.8133 21.92 76.72C21.92 77.5733 21.68 78 21.2 78L12.72 77.92L3.2 78.16C2.82667 78.16 2.64 77.7067 2.64 76.8C2.64 75.8933 2.82667 75.44 3.2 75.44H5.84C7.06667 75.44 7.94667 75.3067 8.48 75.04C9.01333 74.72 9.30667 74.1333 9.36 73.28C10.4267 61.28 10.96 46.9333 10.96 30.24L10.4 29.6C9.33333 28.3733 8.37333 27.6 7.52 27.28C6.72 26.9067 5.2 26.72 2.96 26.72C2.64 26.72 2.48 26.2933 2.48 25.44C2.48 24.5867 2.64 24.16 2.96 24.16L17.44 24.32C36.4267 48.1067 47.4667 62.08 50.56 66.24H50.88C50.56 45.0667 50.2933 33.2 50.08 30.64C49.8667 28.08 49.2533 26.8 48.24 26.8H44.4C43.92 26.8 43.68 26.3733 43.68 25.52C43.68 24.6133 43.92 24.16 44.4 24.16L53.12 24.32ZM69.545 39.36L77.705 39.52H94.265V38.24C94.265 37.92 94.6117 37.76 95.305 37.76C96.0517 37.76 96.425 37.92 96.425 38.24C96.425 42.4533 96.6117 45.4667 96.985 47.28C97.0917 47.6 96.7983 47.76 96.105 47.76C95.1983 47.76 94.745 47.6 94.745 47.28C93.9983 44.8267 93.2783 43.44 92.585 43.12C90.345 42.32 87.0917 41.92 82.825 41.92C82.0783 41.9733 81.5717 42.1867 81.305 42.56C81.0383 42.9333 80.905 43.6 80.905 44.56V57.68C87.3583 57.4667 90.905 57.1733 91.545 56.8L92.105 53.44C92.2117 53.1733 92.585 53.04 93.225 53.04C93.9183 53.04 94.265 53.2267 94.265 53.6C94.0517 55.1467 93.945 56.88 93.945 58.8C93.945 60.6667 94.0517 62.3733 94.265 63.92C94.265 64.24 93.8917 64.4 93.145 64.4C92.4517 64.4 92.105 64.2933 92.105 64.08L91.465 60.64C90.825 60.2667 87.305 59.9733 80.905 59.76V69.44C80.905 73.44 81.4383 75.44 82.505 75.44H85.065C90.9317 75.3333 94.985 74.5067 97.225 72.96L97.625 69.84C97.7317 69.52 97.9983 69.36 98.425 69.36C98.905 69.36 99.225 69.36 99.385 69.36C99.705 69.4667 99.865 69.6267 99.865 69.84C99.545 72.08 99.385 75.2267 99.385 79.28C99.385 79.5467 99.0117 79.68 98.265 79.68C97.5717 79.68 97.225 79.5467 97.225 79.28V78H82.985L69.385 78.16C69.0117 78.16 68.825 77.76 68.825 76.96C68.825 76.16 68.985 75.76 69.305 75.76H72.905C73.4917 75.76 73.8383 75.6533 73.945 75.44C74.0517 75.1733 74.105 74.5067 74.105 73.44V48.24C74.105 43.9733 73.5717 41.84 72.505 41.84H69.625C68.985 41.84 68.665 41.44 68.665 40.64C68.665 39.7867 68.9583 39.36 69.545 39.36ZM136.649 39.52L142.489 39.36C142.862 39.36 143.049 39.7067 143.049 40.4C143.049 41.0933 142.862 41.44 142.489 41.44H140.409C139.822 41.44 139.395 41.68 139.129 42.16C137.635 44.6133 135.102 50.5867 131.529 60.08C128.009 69.5733 125.769 75.92 124.809 79.12C124.595 79.6 124.062 79.84 123.209 79.84C122.409 79.84 121.902 79.5733 121.689 79.04C120.995 76.3733 119.049 71.1467 115.849 63.36C112.649 55.5733 109.929 49.3067 107.689 44.56C107.049 43.28 106.462 42.4533 105.929 42.08C105.395 41.7067 104.569 41.52 103.449 41.52C103.129 41.52 102.969 41.1733 102.969 40.48C102.969 39.7333 103.129 39.36 103.449 39.36L111.049 39.52C111.049 39.52 113.929 39.4667 119.689 39.36C120.009 39.36 120.169 39.7067 120.169 40.4C120.169 41.0933 120.009 41.44 119.689 41.44H115.849C115.262 41.44 114.969 41.68 114.969 42.16C114.969 42.48 116.435 46.6667 119.369 54.72C122.355 62.7733 124.249 68.0267 125.049 70.48C126.009 67.1733 127.262 63.3333 128.809 58.96C132.062 49.7867 133.689 44.5867 133.689 43.36C133.689 42.1333 133.369 41.52 132.729 41.52H129.449C129.022 41.52 128.809 41.1733 128.809 40.48C128.809 39.7333 128.969 39.36 129.289 39.36L136.649 39.52ZM146.967 39.36L155.127 39.52H171.687V38.24C171.687 37.92 172.034 37.76 172.727 37.76C173.474 37.76 173.847 37.92 173.847 38.24C173.847 42.4533 174.034 45.4667 174.407 47.28C174.514 47.6 174.22 47.76 173.527 47.76C172.62 47.76 172.167 47.6 172.167 47.28C171.42 44.8267 170.7 43.44 170.007 43.12C167.767 42.32 164.514 41.92 160.247 41.92C159.5 41.9733 158.994 42.1867 158.727 42.56C158.46 42.9333 158.327 43.6 158.327 44.56V57.68C164.78 57.4667 168.327 57.1733 168.967 56.8L169.527 53.44C169.634 53.1733 170.007 53.04 170.647 53.04C171.34 53.04 171.687 53.2267 171.687 53.6C171.474 55.1467 171.367 56.88 171.367 58.8C171.367 60.6667 171.474 62.3733 171.687 63.92C171.687 64.24 171.314 64.4 170.567 64.4C169.874 64.4 169.527 64.2933 169.527 64.08L168.887 60.64C168.247 60.2667 164.727 59.9733 158.327 59.76V69.44C158.327 73.44 158.86 75.44 159.927 75.44H162.487C168.354 75.3333 172.407 74.5067 174.647 72.96L175.047 69.84C175.154 69.52 175.42 69.36 175.847 69.36C176.327 69.36 176.647 69.36 176.807 69.36C177.127 69.4667 177.287 69.6267 177.287 69.84C176.967 72.08 176.807 75.2267 176.807 79.28C176.807 79.5467 176.434 79.68 175.687 79.68C174.994 79.68 174.647 79.5467 174.647 79.28V78H160.407L146.807 78.16C146.434 78.16 146.247 77.76 146.247 76.96C146.247 76.16 146.407 75.76 146.727 75.76H150.327C150.914 75.76 151.26 75.6533 151.367 75.44C151.474 75.1733 151.527 74.5067 151.527 73.44V48.24C151.527 43.9733 150.994 41.84 149.927 41.84H147.047C146.407 41.84 146.087 41.44 146.087 40.64C146.087 39.7867 146.38 39.36 146.967 39.36ZM192.711 78L184.151 78.16C183.777 78.16 183.591 77.76 183.591 76.96C183.591 76.16 183.724 75.76 183.991 75.76H187.911C188.551 75.76 188.871 75.3067 188.871 74.4V48.16C188.871 43.9467 188.284 41.84 187.111 41.84H184.311C183.724 41.84 183.431 41.44 183.431 40.64C183.431 39.7867 183.671 39.36 184.151 39.36C188.897 39.4667 193.751 39.52 198.711 39.52C203.671 39.52 207.511 40.5867 210.231 42.72C213.004 44.8 214.391 47.3867 214.391 50.48C214.391 53.52 213.297 55.9733 211.111 57.84C208.924 59.7067 206.284 60.7733 203.191 61.04C204.737 62.1067 206.737 64.24 209.191 67.44C210.097 68.6667 211.511 70.08 213.431 71.68C215.351 73.2267 217.511 74.6133 219.911 75.84C218.844 77.9733 217.217 79.04 215.031 79.04C212.844 79.04 210.924 78.24 209.271 76.64C207.617 75.04 206.337 73.28 205.431 71.36C204.524 69.3867 203.511 67.36 202.391 65.28C201.324 63.2 200.311 61.84 199.351 61.2L195.671 60.96V70.24C195.671 73.76 196.204 75.52 197.271 75.52H200.631C201.057 75.52 201.271 75.9467 201.271 76.8C201.271 77.6 201.137 78 200.871 78H192.711ZM197.271 41.92C196.204 41.92 195.671 42.8 195.671 44.56V57.84C196.417 58 197.164 58.08 197.911 58.08C200.311 58.08 202.391 57.4133 204.151 56.08C205.911 54.7467 206.791 52.9333 206.791 50.64C206.791 48.3467 205.991 46.32 204.391 44.56C202.844 42.8 200.471 41.92 197.271 41.92Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_i"
                          x="2.48001"
                          y="24.08"
                          width="217.431"
                          height="59.76"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <h1 className="hero-title h2-mobile mt-0 is-revealing" />
                  <p className="hero-paragraph is-revealing">
                    Ära raiska aega oodates. Võta kasutusele parim järjekordade haldussüsteem ja võida tuhandeid tunde
                    iga aasta.
                  </p>
                  <p className="hero-cta is-revealing">
                    <Link to="/contact/" className="button button-primary button-shadow mr-32" href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.7195 0.110491C17.9405 0.271205 18.0309 0.485491 17.9907 0.753348L15.4193 16.1819C15.3859 16.3761 15.2787 16.5268 15.0979 16.6339C15.0042 16.6875 14.9004 16.7143 14.7865 16.7143C14.7129 16.7143 14.6325 16.6975 14.5455 16.6641L9.99534 14.8058L7.56459 17.769C7.44405 17.923 7.27999 18 7.07241 18C6.98536 18 6.9117 17.9866 6.85143 17.9598C6.7242 17.9129 6.62208 17.8343 6.54508 17.7238C6.46807 17.6133 6.42956 17.4911 6.42956 17.3571V13.8516L15.108 3.21429L4.37045 12.5056L0.402894 10.8783C0.155131 10.7846 0.021205 10.6004 0.00111605 10.3259C-0.0122766 10.058 0.0948643 9.86049 0.322538 9.73326L17.0365 0.0904018C17.1369 0.0301339 17.2441 0 17.3579 0C17.4919 0 17.6124 0.0368304 17.7195 0.110491Z"
                          fill="white"
                        />
                      </svg>
                      <span className="ml-8">Võta ühendust</span>
                    </Link>
                  </p>
                </div>
                <div className="hero-illustration is-revealing">
                  <svg width="528" height="413" viewBox="0 0 528 413" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="hero-illustration-a">
                        <stop stopColor="#A7FDE8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#6EFACC" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="hero-illustration-b">
                        <stop stopColor="#FF4F7A" stopOpacity="0" offset="0%" />
                        <stop stopColor="#FF4F7A" offset="100%" />
                      </linearGradient>
                      <radialGradient fx="50%" fy="50%" r="100%" id="hero-illustration-c">
                        <stop stopColor="#6EFACC" offset="0%" />
                        <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
                      </radialGradient>
                      <linearGradient x1="0%" y1="100%" y2="0%" id="hero-illustration-d">
                        <stop stopColor="#007CFE" stopOpacity="0" offset="0%" />
                        <stop stopColor="#007DFF" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-e">
                        <stop stopColor="#FF4F7A" stopOpacity="0" offset="0%" />
                        <stop stopColor="#FF4F7A" offset="100%" />
                      </linearGradient>
                      <filter
                        x="-500%"
                        y="-500%"
                        width="1000%"
                        height="1000%"
                        filterUnits="objectBoundingBox"
                        id="dropshadow-1"
                      >
                        <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
                        <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
                        <feColorMatrix
                          values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
                          in="shadowBlurOuter"
                        />
                      </filter>
                    </defs>
                    <g transform="translate(0 -1)" fill="none" fillRule="evenodd">
                      <g transform="translate(128 290)" fill="url(#hero-illustration-a)">
                        <path d="M62.225 0l1.415 1.414L1.414 63.64 0 62.225zM66.468 4.243l1.414 1.414L5.657 67.882l-1.414-1.414zM70.71 8.485L72.126 9.9 9.899 72.125 8.485 70.71zM74.953 12.728l1.415 1.414-62.226 62.226-1.414-1.415zM79.196 16.97l1.414 1.415L18.385 80.61l-1.414-1.414zM83.439 21.213l1.414 1.414-62.226 62.226-1.414-1.414zM87.681 25.456l1.414 1.414L26.87 89.095l-1.414-1.414zM91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414z" />
                        <path d="M91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414zM96.167 33.941l1.414 1.414-62.226 62.226-1.414-1.414zM100.41 38.184l1.413 1.414-62.225 62.225-1.414-1.414zM104.652 42.426l1.414 1.415-62.225 62.225-1.415-1.414zM108.894 46.669l1.415 1.414-62.226 62.226-1.414-1.415zM113.137 50.912l1.414 1.414-62.225 62.225-1.414-1.414zM117.38 55.154l1.414 1.415-62.225 62.225-1.415-1.414zM121.622 59.397l1.415 1.414-62.226 62.226-1.414-1.415z" />
                        <g>
                          <path d="M100.811 0l-1.414 1.414 62.225 62.226 1.415-1.415zM96.569 4.243l-1.415 1.414 62.226 62.225 1.414-1.414zM92.326 8.485L90.912 9.9l62.225 62.226 1.414-1.414zM88.083 12.728l-1.414 1.414 62.225 62.226 1.415-1.415zM83.84 16.97l-1.414 1.415 62.226 62.225 1.414-1.414zM79.598 21.213l-1.414 1.414 62.225 62.226 1.414-1.414zM75.355 25.456l-1.414 1.414 62.226 62.225 1.414-1.414zM71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414z" />
                          <path d="M71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414zM66.87 33.941l-1.414 1.414 62.225 62.226 1.414-1.414zM62.627 38.184l-1.414 1.414 62.226 62.225 1.414-1.414zM58.385 42.426l-1.414 1.415 62.225 62.225 1.414-1.414zM54.142 46.669l-1.414 1.414 62.225 62.226 1.415-1.415zM49.9 50.912l-1.415 1.414 62.226 62.225 1.414-1.414zM45.657 55.154l-1.414 1.415 62.225 62.225 1.414-1.414zM41.414 59.397L40 60.811l62.225 62.226 1.415-1.415z" />
                        </g>
                      </g>
                      <g transform="matrix(1 0 0 -1 326 124)" fill="url(#hero-illustration-a)">
                        <path d="M62.225 0l1.415 1.414L1.414 63.64 0 62.225zM66.468 4.243l1.414 1.414L5.657 67.882l-1.414-1.414zM70.71 8.485L72.126 9.9 9.899 72.125 8.485 70.71zM74.953 12.728l1.415 1.414-62.226 62.226-1.414-1.415zM79.196 16.97l1.414 1.415L18.385 80.61l-1.414-1.414zM83.439 21.213l1.414 1.414-62.226 62.226-1.414-1.414zM87.681 25.456l1.414 1.414L26.87 89.095l-1.414-1.414zM91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414z" />
                        <path d="M91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414zM96.167 33.941l1.414 1.414-62.226 62.226-1.414-1.414zM100.41 38.184l1.413 1.414-62.225 62.225-1.414-1.414zM104.652 42.426l1.414 1.415-62.225 62.225-1.415-1.414zM108.894 46.669l1.415 1.414-62.226 62.226-1.414-1.415zM113.137 50.912l1.414 1.414-62.225 62.225-1.414-1.414zM117.38 55.154l1.414 1.415-62.225 62.225-1.415-1.414zM121.622 59.397l1.415 1.414-62.226 62.226-1.414-1.415z" />
                        <g>
                          <path d="M100.811 0l-1.414 1.414 62.225 62.226 1.415-1.415zM96.569 4.243l-1.415 1.414 62.226 62.225 1.414-1.414zM92.326 8.485L90.912 9.9l62.225 62.226 1.414-1.414zM88.083 12.728l-1.414 1.414 62.225 62.226 1.415-1.415zM83.84 16.97l-1.414 1.415 62.226 62.225 1.414-1.414zM79.598 21.213l-1.414 1.414 62.225 62.226 1.414-1.414zM75.355 25.456l-1.414 1.414 62.226 62.225 1.414-1.414zM71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414z" />
                          <path d="M71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414zM66.87 33.941l-1.414 1.414 62.225 62.226 1.414-1.414zM62.627 38.184l-1.414 1.414 62.226 62.225 1.414-1.414zM58.385 42.426l-1.414 1.415 62.225 62.225 1.414-1.414zM54.142 46.669l-1.414 1.414 62.225 62.226 1.415-1.415zM49.9 50.912l-1.415 1.414 62.226 62.225 1.414-1.414zM45.657 55.154l-1.414 1.415 62.225 62.225 1.414-1.414zM41.414 59.397L40 60.811l62.225 62.226 1.415-1.415z" />
                        </g>
                      </g>
                      <path d="M0 0h528v414H0z" />
                      <path
                        fill="#FFF"
                        d="M0 63h528v297H0z"
                        style={{ mixBlendMode: 'multiply', filter: 'url(#dropshadow-1)' }}
                      />
                      <path fill="#FFF" d="M0 63h528v297H0z" />
                      <path fill="url(#hero-illustration-b)" d="M408 230h80v48h-80z" />
                      <path
                        d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                        transform="rotate(45 -118.861 431.981)"
                        fill="url(#hero-illustration-c)"
                      />
                      <path
                        fill="#FFF"
                        d="M288 254h160v160H288z"
                        style={{ mixBlendMode: 'multiply', filter: 'url(#dropshadow-1)' }}
                      />
                      <path fill="#FFF" d="M288 254h160v160H288z" />
                      <path d="M248 79h88v24c0 35.346-28.654 64-64 64h-24V79z" fill="url(#hero-illustration-d)" />
                      <path
                        d="M348 132c0 26.51-21.49 48-48 48 0-26.51 21.49-48 48-48z"
                        fill="url(#hero-illustration-e)"
                        transform="matrix(1 0 0 -1 0 312)"
                      />
                      <path
                        fill="#FFF"
                        d="M200 31h88v88h-88z"
                        style={{ mixBlendMode: 'multiply', filter: 'url(#dropshadow-1)' }}
                      />
                      <path fill="#FFF" d="M200 31h88v88h-88z" />
                      <path fill="#F6F8FA" d="M24 248l88 88H24z" />
                      <rect fill="url(#hero-illustration-d)" x="335" y="242" width="32" height="32" rx="16" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="features section text-center">
            <div className="section-square" />
            <div className="container">
              <div className="features-inner section-inner">
                <div className="features-wrap">
                  <div className="feature is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon smile-beam">
                        <FontAwesomeIcon icon="smile-beam" />
                      </div>
                      <h5 className="feature-title h3-mobile">Lihtne</h5>
                      <p className="text-sm">Süsteemi kasutamine on imelihtne nii mobiilis kui ka veebis</p>
                    </div>
                  </div>
                  <div className="feature is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon stopwatch">
                        <FontAwesomeIcon icon="stopwatch" />
                      </div>
                      <h5 className="feature-title h3-mobile">Reaalajas</h5>
                      <p className="text-sm">Muudatused süsteemis toimuvad koheselt ja sisu on alati värske</p>
                    </div>
                  </div>
                  <div className="feature is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon cloud-download-alt">
                        <FontAwesomeIcon icon="cloud-download-alt" />
                      </div>
                      <h5 className="feature-title h4-mobile">Uuendused</h5>
                      <p className="text-sm">Automaatsed eluaegsed uuendused kõikidele platvormidele</p>
                    </div>
                  </div>
                  <div className="feature is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon bell">
                        <FontAwesomeIcon icon="bell" />
                      </div>
                      <h5 className="feature-title h3-mobile">Teavitused</h5>
                      <p className="text-sm">Kohesed teavitused kõikidest sündmustest</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <ContactBlock>
          <Link to="/contact">
            <Button big>
              <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"/>
              </svg>
              Contact
            </Button>
          </Link>
        </ContactBlock> */}

          <section className="pricing section">
            <div className="section-square" />
            <div className="container">
              <div className="pricing-inner section-inner has-top-divider">
                <h2 className="section-title mt-0 text-center">Paketid</h2>
                <div className="pricing-tables-wrap">
                  <div className="pricing-table">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header is-revealing">
                          <div className="pricing-table-title mt-12 mb-8">Hõbe</div>
                          <div className="pricing-table-price mb-32 pb-24">
                            <span className="pricing-table-price-amount h2">13</span>
                            <span className="pricing-table-price-currency h4">€</span>/kuu
                          </div>
                        </div>
                        <ul className="pricing-table-features list-reset text-xs mt-24 mb-56">
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Järjekorra jälgimine</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Kohesed teavitused</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Erinevad rollid</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Tööpäevadel 10-17 klienditugi</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta is-revealing">
                        <a className="button button-primary button-shadow button-block" href="#">
                          Proovi kohe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-table">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header is-revealing">
                          <div className="pricing-table-title mt-12 mb-8">Kuld</div>
                          <div className="pricing-table-price mb-32 pb-24">
                            <span className="pricing-table-price-amount h2">53</span>
                            <span className="pricing-table-price-currency h4">€</span>/kuu
                          </div>
                        </div>
                        <ul className="pricing-table-features list-reset text-xs mt-24 mb-56">
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Kõik hõbedast</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Ennustamine</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Tegevusraportid</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Meilide integratsioon</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta is-revealing">
                        <a className="button button-primary button-shadow button-block" href="#">
                          Proovi kohe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-table">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header is-revealing">
                          <div className="pricing-table-title mt-12 mb-8">Plaatina</div>
                          <div className="pricing-table-price mb-32 pb-24">
                            <span className="pricing-table-price-amount h2">143</span>
                            <span className="pricing-table-price-currency h4">€</span>/kuu
                          </div>
                        </div>
                        <ul className="pricing-table-features list-reset text-xs mt-24 mb-56">
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Kõik kullast</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Kaheastmeline autentimine</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>Lisa liidestused</span>
                          </li>
                          <li className="is-revealing">
                            <span className="list-icon">
                              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill="#5FFAD0"
                                  fillRule="nonzero"
                                  d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                />
                              </svg>
                            </span>
                            <span>24/7 klienditugi</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta is-revealing">
                        <a className="button button-primary button-shadow button-block" href="#">
                          Proovi kohe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer text-light">
          <div className="container">
            <div className="site-footer-inner has-top-divider">
              <div className="brand footer-brand">
                <a href="#">
                  <svg width="48" height="32" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <title>Agnes</title>
                    <defs>
                      <linearGradient x1="0%" y1="100%" y2="0%" id="logo-footer-a">
                        <stop stopColor="#007CFE" stopOpacity="0" offset="0%" />
                        <stop stopColor="#007DFF" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="logo-footer-b">
                        <stop stopColor="#FF4F7A" stopOpacity="0" offset="0%" />
                        <stop stopColor="#FF4F7A" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <rect fill="url(#logo-footer-a)" width="32" height="32" rx="16" />
                      <rect fill="url(#logo-footer-b)" x="16" width="32" height="32" rx="16" />
                    </g>
                  </svg>
                </a>
              </div>
              <ul className="footer-links list-reset">
                <li>
                  <a href="#">Kontakt</a>
                </li>
                <li>
                  <a href="#">Meist</a>
                </li>
                <li>
                  <a href="#">KKK</a>
                </li>
                <li>
                  <a href="#">Tugi</a>
                </li>
              </ul>
              <ul className="footer-social-links list-reset">
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Facebook</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Twitter</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Google</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="footer-copyright">&copy; 2019 NeverQ</div>
            </div>
          </div>
        </footer>
      </div>

      <Wrapper>
        {/*  <Hero>
        <div>
          <p style={{ marginTop: 10 }}>Don't spend time waiting in a queue</p>
          <p style={{ color: 'grey', fontSize: 14, marginBottom: 40 }}>
            Get the best queue management app out there and save hunders of hours.
          </p>
        </div>

        <FeatureWrap>
          <FeatureBlock>
            <FeatureInner>
              <FeatureIcon>
                <FontAwesomeIcon icon="stopwatch" />
              </FeatureIcon>
              <FeatureTitle>Real-Time</FeatureTitle>
              <FeatureInfo>
                Our app work in Real-Time to always so you can always see the latest information.
              </FeatureInfo>
            </FeatureInner>
          </FeatureBlock>
          <FeatureBlock>
            <FeatureInner>
              <FeatureIcon>
                <FontAwesomeIcon icon="bell" />
              </FeatureIcon>
              <FeatureTitle>Notifications</FeatureTitle>
              <FeatureInfo>Receive instant notifications about all the events.</FeatureInfo>
            </FeatureInner>
          </FeatureBlock>
          <FeatureBlock>
            <FeatureInner>
              <FeatureIcon>
                <FontAwesomeIcon icon="users" />
              </FeatureIcon>
              <FeatureTitle>Overview</FeatureTitle>
              <FeatureInfo>We provide you with an overview so you can plan your time accordingly.</FeatureInfo>
            </FeatureInner>
          </FeatureBlock>
        </FeatureWrap>
      </Hero> */}
        {/* <Content
        <SectionTitle>Latest stories</SectionTitle>
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
      </Content> */}
      </Wrapper>
    </div>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
