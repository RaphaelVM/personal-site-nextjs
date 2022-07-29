import Head from "next/head"
import { Navbar } from "../components/navbar"

export default function TechStack() {
	return (
		<>
			<Head>
				<title>raphaelvanmarion.nl - Tech Stack</title>
				<meta name="description" content="Raphael van Marion, Tech Stack" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className='font-mono text-white'>
			</main>
		</>
	)
}