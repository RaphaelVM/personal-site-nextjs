import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'
import profilePic from '../public/portfolio-pf.png'

export default function Home() {
    return (
        <>
            <Navbar />
            <Head>
                <title>raphaelvanmarion.nl</title>
                <meta name="description" content="Raphael van Marion, Junior Developer &amp; Student" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='divide-indigo-600 divide-y-2 text-white'>
                <section className='bg-indigo-600 shadow-xl h-screen p-40 text-left grid place-items-center'>
                    <h1 className='font-mono font-bold text-6xl uppercase'>
                        frontend developer.<br />
                        backend developer.<br />
                        student.
                    </h1>
                    <a href='#wie'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </section>

                <section className='bg-stone-800 shadow-xl p-20' id='wie'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-6 md:gap-y-0 md:grid-cols-2 place-items-center'>
                        <div className='sm:col-span-1'>
                            <h2 className='font-mono text-4xl font-bold'>Wie ben ik?</h2>
                            <p className='font-mono text-base mt-5'>Mijn naam is Raphaël van Marion. Junior Developer &amp; Student Software Engineering aan Fontys Hogescholen te Eindhoven.</p>
                        </div>
                        <div className='sm:col-span-1 max-w-full h-auto z-1'>
                            <Image
                                src={profilePic}
                                alt="Foto van Raphaël"
                                className='rounded'
                            />
                        </div>
                    </div>
                </section>

                <section className='bg-stone-800 shadow-xl h-screen p-20 text-right' id='wat'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2'>
                        <h2 className='font-mono text-4xl font-bold'>Wat doe ik?</h2>
                        <p className='font-mono text-base mt-5'>Mijn naam is Raphaël van Marion. Junior Developer &amp; Student Software Engineering aan Fontys Hogescholen te Eindhoven.</p>
                    </div>
                </section>

                <section className='bg-stone-800 shadow-xl h-screen p-20' id='waar'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2'>
                        <h2 className='font-mono text-4xl font-bold'>Waar ben ik te vinden?</h2>
                        <p className='font-mono text-base mt-5'>Mijn naam is Raphaël van Marion. Junior Developer &amp; Student Software Engineering aan Fontys Hogescholen te Eindhoven.</p>
                    </div>
                </section>
            </main>

        </>
    )
}
