/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-indigo-600 py-5 drop-shadow-lg sticky top-0 z-10'>
                <Link href='/'>
                    <a className='inline-flex items-center px-20 '>
                        <span className='text-xl text-white font-mono font-bold uppercase tracking-wide'>
                            raphaelvanmarion.nl
                        </span>
                    </a>
                </Link>
                <button
                    className='inline-flex p-3 hover:bg-indigo-700 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/#wie'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 rounded text-white font-mono font-bold items-center justify-center hover:bg-indigo-700 hover:text-white '>
                                Wie
                            </a>
                        </Link>
                        <Link href='/#wat'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 rounded text-white font-mono font-bold items-center justify-center hover:bg-indigo-700 hover:text-white'>
                                Wat
                            </a>
                        </Link>
                        <Link href='/#waar'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 mr-20 rounded text-white font-monod font-bold items-center justify-center hover:bg-indigo-700 hover:text-white'>
                                Waar
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};