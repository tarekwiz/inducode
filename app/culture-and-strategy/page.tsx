import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CultureAndStrategy() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">CULTURE</span>
							<br />
							<span className="text-accent">&</span>
							<br />
							<span className="text-foreground">STRATEGY</span>
						</h1>
						<div className="w-24 h-1 bg-accent mx-auto"></div>
					</div>
				</div>
			</section>

			{/* Culture Section */}
			<section className="py-16 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<Card className="border-2 border-border bg-card">
						<CardHeader className="text-center pb-6">
							<CardTitle className="text-3xl font-bold text-foreground uppercase tracking-wide">
								CULTURE
							</CardTitle>
							<div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
						</CardHeader>
						<CardContent className="text-center">
							<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								Our Culture is one of entrepreneurship implemented with fairness and sustainability. Our
								Team is committed to our client company's vision and culture.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Strategy Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<Card className="border-2 border-border bg-card">
						<CardHeader className="text-center pb-6">
							<CardTitle className="text-3xl font-bold text-foreground uppercase tracking-wide">
								STRATEGY
							</CardTitle>
							<div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
						</CardHeader>
						<CardContent className="text-center">
							<p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
								Our Strategy is to deliver meaningful financial saving to our clients through the
								efficient on-site generation of electricity, chilled water and steam/hot water from
								renewable and fossil fuel sources. This is achieved through the Inducode direct sales
								force, our extensive customer network, qualified local partners, industry and
								professional organization, and suppliers.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Work Together?
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Contact us to learn more about our culture and strategic approach to energy solutions.
						</p>

						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-5 w-5 text-accent-foreground" />
								</div>
								<span className="text-muted-foreground">info@inducode.com</span>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
									<Phone className="h-5 w-5 text-accent-foreground" />
								</div>
								<span className="text-muted-foreground">+1 (555) 123-4567</span>
							</div>
						</div>

						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide px-8 py-4">
							Get Started
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
