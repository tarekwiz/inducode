import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	Users,
	Mail,
	MapPin,
	Zap,
	Shield,
	Settings,
	Network,
	Building,
	Target,
	CheckCircle,
	Clock,
} from 'lucide-react'
import Link from 'next/link'

export default function ProposalAndDesign() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative py-20 lg:py-32">
				<div className="absolute inset-0 bg-background"></div>
				<div className="container mx-auto px-4 relative">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-6">
							<Badge
								variant="secondary"
								className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
							>
								Engineering Excellence
							</Badge>
							<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
								<span className="text-foreground">PROPOSAL</span>
								<br />
								<span className="text-accent">& DESIGN</span>
								<br />
								<span className="text-foreground">SERVICES</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								Leading provider of on-site energy solutions with proven expertise in design, build, and
								management of sustainable energy systems since 1998.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Company Overview */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<Badge
									variant="secondary"
									className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide"
								>
									About Inducode
								</Badge>
								<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
									Engineering Excellence Since 1998
								</h2>
							</div>

							<div className="space-y-6 text-muted-foreground leading-relaxed">
								<p>
									Inducode Technologies LLC is a leading provider of on-site energy solutions with a
									proven track record in the successful design, build and management of CHP,
									Tri-generation, district heating and cooling solutions.
								</p>
								<p>
									Since 1998 we have developed core competencies in energy efficiency related
									projects. We understand the demands of business having been energy solutions owners
									and operators of solutions ourselves.
								</p>
								<p>
									Both owning and operating energy efficient solutions has allowed us to offer
									customers an engineering excellence combined with a high degree of financial
									stability.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<Card className="border-2 border-border bg-card p-6 text-center">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Clock className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="text-2xl font-bold text-accent mb-2">25+</h3>
								<p className="text-sm text-muted-foreground uppercase tracking-wide">
									Years Experience
								</p>
							</Card>

							<Card className="border-2 border-border bg-card p-6 text-center">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<CheckCircle className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
								<p className="text-sm text-muted-foreground uppercase tracking-wide">Project Success</p>
							</Card>

							<Card className="border-2 border-border bg-card p-6 text-center">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Users className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="text-2xl font-bold text-accent mb-2">50+</h3>
								<p className="text-sm text-muted-foreground uppercase tracking-wide">
									Expert Engineers
								</p>
							</Card>

							<Card className="border-2 border-border bg-card p-6 text-center">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Building className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="text-2xl font-bold text-accent mb-2">500+</h3>
								<p className="text-sm text-muted-foreground uppercase tracking-wide">
									Projects Delivered
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Core Competencies */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Our Expertise
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Core Competencies
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							We have an in-house team of qualified and experienced engineers, ensuring consistently high
							quality work.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Zap className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">CHP Systems</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Combined Heat and Power system design, implementation, and optimization for maximum
									energy efficiency.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Network className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Tri-Generation</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Advanced tri-generation systems providing electricity, heating, and cooling from a
									single fuel source.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Building className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">District Systems</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									District heating and cooling solutions for high-density developments and commercial
									complexes.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Target className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Project Management
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									End-to-end project management ensuring on-time delivery and budget compliance for
									all projects.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Settings className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Operations</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Comprehensive operation and maintenance services to ensure optimal system
									performance and longevity.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Financial Stability
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									High degree of financial stability backed by our experience as energy solution
									owners and operators.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Service Approach */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Our Approach
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Comprehensive Service Delivery
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							We are dedicated to providing low energy on-site solutions and can support projects from
							concept design through to delivery, operation and maintenance of systems.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<Card className="border-2 border-border bg-card p-6">
								<CardHeader className="px-0 pt-0">
									<CardTitle className="text-accent uppercase tracking-wide flex items-center">
										<CheckCircle className="h-6 w-6 mr-3" />
										Single Point of Contact
									</CardTitle>
								</CardHeader>
								<CardContent className="px-0 pb-0">
									<p className="text-muted-foreground leading-relaxed">
										Our clients gain the benefit of a single point of contact and a single line of
										responsibility throughout the entire project lifecycle.
									</p>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card p-6">
								<CardHeader className="px-0 pt-0">
									<CardTitle className="text-accent uppercase tracking-wide flex items-center">
										<CheckCircle className="h-6 w-6 mr-3" />
										Engineering Excellence
									</CardTitle>
								</CardHeader>
								<CardContent className="px-0 pb-0">
									<p className="text-muted-foreground leading-relaxed">
										Combined with our engineering excellence, we ensure the most cost effective,
										energy efficient and maintainable solution is achieved.
									</p>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card p-6">
								<CardHeader className="px-0 pt-0">
									<CardTitle className="text-accent uppercase tracking-wide flex items-center">
										<CheckCircle className="h-6 w-6 mr-3" />
										Collaborative Partnership
									</CardTitle>
								</CardHeader>
								<CardContent className="px-0 pb-0">
									<p className="text-muted-foreground leading-relaxed">
										In conjunction with our customers, we work with leading consultants, architects,
										developers & contractors to deliver projects on time and within budget.
									</p>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-6">
							<div className="text-center p-8 border-2 border-accent bg-accent/5">
								<h3 className="text-2xl font-bold text-accent mb-4 uppercase tracking-wide">
									Full Service Lifecycle
								</h3>
								<div className="space-y-4 text-left">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-accent mr-4"></div>
										<span className="text-muted-foreground">Concept Design</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-accent mr-4"></div>
										<span className="text-muted-foreground">Engineering & Development</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-accent mr-4"></div>
										<span className="text-muted-foreground">Project Delivery</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-accent mr-4"></div>
										<span className="text-muted-foreground">System Operation</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-accent mr-4"></div>
										<span className="text-muted-foreground">Maintenance & Support</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<Badge
								variant="secondary"
								className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
							>
								Get Started
							</Badge>
							<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
								Ready to Discuss Your Project?
							</h2>
							<p className="text-xl text-muted-foreground leading-relaxed">
								Contact our team of experts to learn how we can help optimize your energy systems and
								deliver engineering excellence for your next project.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								asChild
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								<Link href="/contact">
									Contact Us Today
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								<Link href="/feasibility-studies">View Feasibility Studies</Link>
							</Button>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mt-16">
							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<Mail className="h-8 w-8 text-accent-foreground" />
								</div>
								<div>
									<p className="font-bold text-foreground uppercase tracking-wide">Email Us</p>
									<p className="text-muted-foreground">info@inducode.com</p>
								</div>
							</div>


							<div className="text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<MapPin className="h-8 w-8 text-accent-foreground" />
								</div>
								<div>
									<p className="font-bold text-foreground uppercase tracking-wide">Visit Us</p>
									<p className="text-muted-foreground">Sheridan, WY 82801, USA</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<Link href="/" className="inline-flex items-center space-x-3 mb-6">
							<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
								<span className="text-accent-foreground font-bold text-sm">I</span>
							</div>
							<div>
								<h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
								<p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
							</div>
						</Link>
						<p className="text-sm opacity-80 uppercase tracking-wide">
							Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
