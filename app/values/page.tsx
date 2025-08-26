import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Target, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ValuesPage() {
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
							Our Core Values
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">VALUES THAT</span>
							<br />
							<span className="text-accent">DRIVE EXCELLENCE</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							The fundamental principles that guide our operations, decisions, and relationships with
							clients and colleagues.
						</p>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Target className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									LEADERSHIP
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									We are all leaders in our area of responsibility, with a deep commitment to deliver
									leadership results. We have a clear vision of where we are going. We focus our
									resources to achieve leadership objectives and strategies. We develop the capability
									to deliver our strategies and eliminate organizational barriers.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Users className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									PASSION FOR WINNING
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									We have a compelling desire to improve and to win in the marketplace, we are
									determined to be the best at doing what we do, and we have a healthy dissatisfaction
									with the status quo.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Shield className="size-20 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									TRUST
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									We respect our colleagues, customers, consumers, and treat them as we want to be
									treated. We have confidence in each other's capabilities and intentions. We believe
									that people work best when there is a foundation of trust.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Ready to Work with Us?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Experience our values in action. Contact us to discuss how we can help with your next
							project.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Link href="/">
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
								>
									Learn More
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
