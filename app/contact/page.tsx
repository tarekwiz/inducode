import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Get In Touch
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">CONTACT</span>
							<br />
							<span className="text-accent">OUR EXPERTS</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Ready to discuss your energy solutions? Our team of experts is here to help you optimize
							your systems and achieve your sustainability goals.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="border-2 border-border bg-card p-8">
							<CardContent className="p-0 space-y-6">
								<div className="space-y-4">
									<h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">
										Send Us A Message
									</h2>
									<p className="text-muted-foreground">
										Fill out the form below and we'll get back to you within 24 hours.
									</p>
								</div>

								<form className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label className="text-sm font-bold text-foreground uppercase tracking-wide">
												First Name
											</label>
											<Input
												className="border-2 border-border bg-background"
												placeholder="Enter your first name"
											/>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-bold text-foreground uppercase tracking-wide">
												Last Name
											</label>
											<Input
												className="border-2 border-border bg-background"
												placeholder="Enter your last name"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Email
										</label>
										<Input
											type="email"
											className="border-2 border-border bg-background"
											placeholder="Enter your email address"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Company
										</label>
										<Input
											className="border-2 border-border bg-background"
											placeholder="Enter your company name"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Subject
										</label>
										<Input
											className="border-2 border-border bg-background"
											placeholder="What can we help you with?"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-bold text-foreground uppercase tracking-wide">
											Message
										</label>
										<Textarea
											className="border-2 border-border bg-background min-h-32"
											placeholder="Tell us about your project requirements..."
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

						{/* Contact Information */}
						<div className="space-y-8">
							<Card className="border-2 border-border bg-card p-8">
								<CardContent className="p-0 space-y-6">
									<h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">
										Contact Information
									</h2>

									<div className="space-y-6">
										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
												<Mail className="h-6 w-6 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide">
													Email
												</h3>
												<p className="text-muted-foreground">info@inducode.com</p>
												<p className="text-muted-foreground">sales@inducode.com</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
												<Phone className="h-6 w-6 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide">
													Phone
												</h3>
												<p className="text-muted-foreground">+1 (555) 123-4567</p>
												<p className="text-muted-foreground">+1 (555) 123-4568</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
												<MapPin className="h-6 w-6 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide">
													Address
												</h3>
												<p className="text-muted-foreground">1234 Energy Drive</p>
												<p className="text-muted-foreground">Houston, TX 77001</p>
												<p className="text-muted-foreground">United States</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
												<Clock className="h-6 w-6 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide">
													Business Hours
												</h3>
												<p className="text-muted-foreground">
													Monday - Friday: 8:00 AM - 6:00 PM
												</p>
												<p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
												<p className="text-muted-foreground">Sunday: Closed</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card p-8">
								<CardContent className="p-0 space-y-4">
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
										Why Choose Inducode?
									</h3>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start space-x-2">
											<span className="text-accent font-bold">•</span>
											<span>25+ years of industry experience</span>
										</li>
										<li className="flex items-start space-x-2">
											<span className="text-accent font-bold">•</span>
											<span>Comprehensive energy solutions</span>
										</li>
										<li className="flex items-start space-x-2">
											<span className="text-accent font-bold">•</span>
											<span>Proven track record of success</span>
										</li>
										<li className="flex items-start space-x-2">
											<span className="text-accent font-bold">•</span>
											<span>Expert engineering team</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Our team is standing by to help you achieve your energy efficiency goals. Contact us today
							for a consultation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								Schedule Consultation
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
