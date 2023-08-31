import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactSocialMediaIcons } from 'react-social-media-icons';

import Logo from '../assets/images/logo-white-1.svg'
// import Footer from '../assets/images/footer.svg'

const navigation = [
    { name: 'Начало', href: '#', current: false },
    { name: 'Проекти', href: '#', current: true },
    { name: 'За Нас', href: '#', current: false },
    { name: 'Eкип', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Footer() {
    return (
        <>
            <div class="decoration-footer"></div>
            <footer className='bg-black text-white'>
                <div className='mx-auto container'>
                    <div className="footer-top pt-10">
                        <div className="w-100 flex flex-row">
                            <div className="w-3/4">
                                <a href="#" className='inline-block'>
                                    <img src={Logo} alt="test" className='block w-168 h-auto' />
                                </a>
                                <div className="mt-10">
                                    <div className="flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'text-violet-600 hover:text-violet-700'
                                                        : 'text-zinc-50 hover:text-violet-700',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/4">
                                <h4 className='text-left mb-5 text-xl font-light'>Контакти</h4>
                                <div className='flex flex-col gap-4 mb-10'>
                                    <a class="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" target='mailto:inbetween@gmail.com' href="inbetween@gmail.com" ><EnvelopeIcon className='image w-7'></EnvelopeIcon> inbetween@gmail.com</a>
                                    <a class="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" target='tel:0898123321' href="" ><PhoneIcon className='image w-7'></PhoneIcon>0898 123 321</a>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <ReactSocialMediaIcons borderColor="" roundness="6" borderWidth="0" iconSize="4" icon="facebook" iconColor="#7e22ce" backgroundColor="#fff" url="#" size="36" />
                                    <ReactSocialMediaIcons borderColor="" roundness borderWidth="0" iconSize="4" icon="twitter" iconColor="#7e22ce" backgroundColor="#fff" url="#" size="36" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom py-10">
                        Copyright © {new Date().getFullYear()}, In Between Art of Foundation
                        {` `}
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer