import React from 'react';
import Logo from "./Logo";
import Link from "next/link";

import {IconType} from "react-icons";
import {RiMenuFoldFill} from "react-icons/all";

interface Props {
    navItems: {
        label: string,
        icon: IconType,
        href: string
    }[]
}

function AdminNav({navItems}: Props) {
    return (

        <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between"
        >
            <div>
                <Link href='/admin'>

                    <div className='flex items-center space-x-2 p-3 mb-10'>
                        <Logo className=' fill-highlight-light dark:fill-highlight-dark w-10 h-10 '/>
                        <span
                            className='text-xl font-semibold text-highlight-light dark:fill-highlight-dark'>FC.TEN</span>

                    </div>
                </Link>
                <div className='space-y-6'>

                    {
                        navItems.map(item => {
                            return <div key={item.label}>
                                <Link href={item.href}>
                                    <div
                                        className='flex items-center text-highlight-light dark:fill-highlight-dark p-3 hover:scale-95 transition '>
                                        <item.icon size={24}/>
                                        <span className='ml-2'>{item.label}</span>
                                    </div>
                                </Link>
                            </div>
                        })
                    }

                </div>

            </div>
            <button className='text-highlight-light dark:fill-highlight-dark hover:scale-95 transition self-end'>
                <RiMenuFoldFill size={25}/>
            </button>

        </nav>
    );
}

export default AdminNav;