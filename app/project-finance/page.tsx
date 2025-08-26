import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, DollarSign, FileText, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProjectFinance() {
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
							Financial Solutions
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">PROJECT</span>
							<br />
							<span className="text-accent">FINANCE</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Flexible finance solutions to deliver energy savings for your business through ESCo and BOO
							models.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-12">
						{/* Overview */}
						<Card className="border-2 border-border bg-card">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-foreground uppercase tracking-wide flex items-center">
									<DollarSign className="mr-3 h-8 w-8 text-accent" />
									Flexible Finance Solutions
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<p className="text-lg text-muted-foreground leading-relaxed">
									Inducode Technologies LLC can offer you a number of flexible finance solutions to
									deliver energy saving for your business. Having first identified and verified that
									an on-site energy generation solution is a viable option we work with our customers
									to understand their requirements and then offer a tailored financial solution
									whereby we take on the financing of the project.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Projects delivered in this way are often referred to as ESCo (Energy Supply Company)
									or BOO (Build Own Operate) models. We can guarantee seamless migrations from your
									existing energy arrangements to high efficiency on-site solution.
								</p>
							</CardContent>
						</Card>

						{/* Implementation Model */}
						<Card className="border-2 border-border bg-card">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-foreground uppercase tracking-wide flex items-center">
									<FileText className="mr-3 h-8 w-8 text-accent" />
									Implementation Model
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									<p className="text-lg text-muted-foreground leading-relaxed mb-6">
										We implement this model by the following:
									</p>

									<div className="grid gap-6">
										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
													Energy Supply Company (ESCo)
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Inducode Technologies LLC acts as an Energy Supply Company (ESCo)
													your energy supplier.
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
													Power Purchase Agreement
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Customer enters into Power Purchase Agreement (PPA) with Inducode
													Technologies LLC with agreed rates for energy.
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-6 h-6 bg-accent border-2 border-accent flex items-center justify-center mt-1">
												<CheckCircle className="h-4 w-4 text-accent-foreground" />
											</div>
											<div>
												<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
													Single Monthly Bill
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													Customer receives single monthly bill at no additional cost.
												</p>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Comprehensive Service */}
						<Card className="border-2 border-border bg-card">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-foreground uppercase tracking-wide flex items-center">
									<Users className="mr-3 h-8 w-8 text-accent" />
									Comprehensive Service
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-lg text-muted-foreground leading-relaxed mb-6">
									Inducode Technologies LLC designs, builds, operates, maintains and finances an
									on-site energy solution, which delivers the primary energies needs of your business
									(electricity, hot water/steam and cooling). Inducode Technologies LLC can provide
									the turnkey energy centre and take over the full procurement of all energy
									requirements.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Please feel free to contact us to discuss further finance and payment options.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-2xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Discuss Your Project Finance?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Contact our team to explore flexible financing options for your energy solution project.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
						>
							<Link href="/#contact">
								Get Started Today
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
