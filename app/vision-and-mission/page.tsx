import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Eye, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function VisionAndMission() {
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
							About Inducode Technologies
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">OUR</span>
							<br />
							<span className="text-accent">VISION & MISSION</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							Driving the future of sustainable energy technologies and industrial solutions worldwide.
						</p>
					</div>
				</div>
			</section>

			{/* Vision and Mission Content */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Vision */}
						<Card className="border-2 border-border bg-card p-0">
							<CardHeader className="border-b-2 border-border bg-accent/5 p-8">
								<div className="flex items-center space-x-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
										<Eye className="h-8 w-8 text-accent-foreground" />
									</div>
									<CardTitle className="text-3xl font-bold text-foreground uppercase tracking-wide">
										Our Vision
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="p-8">
								<p className="text-lg text-muted-foreground leading-relaxed">
									Our Vision is to be a{' '}
									<span className="text-accent font-semibold">global leader</span> creating maximum
									value in the successful delivery of sustainable technologies, solutions and energy
									efficient products, on a business to business basis.
								</p>
							</CardContent>
						</Card>

						{/* Mission */}
						<Card className="border-2 border-border bg-card p-0">
							<CardHeader className="border-b-2 border-border bg-accent/5 p-8">
								<div className="flex items-center space-x-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
										<Target className="h-8 w-8 text-accent-foreground" />
									</div>
									<CardTitle className="text-3xl font-bold text-foreground uppercase tracking-wide">
										Our Mission
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="p-8 space-y-6">
								<div className="space-y-4">
									<p className="text-lg text-muted-foreground leading-relaxed">
										Inducode Technologies LLC offers a{' '}
										<span className="text-accent font-semibold">turnkey energy solution</span> under
										an engineer, procure and construct (EPC) type contract or via a Power Purchase
										Agreement whereby Inducode Technologies LLC funds the commissioning cost of the
										project by selling the electricity, heating, cooling and steam outputs back to
										the customer.
									</p>

									<p className="text-lg text-muted-foreground leading-relaxed">
										To develop and supply{' '}
										<span className="text-accent font-semibold">
											machinery, robotics, industrial automation products & building management
											systems
										</span>
										, which are intended for innovative & UN-paralleled control, visualization,
										productivity and connectivity. Such systems will be used for flexible production
										of small to medium-large business.
									</p>

									<p className="text-lg text-muted-foreground leading-relaxed">
										To supply{' '}
										<span className="text-accent font-semibold">
											energy efficient products, construction materials
										</span>{' '}
										to achieve the best comfort, safest environment. Our products, solutions &
										services will provide substantial financial savings to our customers.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Our Core Values
						</h2>
						<div className="w-24 h-1 bg-accent mx-auto"></div>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							The principles that guide our commitment to excellence and innovation
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-2 border-border bg-card text-center p-6">
							<CardContent className="space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<span className="text-accent-foreground font-bold text-2xl">S</span>
								</div>
								<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
									Sustainability
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Committed to delivering environmentally responsible solutions that reduce carbon
									footprint and promote sustainable energy practices.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border bg-card text-center p-6">
							<CardContent className="space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<span className="text-accent-foreground font-bold text-2xl">I</span>
								</div>
								<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
									Innovation
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Continuously advancing technology and engineering solutions to meet evolving
									industry challenges and customer needs.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border bg-card text-center p-6">
							<CardContent className="space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<span className="text-accent-foreground font-bold text-2xl">E</span>
								</div>
								<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
									Excellence
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Maintaining the highest standards in project delivery, customer service, and
									technical expertise across all operations.
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
							Ready to Work With Us?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Let's discuss how our vision and mission align with your energy and industrial automation
							needs.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								<Link href="/#contact">
									Get In Touch
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-2 border-border hover:bg-card font-bold uppercase tracking-wide bg-transparent"
							>
								<Link href="/">Back to Home</Link>
							</Button>
						</div>

						<div className="grid md:grid-cols-3 gap-8 mt-12">
							<div className="flex items-center justify-center space-x-3">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide text-sm">Email</p>
									<p className="text-muted-foreground text-sm">info@inducode.com</p>
								</div>
							</div>

							<div className="flex items-center justify-center space-x-3">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide text-sm">Phone</p>
								</div>
							</div>

							<div className="flex items-center justify-center space-x-3">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<MapPin className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide text-sm">
										Location
									</p>
									<p className="text-muted-foreground text-sm">Sheridan, WY 82801</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
