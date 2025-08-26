import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="border-b-2 border-border bg-card sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex items-center justify-between">
					<Link href="/" className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
							<span className="text-accent-foreground font-bold text-lg">I</span>
						</div>
						<div>
							<h1 className="font-bold text-2xl text-foreground tracking-wider">INDUCODE</h1>
							<p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
								TECHNOLOGIES
							</p>
						</div>
					</Link>

					<div className="hidden md:flex items-center space-x-6">
						<div className="relative group">
							<button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
								Technologies & Solutions
								<ChevronDown className="ml-1 h-3 w-3" />
							</button>
							<div className="absolute top-full left-0 min-w-80 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<div className="relative group/nested">
									<button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm flex items-center justify-between">
										Energy Technologies & Solutions
										<ChevronDown className="h-3 w-3 rotate-[-90deg]" />
									</button>
									<div className="absolute top-0 left-full min-w-80 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 ">
										<Link
											href="/combined-heat-power"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Combined Heat & Power (CHP)
										</Link>
										<Link
											href="/tri-generation"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Tri-Generation
										</Link>
										<Link
											href="/district-heating-cooling"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											District Heating & Cooling
										</Link>
										<Link
											href="/waste-heat-to-power"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Waste Heat to Power
										</Link>
										<Link
											href="/energy-transfer-stations"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Energy Transfer Stations
										</Link>
										<Link
											href="/conventional-power-generation"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Conventional Power Generation
										</Link>
										<Link
											href="/solar"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Solar
										</Link>
										<Link
											href="/wind-powered-generation"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Wind Powered Generation (WPG)
										</Link>
										<Link
											href="/fire-fighting-systems"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Fire Fighting Systems
										</Link>
										<Link
											href="/lpg-gas-safety-system"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											LPG & GAS Safety System
										</Link>
										<Link
											href="/thermo-and-heating-systems"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Thermo and Heating Systems
										</Link>
										<Link
											href="/comfort-hvac-technologies"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Comfort & HVAC Technologies
										</Link>
										<Link
											href="/low-medium-voltage-distribution"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Low & Medium Voltage Distribution
										</Link>
										<Link
											href="/low-current-system"
											className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
										>
											Low Current System
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="relative group">
							<button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
								Services
								<ChevronDown className="ml-1 h-3 w-3" />
							</button>
							<div className="absolute top-full left-0 w-64 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<Link
									href="/feasibility-studies"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Feasibility Studies
								</Link>
								<Link
									href="/proposal-and-design"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Proposal And Design
								</Link>
								<Link
									href="/project-implementation"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Project Implementation
								</Link>
								<Link
									href="/commissioning-solutions"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Commissioning Solutions
								</Link>
								<Link
									href="/operation-and-maintenance"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Operation and Maintenance
								</Link>
								<Link
									href="/project-finance"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Project Finance
								</Link>
							</div>
						</div>

						<div className="relative group">
							<button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
								About Us
								<ChevronDown className="ml-1 h-3 w-3" />
							</button>
							<div className="absolute top-full left-0 w-64 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<Link
									href="/why-us"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Why Us
								</Link>
								<Link
									href="/vision-and-mission"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Vision and Mission
								</Link>
								<Link
									href="/culture-and-strategy"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Culture and Strategy
								</Link>
								<Link
									href="/values"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Values
								</Link>
								<Link
									href="/operating-principles"
									className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
								>
									Operating Principles
								</Link>
							</div>
						</div>
					</div>

					<Link href="/contact">
						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
							Get Started
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</nav>
			</div>
		</header>
	)
}
