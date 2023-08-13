import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-100'>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a className='transition duration-500 hover:text-blue-600' href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
        </footer>
    )
}

export default Footer