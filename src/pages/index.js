import * as React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Hero_Homepage from "../components/Hero_Homepage"
import Activities_Homepage from "../components/Activities_Homepage"
import About_Us_Homepage from "../components/About_Us_Homepage"
import Team_Homepage from "../components/Team_Homepage"

const IndexPage = () => {
  return (
    <div className="page">
     <Layout>
      <Hero_Homepage></Hero_Homepage>
      <Activities_Homepage></Activities_Homepage>
      <About_Us_Homepage></About_Us_Homepage>
      <Team_Homepage></Team_Homepage>
     </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

