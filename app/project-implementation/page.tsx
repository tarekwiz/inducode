import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	CheckCircle,
	Users,
	Target,
	Calendar,
	DollarSign,
	Settings,
	TrendingUp,
	Shield,
	Award,
	Briefcase,
} from 'lucide-react'
import Link from 'next/link'

export default function ProjectImplementation() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
						>
							Project Management Excellence
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">PROJECT</span>
							<br />
							<span className="text-accent">IMPLEMENTATION</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Our project managers possess the technical capabilities and people skills needed to
							effectively manage projects on all levels, ensuring successful completion and stakeholder
							satisfaction.
						</p>
					</div>
				</div>
			</section>

			{/* Technical Expertise Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Technical Excellence & Leadership
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Our team combines proven field experience with exceptional people skills to deliver projects
							successfully across all organizational levels.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
									<Award className="h-6 w-6 text-accent-foreground" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-2">
										Proven Field Experience
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Our project managers have demonstrated technical capabilities in bringing
										projects to successful conclusions, enabling accurate workload assessment and
										timeline management.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
									<Users className="h-6 w-6 text-accent-foreground" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-2">
										Exceptional People Skills
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Technical knowledge combined with strong interpersonal abilities results in
										effective resource allocation and comprehensive project management throughout
										the entire process.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
									<Target className="h-6 w-6 text-accent-foreground" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-2">
										Customer-Focused Approach
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										We engage customers to fully understand project requirements and assess the
										overall impact to their business, ensuring alignment with strategic objectives.
									</p>
								</div>
							</div>
						</div>

						<Card className="border-2 border-border bg-card p-8">
							<CardHeader className="px-0 pt-0">
								<CardTitle className="text-2xl font-bold text-foreground uppercase tracking-wide">
									Project Success Foundation
								</CardTitle>
							</CardHeader>
							<CardContent className="px-0 pb-0">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-accent" />
										<span className="text-muted-foreground">Detailed Planning & Analysis</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-accent" />
										<span className="text-muted-foreground">Customer Needs Understanding</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-accent" />
										<span className="text-muted-foreground">Business Impact Assessment</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-accent" />
										<span className="text-muted-foreground">Strategic Alignment</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Project Management Services */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Comprehensive Project Management Services
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Inducode Technologies LLC delivers end-to-end project management solutions that ensure
							successful project delivery from conception to completion.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Briefcase className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Project Leadership
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Overall Project Responsibility
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Project Scope Development</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Project Team Building & Mentoring
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Calendar className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Schedule Management
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Detailed Schedule Development
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Milestone Tracking & Achievement
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Resource Loading & Adjustment
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<DollarSign className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Financial Control</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Capital Planning Requests</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Budget Tracking & Control</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Financial Reporting</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Settings className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Issue Resolution</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Proactive Problem Identification
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Rapid Issue Resolution</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Risk Mitigation Strategies
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<TrendingUp className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Progress Monitoring
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Regular Project Updates</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Stakeholder Communication</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">
											Performance Metrics Tracking
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">Quality Assurance</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Quality Control Standards</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Compliance Monitoring</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-accent"></div>
										<span className="text-sm text-muted-foreground">Deliverable Verification</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Success Methodology */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Our Success Methodology
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Successful project management starts with detailed planning and an understanding of customer
							needs.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<Card className="border-2 border-border bg-card p-8">
							<CardContent className="p-0">
								<div className="grid md:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div className="flex items-start space-x-4">
											<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
												1
											</div>
											<div>
												<h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
													Customer Engagement
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													We engage customers to fully understand their project requirements
													and assess the overall impact to their business operations.
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
												2
											</div>
											<div>
												<h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
													Detailed Planning
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Comprehensive project planning ensures all aspects are considered,
													from scope definition to resource allocation and timeline
													development.
												</p>
											</div>
										</div>
									</div>

									<div className="space-y-6">
										<div className="flex items-start space-x-4">
											<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
												3
											</div>
											<div>
												<h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
													Execution Excellence
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Our proven field experience enables accurate assessment of workload
													and time requirements for successful project completion.
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
												4
											</div>
											<div>
												<h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
													Continuous Monitoring
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Regular updates to key stakeholders and continuous performance
													monitoring ensure project objectives are met on time and within
													budget.
												</p>
											</div>
										</div>
									</div>
								</div>
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
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Let our experienced project management team guide your next engineering project to
							successful completion. Contact us today to discuss your requirements.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
								>
									Start Your Project
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link href="/">
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
								>
									Learn More About Our Services
								</Button>
							</Link>
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
