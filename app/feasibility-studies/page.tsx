import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, CheckCircle, BarChart3, Calculator, FileText, TrendingUp } from 'lucide-react'

export default function FeasibilityStudies() {
	return (
		<div className="min-h-screen bg-background">
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
								Professional Services
							</Badge>
							<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
								<span className="text-foreground">FEASIBILITY</span>
								<br />
								<span className="text-accent">STUDIES</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								Comprehensive energy feasibility studies that provide accurate real-life analysis
								covering all aspects of your energy requirements and business case development.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Left Column */}
						<div className="space-y-8">
							<Card className="border-2 border-border bg-card p-8">
								<CardContent className="p-0 space-y-6">
									<div className="flex items-center space-x-4 mb-6">
										<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
											<FileText className="h-6 w-6 text-accent-foreground" />
										</div>
										<h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">
											Our Expertise
										</h2>
									</div>

									<p className="text-muted-foreground leading-relaxed">
										Inducode Technologies LLC experts are involved in the design, build, operation
										and maintenance of Turn Key solutions. Inducode Technologies LLC provide
										accurate real life feasibility studies which cover all aspects of your energy
										requirements. Our Energy Feasibility Studies are an important business case
										analysis tool which we use in preparation for helping you make effective
										business decisions on your energy needs.
									</p>

									<p className="text-muted-foreground leading-relaxed">
										A feasibility study can determine which combination of renewable energy
										technologies most effectively meet your energy requirements and goals. When
										integrating renewable energy into a new construction project or major
										renovation, this level of renewable energy assessment will typically be
										commissioned by our design team.
									</p>

									<p className="text-muted-foreground leading-relaxed">
										Screenings look at the viability of each type of renewable energy, a feasibility
										study gets into details used to choose technologies and options within a
										technology type, such as the scale of wind turbine or the type of solar thermal
										systems to best reach project goals.
									</p>
								</CardContent>
							</Card>
						</div>

						{/* Right Column */}
						<div className="space-y-8">
							<Card className="border-2 border-border bg-card p-8">
								<CardContent className="p-0 space-y-6">
									<div className="flex items-center space-x-4 mb-6">
										<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
											<BarChart3 className="h-6 w-6 text-accent-foreground" />
										</div>
										<h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">
											Study Components
										</h2>
									</div>

									<p className="text-muted-foreground leading-relaxed mb-6">
										The feasibility study takes a deeper look into the remaining technologies to:
									</p>

									<div className="space-y-4">
										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1 flex-shrink-0">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<p className="text-muted-foreground leading-relaxed">
												Quantify energy variations, and the value of that energy.
											</p>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1 flex-shrink-0">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<p className="text-muted-foreground leading-relaxed">
												Review details of utility interconnection, tariffs, and revenue.
											</p>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1 flex-shrink-0">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<p className="text-muted-foreground leading-relaxed">
												Analyse access to financial incentives as well as project funding
												models.
											</p>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1 flex-shrink-0">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<p className="text-muted-foreground leading-relaxed">
												Assess economic feasibility with a detailed and credible life-cycle cost
												analysis.
											</p>
										</div>
									</div>

									<div className="border-t-2 border-border pt-6 mt-8">
										<p className="text-muted-foreground leading-relaxed">
											Renewable energy feasibility studies provide technology and financing
											options. We at Inducode Technologies LLC carry out comprehensive feasibility
											studies for all our clients as part of our overall solution.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Study Process
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Our systematic approach ensures comprehensive analysis and actionable recommendations
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardContent className="p-8 text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<FileText className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="font-bold text-lg text-foreground uppercase tracking-wide">
									Initial Assessment
								</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Comprehensive evaluation of current energy systems and requirements
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardContent className="p-8 text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<Calculator className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="font-bold text-lg text-foreground uppercase tracking-wide">
									Technical Analysis
								</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Detailed engineering calculations and technology comparisons
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardContent className="p-8 text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<TrendingUp className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="font-bold text-lg text-foreground uppercase tracking-wide">
									Economic Modeling
								</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Life-cycle cost analysis and financial projections
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
							<CardContent className="p-8 text-center space-y-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto">
									<BarChart3 className="h-8 w-8 text-accent-foreground" />
								</div>
								<h3 className="font-bold text-lg text-foreground uppercase tracking-wide">
									Final Report
								</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Comprehensive recommendations and implementation roadmap
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-16">
						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide px-8 py-4">
							Request Feasibility Study
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Contact our team of experts to discuss your feasibility study requirements and learn how we
							can help optimize your energy systems.
						</p>

						<div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
									<p className="text-muted-foreground">info@inducode.com</p>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
								<div className="text-left">
									<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
