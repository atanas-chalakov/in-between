import * as React from "react"
import Footer from "./Footer"
import Header from "./Header";
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
        <div className="bg-slate-100">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout