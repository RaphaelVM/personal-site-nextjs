import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/navbar'
import profilePic from '../public/portfolio-pf.png'
import htmlLogo from '../public/html-logo.png'
import cssLogo from '../public/css-logo.png'
import jsLogo from '../public/js-logo.png'
import phpLogo from '../public/php-logo.png'
import laravelLogo from '../public/laravel-logo.png'
import nextjsLogo from '../public/nextjs-logo.png'

export default function Home() {
    return (
        <>
            <Head>
                <title>raphaelvanmarion.nl</title>
                <meta name="description" content="Raphael van Marion, Junior Developer &amp; Student" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='font-mono text-white'>
                <section className='bg-indigo-600 h-screen text-center grid place-items-center'>
                    <h1 className='font-bold text-6xl uppercase'>
                        developer
                        <br />
                        &amp;
                        <br />
                        student
                    </h1>
                    <a href='#wie'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </section>

                <section className='bg-stone-800 shadow-xl p-20 lg:px-40' id='wie'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 place-items-center'>
                        <div className='col-span-1 min-w-64 min-h-64 lg:w-30 lg:h-auto z-1'>
                            <Image
                                src={profilePic}
                                alt="Foto van Raphaël"
                                className='rounded'
                            />
                        </div>
                        <div className='col-span-1 md:text-right mt-5 md:mt-0'>
                            <h2 className='text-4xl font-bold'>Wie ben ik?</h2>
                            <p className='text-base mt-5'>
                                Mijn naam is Raphaël van Marion, 22 jaar en geboren in Roermond. Ik ben Junior Developer &amp; Student Software Engineering aan Fontys Hogescholen in Eindhoven.
                                <br /><br />
                                Ik ben erg leergierig en pik snel nieuwe dingen op. Ook streef ik naar efficiëntie in alles wat ik doe.
                                Problemen oplossen is mijn ding.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='bg-stone-50 text-black p-20 lg:px-40' id='wat'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-x-4'>
                        <div className="col-span-1">
                            <h2 className='text-4xl font-bold'>Wat doe ik?</h2>
                            <p className='text-base mt-5'>
                                Ik hou mij voornamelijk bezig met het ontwikkelen van full-stack web-applicaties.
                                Op dit moment, doe ik dit door een combinatie van Laravel, LivewireJS, TailwindCSS en Docker te gebruiken.
                                <br /><br />
                                Als het gaat om schoolprojecten, kan de Tech Stack flink veranderen. Zo kan het van Laravel naar ASP.NET en JavaScript naar Java gaan.
                            </p>
                            <button type="button" className="inline-flex items-center mt-5 md:mt-10 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Mijn Tech Stack
                            </button>
                        </div>
                        <div className="col-span-1 mt-5 md:mt-0">
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                    <Image
                                        src={htmlLogo}
                                        alt="HTML Logo"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                                    <Image
                                        src={cssLogo}
                                        alt="CSS Logo"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                                    <Image
                                        src={jsLogo}
                                        alt="JavaScript Logo"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                                    <Image
                                        src={nextjsLogo}
                                        alt="Next.js Logo"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                                    <Image
                                        src={phpLogo}
                                        alt="PHP Logo"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center p-4 z-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
                                    <Image
                                        src={laravelLogo}
                                        alt="Laravel Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-stone-800 shadow-xl p-20 lg:px-40' id='waar'>
                    <div className='grid place-items-center'>
                        <h2 className='text-4xl font-bold'>Waar ben ik te vinden?</h2>
                        <p className='text-base mt-5'>
                            Als je meer te weten wilt komen over mijn projecten en werkervaringen, verwijs ik je graag door naar mijn GitHub en LinkedIn:
                            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center mt-5 md:mt-10 gap-y-5'>
                                <div className='col-span-1'>
                                    <Link href='https://www.linkedin.com/in/raphael-van-marion/'>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-32 text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300' fill='currentColor'>
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                                <div className='col-span-1'>
                                    <Link href='https://github.com/RaphaelVM'>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-32 text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300' fill='currentColor'>
                                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </p>
                    </div>
                </section>
            </main >
            <div className='hidden'>Icons created by Freepik - Flaticon</div>

        </>
    )
}
