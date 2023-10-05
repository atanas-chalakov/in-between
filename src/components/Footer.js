import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactSocialMediaIcons } from 'react-social-media-icons';

import Logo from '../assets/images/LogoWhite.svg'
// import Footer from '../assets/images/footer.svg'

const navigation = [
    { name: 'Начало', href: '#hero-home', current: false },
    // { name: 'Проекти', href: '#', current: true },
    { name: 'За Нас', href: '#about', current: false },
    { name: 'Eкип', href: '#team', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Footer() {
    return (
        <>
            <div className="decoration-footer"></div>
            <footer className='bg-black text-white'>
                <div className='mx-auto container'>
                    <div className="footer-top pt-3 md:pt-10">
                        <div className="w-100 flex flex-col md:flex-row">
                            <div className="w-full md:w-3/4 mb-6 md:mb-0">
                                <a href="#" className='inline-block'>
                                    <img src={Logo} alt="logo" className='block w-168 h-auto' />
                                </a>
                                <div className="mt-2 md:mt-10">
                                    <div className="flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                onClick={() => scrollTo(item.href)}
                                                key={item.name}
                                                className={classNames(
                                                    item.current
                                                        ? 'text-violet-600 hover:text-violet-700'
                                                        : 'text-zinc-50 hover:text-violet-700',
                                                    'rounded-md pr-3 md:px-3 py-2 text-sm font-medium cursor-pointer'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-1/4">
                                <h4 className='text-left mb-5 text-xl font-light'>Контакти</h4>
                                <div className='flex flex-col gap-4 mb-10'>
                                    <a className="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" href="mailto:inbetweenfoundation@gmail.com" ><EnvelopeIcon className='image w-7'></EnvelopeIcon> inbetweenfoundation@gmail.com</a>
                                    <a className="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" href="tel:0888460386" ><PhoneIcon className='image w-7'></PhoneIcon>0888 460 386</a>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <ReactSocialMediaIcons borderColor="" roundness="6" borderWidth="0" iconSize="4" icon="facebook" iconColor="#7e22ce" backgroundColor="#fff" url="https://www.facebook.com/profile.php?id=61550296665490" size="36" target="_blank" />
                                    <ReactSocialMediaIcons borderColor="" roundness borderWidth="0" iconSize="4" icon="instagram" iconColor="#7e22ce" backgroundColor="#fff" url="https://www.instagram.com/inbetween_foundation/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR3JLvC4Ei_iAsnFHNEFtfjESEicpOKL5H6PwAB48_nTANHSfRFJ0QzscFk" size="36" target="_blank" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom py-10">
                        Copyright © {new Date().getFullYear()}, In\Between Foundation of Arts
                        {` `}
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer