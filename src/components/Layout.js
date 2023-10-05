import React, { Component, useState, useEffect, useRef } from 'react'
import Footer from "./Footer"
import Header from "./Header";
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;

    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        var isInViewport = function(elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= 1000 &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        };
        // read the link on how above code works
        
        var findMe = document.querySelectorAll('.animation-wrapper');
        // console.log(findMe);
        
        window.addEventListener('scroll', function(event) {
        // add event on scroll
        findMe.forEach(element => {
            console.log(isInViewport(element));
            //for each .thisisatest
            if (isInViewport(element)) {
            //if in Viewport
            element.classList.add("animate");
            }
        });
        }, false);
    });

    return (
        <div className="bg-slate-100">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout