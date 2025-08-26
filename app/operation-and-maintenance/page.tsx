import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Settings, Users, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function OperationAndMaintenance() {
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
							Operation & Maintenance
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">EXPERT</span>
							<br />
							<span className="text-accent">OPERATION & MAINTENANCE</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Extensive worldwide experience in delivering and operating effective energy solutions with
							dedicated expertise since 2004.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									PROVEN EXPERTISE
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Inducode Technologies LLC has extensive experience worldwide in the delivery and
									operation of effective energy solutions. Having owned and operated our own
									Trigeneration plant since 2004, we have built up expertise in the most effective
									operation and maintenance program.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									This experience and expertise is shared with our customers to ensure your on-site
									solution is delivering the best value. Our dedicated operations team work with the
									latest software and management tools ensuring your objectives are delivered on time
									and in budget.
								</p>
							</div>
						</div>

						<Card className="border-2 border-border bg-card p-8">
							<CardHeader className="px-0 pt-0">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mb-4">
									<Settings className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-2xl uppercase tracking-wide">Our Approach</CardTitle>
							</CardHeader>
							<CardContent className="px-0 pb-0 space-y-6">
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide">
												Latest Technology
											</h3>
											<p className="text-muted-foreground">
												Advanced software and management tools for optimal performance
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide">
												Dedicated Team
											</h3>
											<p className="text-muted-foreground">
												Experienced operations specialists focused on your success
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
										<div>
											<h3 className="font-bold text-foreground uppercase tracking-wide">
												On-Time Delivery
											</h3>
											<p className="text-muted-foreground">
												Objectives delivered on schedule and within budget
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Optimize Your Operations?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Let our experienced team help you maximize the value of your energy solutions with proven
							operation and maintenance strategies.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
								>
									Get Started
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
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
		</div>
	)
}
