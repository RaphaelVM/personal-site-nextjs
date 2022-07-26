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
                <section className='bg-indigo-600 shadow-xl h-screen p-40 text-center grid content-center'>
                    <h1 className='font-mono font-bold text-6xl uppercase'>frontend &amp; backend developer</h1>
                </section>

                <section className='bg-stone-800 shadow-xl p-20' id='wie'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-6 md:gap-y-0 md:grid-cols-2 items-center'>
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
