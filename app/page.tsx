import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
	ArrowRight,
	Cog,
	Leaf,
	Users,
	Mail,
	MapPin,
	Zap,
	Shield,
	Settings,
	Network,
	Thermometer,
	Globe,
} from 'lucide-react'

export default function Home() {
	return (
		<>
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
							<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
								<span className="text-foreground">SUSTAINABLE</span>
								<br />
								<span className="text-foreground">ENERGY TECHNOLOGIES</span>
								<br />
								<span className="text-accent">& COMFORT SOLUTIONS</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
								Inducode Technologies LLC is one of the World's most trusted providers of sustainable energy efficient technologies for businesses.
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
						<Link href="/engineering-capabilities" className="group">
							<Card className="hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card h-full">
								<CardHeader className="text-center pb-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
										<Cog className="h-8 w-8 text-accent-foreground" />
									</div>
									<CardTitle className="text-accent uppercase tracking-wide">Engineering</CardTitle>
								</CardHeader>
								<CardContent className="text-center space-y-4">
									<h3 className="font-semibold text-lg uppercase tracking-wide">Process Engineering</h3>
									<p className="text-muted-foreground leading-relaxed">
										Preparing PFD's and P&ID's, P&ID drafting using SPPID, Process calculation using Aspen HYSYS, Handling of process data Using Special Data Base, Pre-commissioning assistance, Commissioning assistance, Updating/revision of P&ID's in compliance with detail engineering execution.
									</p>
									<Button className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
										Find out more
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</Button>
								</CardContent>
							</Card>
						</Link>

						<Link href="/feasibility-studies" className="group">
							<Card className="hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card h-full">
								<CardHeader className="text-center pb-4">
									<div className="w-16 h-16 bg-secondary border-2 border-secondary flex items-center justify-center mx-auto mb-4">
										<Users className="h-8 w-8 text-secondary-foreground" />
									</div>
									<CardTitle className="text-secondary uppercase tracking-wide">Services</CardTitle>
								</CardHeader>
								<CardContent className="text-center space-y-4">
									<h3 className="font-semibold text-lg uppercase tracking-wide">Substantial Financial</h3>
									<p className="text-muted-foreground leading-relaxed">
										Inducode Technologies LLC is an energy infrastructure developer for renewable and conventional electrical, cooling and heat energy solutions. We use the latest technologies providing substantial financial and CO2 savings to our customers through EPC (Engineer Procure Construct) and/or BOO (Build, Own Operate) contracts.
									</p>
									<Button className="w-full mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 border-2 border-border hover:border-secondary font-bold uppercase tracking-wide">
										Find out more
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</Button>
								</CardContent>
							</Card>
						</Link>

						<Link href="/energy-solutions" className="group">
							<Card className="hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card h-full">
								<CardHeader className="text-center pb-4">
									<div className="w-16 h-16 bg-chart-3 border-2 border-chart-3 flex items-center justify-center mx-auto mb-4">
										<Leaf className="h-8 w-8 text-white" />
									</div>
									<CardTitle className="text-chart-3 uppercase tracking-wide">Solutions</CardTitle>
								</CardHeader>
								<CardContent className="text-center space-y-4">
									<h3 className="font-semibold text-lg uppercase tracking-wide">Petroleum & Chemical</h3>
									<p className="text-muted-foreground leading-relaxed">
										Chemical Process Engineers research, design and develop chemical processes and equipment to expand operations, improve efficiencies, reduce emissions and resolve issues in the oil and gas industry. These engineers also oversee the operation, performance, optimization and maintenance of petroleum production, processing, upgrading, liquefaction and refining
									</p>
									<Button className="w-full mt-4 group-hover:bg-chart-3 group-hover:text-white transition-all duration-300 border-2 border-border hover:border-chart-3 font-bold uppercase tracking-wide">
										Find out more
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</Button>
								</CardContent>
							</Card>
						</Link>
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

			{/* Frequency Converter Services */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Frequency Conversion Solutions
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Precision Power Conversion
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Professional-grade frequency converters for military, industrial, and laboratory applications
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<Link href="/frequency-converter-400hz" className="group">
							<Card className="hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card h-full">
								<div className="border-b-2 border-border flex justify-center p-8">
									<Zap className="size-20 group-hover:text-accent" />
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
										60Hz to 400Hz Frequency Converters
									</h3>
									<p className="text-muted-foreground mb-6 leading-relaxed">
										Provide a clean, isolated 400 Hz power source for your critical equipment, from military applications to university laboratories. The 400G Model delivers precise output with high overload capability.
									</p>
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Model 400G-160: 160 kVA (128 kW)</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">±1% Voltage Regulation</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Military & Laboratory Use</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Less than 3% THD</span>
										</div>
									</div>
									<Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
										Learn More
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</Button>
								</CardContent>
							</Card>
						</Link>

						<Link href="/frequency-converter-50hz" className="group">
							<Card className="hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card h-full">
								<div className="border-b-2 border-border flex justify-center p-8">
									<Globe className="size-20 group-hover:text-accent" />
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
										60Hz to 50Hz and Vice Versa
									</h3>
									<p className="text-muted-foreground mb-6 leading-relaxed">
										Ensure your foreign-sourced equipment operates seamlessly with our robust and reliable 50 Hz power solutions. The 50H Model provides clean, isolated power for global compatibility.
									</p>
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Model 50H-90: 90 kVA</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Multiple Output Voltages</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">Continuous Duty Design</span>
										</div>
										<div className="flex items-center text-sm">
											<div className="w-2 h-2 bg-accent mr-3"></div>
											<span className="text-muted-foreground">European Equipment Compatible</span>
										</div>
									</div>
									<Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border-2 border-border hover:border-accent font-bold uppercase tracking-wide">
										Learn More
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</Button>
								</CardContent>
							</Card>
						</Link>
					</div>

					<div className="text-center mt-16">
						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide px-8 py-4">
							View All Frequency Converters
						</Button>
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
										<MapPin className="h-6 w-6 text-accent-foreground" />
									</div>
									<div>
										<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
										<p className="text-muted-foreground">32 N Gould St, Sheridan, WY 82801, USA</p>
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
		</>
	)
}
