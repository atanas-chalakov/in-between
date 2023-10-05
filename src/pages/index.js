import * as React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Hero_Homepage from "../components/Hero_Homepage"
import Projects_Homepage from "../components/Projects_Homepage"
import About_Us_Homepage from "../components/About_Us_Homepage"
import Team_Homepage from "../components/Team_Homepage"
import Projects_Homepage_v2 from "../components/Projects_Homepage_v2"
import Partners_Homepage from "../components/Partners_Homepage"

const IndexPage = () => {
  return (
    <div className="page">
     <Layout>
      <Hero_Homepage></Hero_Homepage>
      <Projects_Homepage_v2></Projects_Homepage_v2>
      {/* <Projects_Homepage></Projects_Homepage> */}
      <About_Us_Homepage></About_Us_Homepage>
      <Team_Homepage></Team_Homepage>
      <Partners_Homepage></Partners_Homepage>
     </Layout>
    </div>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>

export function Head() {
  return (
    <>
      <html lang="bg-BG" />
      <body className="font-main" />
      <title>In Between | Home</title>
      <meta name="description" content="In\between фокусира дейността си към артистични изяви и обмен в сферата на съвременното визуално изкуство, като развива и популяризира художествената сцена на България – в рамките на страната и  чужбина." />
      
    </>
  )
}

