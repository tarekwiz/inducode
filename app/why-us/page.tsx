import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Zap, Shield, Users, Mail, Phone, MapPin, Award } from 'lucide-react'
import Link from 'next/link'

export default function WhyUs() {
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
							Why Choose Inducode
						</Badge>
						<h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">COMPETITIVE</span>
							<br />
							<span className="text-accent">ADVANTAGE</span>
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Inducode Technologies LLC has the expertise and experience to deliver your operations with a
							comprehensive portfolio of future-focused, industry-leading hardware and software designed
							to deliver competitive advantage.
						</p>
					</div>
				</div>
			</section>

			{/* Key Benefits Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Why Choose Us
						</h2>
						<div className="w-24 h-1 bg-accent mx-auto"></div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<TrendingUp className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Rate on Investment
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Inducode Technologies LLC will help you increase your ROI by investing in our
									"best-in-class" solutions that are early in their product lifecycles, resulting in
									solutions for future technologies — today.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Zap className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Productivity</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Our Systems and solutions are designed to deliver substantial financial savings
									because they are designed with productivity in mind.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Award className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Leading Technology
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Our state-of-the-art products allow you to enhance your flexibility and throughput
									for increased competitiveness.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Safety</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									We offer the world's most unique and comprehensive solutions supporting you
									throughout the complete machine safety life-cycle and exceeding global compliance
									requirements.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Users className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Support</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									We provide global and local sales and support to ensure you get the help you need,
									when and where you need it.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Experience the Inducode advantage. Contact our team today to discuss how we can deliver
							competitive solutions for your operations.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								Contact Us Today
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								View Our Services
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Contact Information
						</h2>
						<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-8 w-8 text-accent-foreground" />
								</div>
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
									<p className="text-muted-foreground">info@inducode.com</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
									<Phone className="h-8 w-8 text-accent-foreground" />
								</div>
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
									<p className="text-muted-foreground">+1 (555) 123-4567</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
									<MapPin className="h-8 w-8 text-accent-foreground" />
								</div>
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
									<p className="text-muted-foreground">Houston, TX 77001, USA</p>
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
						<div className="flex items-center justify-center space-x-3 mb-4">
							<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
								<span className="text-accent-foreground font-bold text-sm">I</span>
							</div>
							<div>
								<h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
								<p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
							</div>
						</div>
						<p className="text-sm opacity-80 uppercase tracking-wide">
							Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
