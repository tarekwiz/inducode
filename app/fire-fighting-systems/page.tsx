import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Droplets, Flame, AlertTriangle, Phone, Mail, MapPin, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function FireFightingSystems() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
						>
							Fire Safety Solutions
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">FIRE FIGHTING</span>
							<br />
							<span className="text-accent">SYSTEMS</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							A firefighting system is probably the most important of the building services, as its aim is
							to protect human life and property, strictly in that order.
						</p>
					</div>
				</div>
			</section>

			{/* System Components */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							System Components
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							It consists of three basic parts that work together to provide comprehensive fire protection
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Droplets className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Fire Storage Tanks
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									A large store of water in tanks, either underground or on top of the building,
									called fire storage tanks
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Pumping System</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									A specialized pumping system designed to deliver water at the required pressure and
									flow rate
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<AlertTriangle className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Distribution Network
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									A large network of pipes ending in either hydrants or sprinklers (nearly all
									buildings require both of these systems)
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Fire Fighting Equipment */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Fire Fighting Equipment
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Comprehensive fire protection systems and equipment for complete safety coverage
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8 bg-muted">
								<Shield className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
							</div>
							<CardContent className="p-6">
								<h3 className="font-bold text-center text-lg text-foreground uppercase tracking-wide mb-2">
									FIREFIGHTING PUMP
								</h3>
								<p className="text-muted-foreground text-sm text-center leading-relaxed">
									High-pressure pumping systems for reliable water delivery
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8 bg-muted">
								<Droplets className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
							</div>
							<CardContent className="p-6">
								<h3 className="font-bold text-center text-lg text-foreground uppercase tracking-wide mb-2">
									WATER SPRINKLER
								</h3>
								<p className="text-muted-foreground text-sm text-center leading-relaxed">
									Automatic sprinkler systems for immediate fire suppression
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8 bg-muted">
								<Flame className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
							</div>
							<CardContent className="p-6">
								<h3 className="font-bold text-center text-lg text-foreground uppercase tracking-wide mb-2">
									FOAM
								</h3>
								<p className="text-muted-foreground text-sm text-center leading-relaxed">
									Foam suppression systems for specialized fire hazards
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8 bg-muted">
								<AlertTriangle className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
							</div>
							<CardContent className="p-6">
								<h3 className="font-bold text-center text-lg text-foreground uppercase tracking-wide mb-2">
									SMOKE DETECTOR SOUNDER
								</h3>
								<p className="text-muted-foreground text-sm text-center leading-relaxed">
									Early detection and alarm systems for rapid response
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Fire Safety Consultation
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Contact our fire safety experts to discuss your fire protection requirements and ensure
							comprehensive safety coverage for your facility.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
								Get Fire Safety Quote
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								className="border-2 border-border hover:bg-card font-bold uppercase tracking-wide bg-transparent"
							>
								Schedule Consultation
							</Button>
						</div>

						<div className="grid md:grid-cols-3 gap-8 mt-12">
							<div className="flex flex-col items-center space-y-2">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-6 w-6 text-accent-foreground" />
								</div>
								<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
								<p className="text-muted-foreground">info@inducode.com</p>
							</div>

							<div className="flex flex-col items-center space-y-2">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Phone className="h-6 w-6 text-accent-foreground" />
								</div>
								<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
								<p className="text-muted-foreground">+1 (555) 123-4567</p>
							</div>

							<div className="flex flex-col items-center space-y-2">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<MapPin className="h-6 w-6 text-accent-foreground" />
								</div>
								<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
								<p className="text-muted-foreground">Houston, TX 77001, USA</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
