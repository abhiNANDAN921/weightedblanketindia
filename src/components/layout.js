import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div  data-is-root-path={isHomePage}>
      
<Header/>
<Hero/>
      <main  className="global-wrapper newdesign">{children}</main>

<Footer/>
 </div>
  )
}

export default Layout
