import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	CheckCircle,
	Settings,
	Zap,
	Wrench,
	Shield,
	Activity,
	Gauge,
	Mail,
	Phone,
	MapPin,
} from 'lucide-react'
import Link from 'next/link'

export default function CommissioningSolutions() {
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
							Commissioning Solutions
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">SYSTEM</span>
							<br />
							<span className="text-accent">COMMISSIONING</span>
							<br />
							<span className="text-foreground">& VERIFICATION</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Ensuring maximum efficiency and optimal performance of your designed and implemented systems
							through comprehensive commissioning services.
						</p>
					</div>
				</div>
			</section>

			{/* Importance Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<Badge
									variant="secondary"
									className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide"
								>
									Critical Process
								</Badge>
								<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
									Why Commissioning Matters
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Commissioning is a very important stage to ensure the efficiency of designed and
									implemented systems. Despite the designed smart solutions and the high quality
									construction work, the plant will not get the maximum output results (or even
									failure in operation sometimes) if the plant was not commissioned well.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-start space-x-4">
									<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
										<CheckCircle className="h-3 w-3 text-accent-foreground" />
									</div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide">
											Maximum Efficiency
										</h3>
										<p className="text-muted-foreground">
											Ensure systems operate at peak performance levels
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
										<CheckCircle className="h-3 w-3 text-accent-foreground" />
									</div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide">
											Prevent Failures
										</h3>
										<p className="text-muted-foreground">
											Identify and resolve issues before they cause operational problems
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
										<CheckCircle className="h-3 w-3 text-accent-foreground" />
									</div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide">
											Verify Performance
										</h3>
										<p className="text-muted-foreground">
											Test and confirm systems meet design specifications
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-card border-2 border-border p-8">
							<div className="text-center space-y-6">
								<Settings className="h-24 w-24 text-accent mx-auto" />
								<h3 className="text-2xl font-bold text-foreground uppercase tracking-wide">
									Comprehensive Testing & Verification
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Commissioning is a series of activities to test and verify the readiness of
									integrated systems to perform as per the design.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Our Commissioning Services
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Inducode Technologies LLC provides comprehensive commissioning services across mechanical
							and electrical systems.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Mechanical Services */}
						<Card className="border-2 border-border bg-card p-0">
							<CardHeader className="border-b-2 border-border bg-muted p-8">
								<div className="flex items-center space-x-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
										<Wrench className="h-8 w-8 text-accent-foreground" />
									</div>
									<div>
										<CardTitle className="text-2xl text-foreground uppercase tracking-wide">
											Mechanical Services
										</CardTitle>
										<p className="text-muted-foreground uppercase tracking-wide text-sm">
											Comprehensive Mechanical System Testing
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent className="p-8">
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Hydro-Testing
											</h3>
											<p className="text-muted-foreground">
												Pressure testing of piping systems and vessels to ensure structural
												integrity and leak detection.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Flushing & Chemical Treatment
											</h3>
											<p className="text-muted-foreground">
												System cleaning and chemical treatment to remove contaminants and
												prepare systems for operation.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Balancing
											</h3>
											<p className="text-muted-foreground">
												Flow and pressure balancing to ensure optimal system performance and
												energy efficiency.
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Electrical Services */}
						<Card className="border-2 border-border bg-card p-0">
							<CardHeader className="border-b-2 border-border bg-muted p-8">
								<div className="flex items-center space-x-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center">
										<Zap className="h-8 w-8 text-accent-foreground" />
									</div>
									<div>
										<CardTitle className="text-2xl text-foreground uppercase tracking-wide">
											Electrical Services
										</CardTitle>
										<p className="text-muted-foreground uppercase tracking-wide text-sm">
											Complete Electrical System Verification
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent className="p-8">
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Meggering Continuity Test
											</h3>
											<p className="text-muted-foreground">
												Insulation resistance testing to verify electrical safety and system
												integrity.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Resistance Insulation
											</h3>
											<p className="text-muted-foreground">
												Comprehensive insulation testing to ensure electrical safety standards.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												High Potential Test (DC & AC)
											</h3>
											<p className="text-muted-foreground">
												High voltage testing to verify insulation strength and electrical
												safety.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Coordination Study
											</h3>
											<p className="text-muted-foreground">
												Protection coordination analysis to ensure proper system operation and
												safety.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												PLC Pre-commissioning
											</h3>
											<p className="text-muted-foreground">
												Programmable Logic Controller testing and verification before system
												startup.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-4 h-4 bg-accent mt-2"></div>
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
												Instruments Calibration
											</h3>
											<p className="text-muted-foreground">
												Precision calibration of measurement and control instruments for
												accurate operation.
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Process Overview */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Our Commissioning Process
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							A systematic approach to ensure your systems are ready for optimal operation.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<Card className="border-2 border-border bg-card text-center p-6">
							<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8 text-accent-foreground" />
							</div>
							<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">1. Pre-Testing</h3>
							<p className="text-muted-foreground text-sm">
								System inspection and preparation for commissioning activities.
							</p>
						</Card>

						<Card className="border-2 border-border bg-card text-center p-6">
							<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
								<Activity className="h-8 w-8 text-accent-foreground" />
							</div>
							<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">2. Testing</h3>
							<p className="text-muted-foreground text-sm">
								Comprehensive testing of all mechanical and electrical systems.
							</p>
						</Card>

						<Card className="border-2 border-border bg-card text-center p-6">
							<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
								<Gauge className="h-8 w-8 text-accent-foreground" />
							</div>
							<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">3. Verification</h3>
							<p className="text-muted-foreground text-sm">
								Performance verification against design specifications and requirements.
							</p>
						</Card>

						<Card className="border-2 border-border bg-card text-center p-6">
							<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
								<CheckCircle className="h-8 w-8 text-accent-foreground" />
							</div>
							<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">4. Handover</h3>
							<p className="text-muted-foreground text-sm">
								System documentation and training for operational readiness.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
								Ready to Commission Your Systems?
							</h2>
							<p className="text-xl text-muted-foreground leading-relaxed">
								Contact our commissioning experts to ensure your systems operate at maximum efficiency
								from day one.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								asChild
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								<Link href="/#contact">
									Get Started
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								<Link href="/">Learn More</Link>
							</Button>
						</div>

						<div className="grid md:grid-cols-3 gap-8 mt-16">
							<div className="flex items-center justify-center space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
									<p className="text-muted-foreground">info@inducode.com</p>
								</div>
							</div>

							<div className="flex items-center justify-center space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
								</div>
							</div>

							<div className="flex items-center justify-center space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<MapPin className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
									<p className="text-muted-foreground">Sheridan, WY</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
