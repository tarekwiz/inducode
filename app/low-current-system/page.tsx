import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
	Shield,
	Volume2,
	Network,
	Settings,
	Camera,
	Building
} from 'lucide-react'

export default function LowCurrentSystem() {
	const lowCurrentSystems = [
		{
			title: 'AUTOMATION',
			icon: Settings,
		},
		{
			title: 'AUDIO & VISUAL SYSTEM',
			icon: Volume2,
		},
		{
			title: 'IT & TELECOM',
			icon: Network,
		},
		{
			title: 'PLC',
			icon: Settings,
		},
		{
			title: 'SECURITY SYSTEM',
			icon: Shield,
		},
		{
			title: 'BMS',
			icon: Building,
		},
	]

	const services = [
		{
			title: 'Fire Alarms',
			description: 'Industrial and commercial fire alarm systems with 24/7 monitoring',
			icon: Shield,
		},
		{
			title: 'Security Alarms',
			description: 'Complete intrusion detection and security alarm systems',
			icon: Camera,
		},
		{
			title: 'CCTV & Surveillance',
			description: 'Professional video surveillance solutions for comprehensive security',
			icon: Camera,
		},
		{
			title: 'Access Control',
			description: 'Advanced access control systems for secure facility management',
			icon: Shield,
		},
		{
			title: 'Data Cabling',
			description: 'Fiber optic, phone and data cabling infrastructure solutions',
			icon: Network,
		},
		{
			title: '24/7 Monitoring',
			description: 'Round-the-clock alarm monitoring and emergency response services',
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
							Low Current Technology
						</Badge>
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">LOW CURRENT</span>
							<br />
							<span className="text-accent">SYSTEM</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							We are a complete low current contractor that provides 24/7 alarm monitoring, 
							installation and service of each alarm system we install. With over 15 years 
							in the security industry we can provide you with professional quality, sales, 
							and service.
						</p>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-4xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Professional Low Current Solutions
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>
						
						<div className="text-muted-foreground leading-relaxed space-y-6">
							<p>
								We specialized in monthly monitoring service and alarm installation of low 
								voltage equipment used to secure commercial and residential applications. We 
								provide industrial and commercial fire alarms, security alarms, intrusion 
								detection, CCTV & video surveillance, access control, fiber optic, phone 
								and data cabling, all at very competitive prices.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Low Current Systems Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Low Current Systems & Technologies
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{lowCurrentSystems.map((system, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0"
								>
									<CardContent className="p-0">
										<div className="overflow-hidden bg-muted border-b-2 border-border relative">
											<div className="inset-0 bg-background/80 flex items-center justify-center p-8">
												<system.icon className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												{system.title}
											</h3>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Our Services
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service, index) => (
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

			{/* Key Features */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-4xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Why Choose Our Low Current Solutions
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											15+ Years Experience
										</h3>
										<p className="text-muted-foreground">
											Over 15 years of expertise in the security industry with proven track record.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											24/7 Monitoring
										</h3>
										<p className="text-muted-foreground">
											Round-the-clock alarm monitoring and emergency response services.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Professional Installation
										</h3>
										<p className="text-muted-foreground">
											Expert installation and service for every alarm system we provide.
										</p>
									</div>
								</div>
							</div>
							
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Competitive Pricing
										</h3>
										<p className="text-muted-foreground">
											All services provided at very competitive prices without compromising quality.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Complete Solutions
										</h3>
										<p className="text-muted-foreground">
											Comprehensive low current contractor covering all aspects from installation to monitoring.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Commercial & Residential
										</h3>
										<p className="text-muted-foreground">
											Serving both commercial and residential applications with tailored solutions.
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