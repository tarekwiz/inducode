import type React from 'react'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Manrope } from 'next/font/google'
import './globals.css'

import Link from 'next/link'
import Header from '@/components/header'

const geist = Geist({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-geist',
})

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
})

export const metadata: Metadata = {
	title: 'Inducode Technologies - Sustainable Energy Solutions',
	description: 'Leading provider of sustainable energy technologies and engineering solutions',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
			<body className="font-sans">
				<Header />

				<main className="min-h-screen bg-background">{children}</main>

				<footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="space-y-4">
								<Link href="/" className="flex items-center space-x-3">
									<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
										<span className="text-accent-foreground font-bold text-sm">I</span>
									</div>
									<div>
										<h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
										<p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
									</div>
								</Link>
								<p className="text-sm opacity-80 leading-relaxed">
									Inducode Technologies LLC is one of the world's most trusted providers of
									sustainable energy efficient technologies for businesses.
								</p>
							</div>

							<div className="space-y-4">
								<h4 className="font-bold uppercase tracking-wide">Services</h4>
								<ul className="space-y-2 text-sm opacity-80">
									<li>
										<Link
											href="/feasibility-studies"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Feasibility Studies
										</Link>
									</li>
									<li>
										<Link
											href="/proposal-and-design"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Proposal And Design
										</Link>
									</li>
									<li>
										<Link
											href="/project-implementation"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Project Implementation
										</Link>
									</li>
									<li>
										<Link
											href="/commissioning-solutions"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Commissioning Solutions
										</Link>
									</li>
									<li>
										<Link
											href="/operation-and-maintenance"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Operation and Maintenance
										</Link>
									</li>
									<li>
										<Link
											href="/project-finance"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Project Finance
										</Link>
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<h4 className="font-bold uppercase tracking-wide">Technologies</h4>
								<ul className="space-y-2 text-sm opacity-80">
									<li>
										<Link
											href="/combined-heat-power"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											CHP Systems
										</Link>
									</li>
									<li>
										<Link
											href="/tri-generation"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Tri-Generation
										</Link>
									</li>
									<li>
										<Link
											href="/solar"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Solar Solutions
										</Link>
									</li>
									<li>
										<Link
											href="/fire-fighting-systems"
											className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
										>
											Fire Fighting Systems
										</Link>
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<h4 className="font-bold uppercase tracking-wide">Contact Us</h4>
								<div className="space-y-2 text-sm opacity-80">
									<p>info@inducode.com</p>
									<p>+1 (555) 123-4567</p>
									<p>Houston, TX 77001, USA</p>
								</div>
							</div>
						</div>

						<div className="border-t-2 border-primary-foreground/20 mt-8 pt-8 text-center">
							<p className="text-sm opacity-80 uppercase tracking-wide">
								Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
							</p>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
