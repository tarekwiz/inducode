import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
	Cable,
	Zap,
	Shield,
	Settings,
	BarChart3,
	Network
} from 'lucide-react'

export default function LowMediumVoltageDistribution() {
	const lowVoltageServices = [
		{
			title: 'LV CABLE CALCULATION',
			description: 'Quickly and easily optimize cable design, analysis, and installation based on industry standards from all over the world.',
			icon: Cable,
		},
		{
			title: 'POWER SYSTEM ANALYSIS',
			description: 'Integrated electrical design software for AC/DC systems including load flow, voltage drop, short circuit, and motor starting studies',
			icon: BarChart3,
		},
		{
			title: 'PROTECTION & COORDINATION',
			description: 'Fully integrated Protective Device Coordination software for steady-state and dynamic device coordination, protection, and testing',
			icon: Shield,
		},
		{
			title: 'ELECTRICAL SAFETY & GROUNDING',
			description: 'Comprehensive and integrated solution to help evaluate, analyze, and assess the safety and grounding of your electrical system',
			icon: Settings,
		},
	]

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
							Electrical Distribution
						</Badge>
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">LOW & MEDIUM VOLTAGE</span>
							<br />
							<span className="text-accent">DISTRIBUTION</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Model, Analyze, and Operate Low Voltage Systems. Inducode Technologies LLC offers 
							an integrated suite electrical design, analysis, and protection software for low 
							voltage installations.
						</p>
					</div>
				</div>
			</section>

			{/* Low Voltage Distribution */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Low Voltage Distribution
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
							{lowVoltageServices.map((service, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card"
								>
									<CardContent className="p-0">
										<div className="overflow-hidden bg-background border-b-2 border-border relative">
											<div className="inset-0 bg-muted/30 flex items-center justify-center p-8">
												<service.icon className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-6 space-y-4">
											<h3 className="font-bold text-center text-lg text-foreground uppercase tracking-wide">
												{service.title}
											</h3>
											<p className="text-muted-foreground text-center text-sm leading-relaxed">
												{service.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Medium Voltage Distribution */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center space-y-6">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
								Medium Voltage Distribution
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
							<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								Getting the most out of electrical energy, optimal power distribution for medium-voltage.
							</p>
						</div>

						<div className="max-w-4xl mx-auto space-y-8">
							<Card className="border-2 border-border bg-card">
								<CardContent className="p-8">
									<div className="flex items-start space-x-4">
										<Network className="h-12 w-12 text-accent flex-shrink-0 mt-2" />
										<div className="space-y-4">
											<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
												Comprehensive Portfolio
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												A comprehensive portfolio for medium-voltage power distribution enables a more 
												economical and responsible use of electrical power through the utilization of 
												smart grids. An integrated approach to medium-voltage power distribution is the 
												basis for green cities; energy-efficient infrastructure, buildings and industrial 
												applications, and high supply reliability.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Medium Voltage Applications */}
							<div className="grid md:grid-cols-3 gap-8">
								<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
									<CardContent className="p-0">
										<div className="overflow-hidden bg-muted border-b-2 border-border relative h-48">
											<div className="inset-0 bg-background/80 flex items-center justify-center">
												<Zap className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												Smart Grid Solutions
											</h3>
										</div>
									</CardContent>
								</Card>

								<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
									<CardContent className="p-0">
										<div className="overflow-hidden bg-muted border-b-2 border-border relative h-48">
											<div className="inset-0 bg-background/80 flex items-center justify-center">
												<Network className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												Distribution Systems
											</h3>
										</div>
									</CardContent>
								</Card>

								<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
									<CardContent className="p-0">
										<div className="overflow-hidden bg-muted border-b-2 border-border relative h-48">
											<div className="inset-0 bg-background/80 flex items-center justify-center">
												<Settings className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												Industrial Applications
											</h3>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Benefits */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-4xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Key Benefits
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Energy Efficiency
										</h3>
										<p className="text-muted-foreground">
											Optimal power distribution solutions for maximum energy efficiency and cost savings.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Smart Grid Integration
										</h3>
										<p className="text-muted-foreground">
											Advanced smart grid technology for intelligent power distribution and monitoring.
										</p>
									</div>
								</div>
							</div>
							
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											High Reliability
										</h3>
										<p className="text-muted-foreground">
											Robust systems designed for maximum uptime and reliable power distribution.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Sustainable Solutions
										</h3>
										<p className="text-muted-foreground">
											Environmentally responsible power distribution for green cities and infrastructure.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}