import * as React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <main>
     <Layout>
      <h1>Hi From Homepage</h1>
     </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

