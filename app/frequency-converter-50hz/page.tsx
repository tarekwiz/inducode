import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Globe, Settings, Shield, CheckCircle, Download, Mail, MapPin } from 'lucide-react'

export default function FrequencyConverter50Hz() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative py-20 lg:py-32">
				<div className="absolute inset-0 bg-background"></div>
				<div className="container mx-auto px-4 relative">
					<div className="text-center space-y-8 max-w-5xl mx-auto">
						<div className="space-y-6">
							<Badge
								variant="secondary"
								className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
							>
								Global Power Solutions
							</Badge>
							<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
								<span className="text-foreground">GLOBAL POWER COMPATIBILITY:</span>
								<br />
								<span className="text-foreground">INDUCODE TECHNOLOGIES</span>
								<br />
								<span className="text-accent">60HZ TO 50 HZ AND VICE VERSA</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								Ensure your foreign-sourced equipment operates seamlessly with our robust and reliable 50 Hz power solutions.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								Request a Quote
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<a href="/downloads/60HZ_TO_50HZ_MGF.pdf" download="60Hz_to_50Hz_Frequency_Converter_Datasheet.pdf">
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
								>
									Download Data Sheet
									<Download className="ml-2 h-5 w-5" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Product Overview */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							50H Model
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Product Overview
						</h2>
						<p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
							The 50H Model motor generator set provides a clean source of 50 Hz power that is isolated from power line noise, voltage fluctuations, and switching transients. It's designed for continuous duty and high reliability.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<Card className="border-2 border-border hover:border-accent transition-colors bg-card">
							<CardHeader className="text-center pb-4">
								<Globe className="h-12 w-12 text-accent mx-auto mb-4" />
								<CardTitle className="text-accent uppercase tracking-wide">Precise Output</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Delivers a stable 50 Hz output frequency from no-load to full-load.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border hover:border-accent transition-colors bg-card">
							<CardHeader className="text-center pb-4">
								<Settings className="h-12 w-12 text-accent mx-auto mb-4" />
								<CardTitle className="text-accent uppercase tracking-wide">Versatile Use</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Suitable for military applications and American manufacturing facilities that require precise 50 Hz power.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border hover:border-accent transition-colors bg-card">
							<CardHeader className="text-center pb-4">
								<Shield className="h-12 w-12 text-accent mx-auto mb-4" />
								<CardTitle className="text-accent uppercase tracking-wide">Rugged Design</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Built to withstand harsh military environments and continuous operation.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="text-center">
						<h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-6">
							Motor/Generator Configuration
						</h3>
						<div className="max-w-2xl mx-auto">
							<div className="flex items-center justify-center space-x-3">
								<CheckCircle className="h-6 w-6 text-accent" />
								<span className="text-muted-foreground">Consists of an induction or synchronous motor and a synchronous generator on a common shaft</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Specifications */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Technical Specifications
						</h2>
						<p className="text-xl text-muted-foreground">Model 50H-90</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<Card className="border-2 border-border bg-card p-8">
							<CardHeader className="px-0 pt-0">
								<CardTitle className="text-accent uppercase tracking-wide text-xl">
									Input/Output Specifications
								</CardTitle>
							</CardHeader>
							<CardContent className="px-0 pb-0 space-y-4">
								<div className="space-y-4">
									<div>
										<p className="font-bold text-foreground">Input:</p>
										<p className="text-muted-foreground">60Hz</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Output:</p>
										<p className="text-muted-foreground">50Hz at 90 kVA</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Output Voltages:</p>
										<p className="text-muted-foreground">Selection of 50 Hz output voltages including:</p>
										<ul className="text-muted-foreground ml-4 mt-2 space-y-1">
											<li>• 120/208V, 3-phase</li>
											<li>• 220/380V, 3-phase</li>
											<li>• 277/480V, 3-phase</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 border-border bg-card p-8">
							<CardHeader className="px-0 pt-0">
								<CardTitle className="text-accent uppercase tracking-wide text-xl">
									Performance & Environmental
								</CardTitle>
							</CardHeader>
							<CardContent className="px-0 pb-0 space-y-4">
								<div className="space-y-3">
									<div>
										<p className="font-bold text-foreground">Duty Cycle:</p>
										<p className="text-muted-foreground">Designed for continuous duty</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Reliability:</p>
										<p className="text-muted-foreground">High reliability for critical applications</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Noise Level:</p>
										<p className="text-muted-foreground">75-80 dBA (indoor use)</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Environment:</p>
										<p className="text-muted-foreground">Suitable for harsh military environments</p>
									</div>
									<div>
										<p className="font-bold text-foreground">Power Quality:</p>
										<p className="text-muted-foreground">Clean power isolated from line noise, voltage fluctuations, and switching transients</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Applications */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Typical Applications
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Perfect for military installations and manufacturing facilities using European-standard equipment
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="border-2 border-border hover:border-accent transition-colors bg-card p-8">
							<div className="text-center">
								<Shield className="h-12 w-12 text-accent mx-auto mb-4" />
								<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-4">
									Military Installations
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Providing reliable 50 Hz power for military applications that require precise frequency conversion for foreign-sourced equipment and systems.
								</p>
							</div>
						</Card>

						<Card className="border-2 border-border hover:border-accent transition-colors bg-card p-8">
							<div className="text-center">
								<Settings className="h-12 w-12 text-accent mx-auto mb-4" />
								<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-4">
									Manufacturing Facilities
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Supporting American manufacturing facilities that utilize European-standard equipment requiring precise 50 Hz power for large-scale operations.
								</p>
							</div>
						</Card>
					</div>

					<div className="text-center mt-12">
						<a href="/downloads/50H_MODEL_MOTOR.docx" download="50Hz_Frequency_Converter_Datasheet.docx">
							<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide px-8 py-4">
								Download the Full Data Sheet
								<Download className="ml-2 h-5 w-5" />
							</Button>
						</a>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Why Choose Inducode Technologies?
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Reiterate their commitment to innovative, high-quality energy solutions. Inducode Technologies LLC is one of the World's most trusted providers of sustainable energy efficient technologies for businesses.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-8">
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
											Email Address
										</label>
										<input
											type="email"
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
											placeholder="john@company.com"
										/>
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
											Country
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent text-foreground"
											placeholder="United States"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Message
										</label>
										<textarea
											rows={4}
											className="w-full px-3 py-2 border-2 border-border bg-input focus:outline-none focus:border-accent resize-none text-foreground"
											placeholder="Tell us about your 50Hz power requirements..."
										/>
									</div>

									<div className="flex items-start space-x-3">
										<input
											type="checkbox"
											className="mt-1 border-2 border-border"
											id="consent"
										/>
										<label htmlFor="consent" className="text-sm text-muted-foreground">
											By signing up, you are providing consent for Inducode Inc. and its affiliated and subsidiaries to send marketing communications. You can withdraw your consent at any time.
										</label>
									</div>

									<Button
										type="submit"
										className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
									>
										Request Information
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