import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	Cog,
	Leaf,
	Users,
	Mail,
	Phone,
	MapPin,
	Zap,
	Shield,
	Settings,
	Network,
	Thermometer,
} from 'lucide-react'

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b-2 border-border bg-card sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<nav className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
								<span className="text-accent-foreground font-bold text-lg">I</span>
							</div>
							<div>
								<h1 className="font-bold text-2xl text-foreground tracking-wider">INDUCODE</h1>
								<p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
									TECHNOLOGIES
								</p>
							</div>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#about"
								className="text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
							>
								Engineering
							</a>
							<a
								href="#services"
								className="text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
							>
								Solutions
							</a>
							<a
								href="#solutions"
								className="text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
							>
								Services
							</a>
							<a
								href="#contact"
								className="text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
							>
								Contact
							</a>
						</div>

						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
							Get Started
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</nav>
				</div>
			</header>

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
								Sustainable Energy Solutions
							</Badge>
							<h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
								<span className="text-foreground">SUSTAINABLE</span>
								<br />
								<span className="text-foreground">ENERGY TECHNOLOGIES</span>
								<br />
								<span className="text-accent">& INDUSTRIAL SOLUTIONS</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
								Leading provider of innovative engineering solutions for sustainable energy systems,
								process optimization, and industrial technologies.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								Explore Solutions
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Technologies Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Our Core Technologies
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Advanced Energy Solutions
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Discover our cutting-edge technologies that deliver sustainable, efficient, and reliable
							energy solutions for modern infrastructure needs.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Zap className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
									Combined Heat And Power (CHP)
								</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Combined heat and Power (CHP) is the simultaneous on-site generation of usable heat
									and electricity from a single fuel source, delivering exceptional energy efficiency.
								</p>
								<div className="space-y-2 mb-6">
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">90% Energy Efficiency</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Reduced Carbon Footprint</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Lower Operating Costs</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Reliable Power Supply</span>
									</div>
								</div>
								<Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
									Learn More
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
								</Button>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Network className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
									TRI-GENERATION
								</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Tri-generation is the generation of three energy outputs (electricity, heat, and
									chilled water) from one single fuel input, maximizing energy utilization.
								</p>
								<div className="space-y-2 mb-6">
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Triple Energy Output</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Maximum Efficiency</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Cost Optimization</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Environmental Benefits</span>
									</div>
								</div>
								<Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
									Learn More
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
								</Button>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Thermometer className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
									DISTRICT HEATING & COOLING
								</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									A District Cooling/Heating system distributes energy in the form of chilled water,
									hot water or steam from a central source to high density developments.
								</p>
								<div className="space-y-2 mb-6">
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Centralized System</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Energy Distribution</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Scalable Solutions</span>
									</div>
									<div className="flex items-center text-sm">
										<div className="w-2 h-2 bg-accent mr-3"></div>
										<span className="text-muted-foreground">Smart Infrastructure</span>
									</div>
								</div>
								<Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
									Learn More
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
								</Button>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-16">
						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide px-8 py-4">
							View All Technologies
						</Button>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section id="services" className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Core Engineering Services
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Comprehensive industrial solutions across multiple disciplines
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Cog className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Engineering</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<h3 className="font-semibold text-lg uppercase tracking-wide">Process Engineering</h3>
								<p className="text-muted-foreground leading-relaxed">
									Designing HVAC and HVAC-R engineering using industry-leading software and best
									practices. Modeling of processes and Using Spread Sheet Based Engineering
									calculations, Commissioning and Start-up of systems and equipment.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-secondary border-2 border-secondary flex items-center justify-center mx-auto mb-4">
									<Users className="h-8 w-8 text-secondary-foreground" />
								</div>
								<CardTitle className="text-secondary uppercase tracking-wide">Services</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<h3 className="font-semibold text-lg uppercase tracking-wide">Professional Services</h3>
								<p className="text-muted-foreground leading-relaxed">
									We provide engineering services such as feasibility studies, energy audits, design
									engineering, project management, procurement, construction management,
									commissioning, start-up, and training.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-chart-3 border-2 border-chart-3 flex items-center justify-center mx-auto mb-4">
									<Leaf className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-chart-3 uppercase tracking-wide">Solutions</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<h3 className="font-semibold text-lg uppercase tracking-wide">Petroleum & Chemical</h3>
								<p className="text-muted-foreground leading-relaxed">
									Thermal Process Engineering projects, design and analysis of heat exchangers,
									improved oil recovery, carbon sequestration, improved oil recovery, production
									optimization, optimization and improvement of petroleum refining processes.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Fire Fighting Systems */}
			<section className="py-16 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Fire Fighting Systems
						</h2>
						<div className="w-24 h-1 bg-accent mx-auto"></div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ title: 'FIRE FIGHTING PUMPS', image: 'fire fighting pump system', icon: Zap },
							{ title: 'DELUGE SPRINKLER', image: 'deluge sprinkler system', icon: Shield },
							{ title: 'FOAM SYSTEMS', image: 'foam fire suppression system', icon: Settings },
							{ title: 'SMOKE DETECTION', image: 'smoke detection control panel', icon: Cog },
						].map((item, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0"
							>
								<CardContent className="p-0">
									<div className=" overflow-hidden bg-muted border-b-2 border-border relative">
										<div className="inset-0 bg-background/80 flex items-center justify-center  p-8">
											<item.icon className="h-16 w-16 text-accent" />
										</div>
									</div>
									<div className="p-4">
										<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
											{item.title}
										</h3>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									Get In Touch
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Ready to discuss your next project? Contact our team of experts to learn how we can
									help optimize your energy systems and engineering challenges.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
										<Mail className="h-6 w-6 text-accent-foreground" />
									</div>
									<div>
										<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
										<p className="text-muted-foreground">info@inducode.com</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
										<Phone className="h-6 w-6 text-accent-foreground" />
									</div>
									<div>
										<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
										<p className="text-muted-foreground">+1 (555) 123-4567</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
										<MapPin className="h-6 w-6 text-accent-foreground" />
									</div>
									<div>
										<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
										<p className="text-muted-foreground">Houston, TX 77001, USA</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-8 border-2 border-border bg-card">
							<CardHeader className="px-0 pt-0">
								<CardTitle className="uppercase tracking-wide">Request Information</CardTitle>
								<CardDescription>
									Fill out the form below and we'll get back to you within 24 hours.
								</CardDescription>
							</CardHeader>
							<CardContent className="px-0 pb-0">
								<form className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label className="text-sm font-bold text-foreground uppercase tracking-wide">
												First Name
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
												placeholder="John"
											/>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-bold text-foreground uppercase tracking-wide">
												Last Name
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
												placeholder="Doe"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Company Name
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
											placeholder="Your Company"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Email
										</label>
										<input
											type="email"
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
											placeholder="john@company.com"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Message
										</label>
										<textarea
											rows={4}
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent resize-none text-foreground"
											placeholder="Tell us about your project..."
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
									>
										Send Message
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
									<span className="text-accent-foreground font-bold text-sm">I</span>
								</div>
								<div>
									<h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
									<p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
								</div>
							</div>
							<p className="text-sm opacity-80 leading-relaxed">
								Inducode Technologies LLC is one of the world's most trusted providers of sustainable
								energy efficient technologies for businesses.
							</p>
						</div>

						<div className="space-y-4">
							<h4 className="font-bold uppercase tracking-wide">Services</h4>
							<ul className="space-y-2 text-sm opacity-80">
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Process Engineering
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Energy Audits
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Project Management
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Commissioning
									</a>
								</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h4 className="font-bold uppercase tracking-wide">Solutions</h4>
							<ul className="space-y-2 text-sm opacity-80">
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										CHP Systems
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Fire Fighting
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										HVAC Design
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
									>
										Energy Optimization
									</a>
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
		</div>
	)
}
