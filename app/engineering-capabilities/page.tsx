import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, Wrench, Building, Zap, Gauge, Cog } from 'lucide-react'

export default function EngineeringCapabilities() {
	const processCapabilities = [
		"Preparing PFD's and P&ID's",
		'P&ID drafting using SPPID',
		"Updating/revision of P&ID's in compliance with detail engineering execution",
		'Process calculation using Aspen HYSYS',
		'Handling of process data Using Special Data Base',
		'Presentation of PFD, equipment list, equipment duty specifications',
		'Pre-commissioning assistance',
		'Commissioning assistance',
	]

	const equipmentCapabilities = [
		'Static Equipment specifications based on process data',
		'Vendor documents review for the static equipment',
		'Storage Tanks detail engineering',
		'Pumps specifications',
		'Pressure vessel detail engineering',
		'Stack detail engineering',
		'Material selection',
		'BOQ',
	]

	const civilCapabilities = [
		'Field survey',
		'Basic and detail engineering',
		'Static analysis and design',
		'Piling design and layout',
		'Concrete structures and foundations layout, formwork and reinforcement drawings including bar bending schedule (foundations for vibrating equipment, static equipment, etc.)',
		'Steel structures layout and arrangement, connection design, fabrication and erection drawings',
		'Architectural finishing drawings',
		'Room data sheet',
		'BOQ',
	]

	const layoutCapabilities = [
		'Plot Plan',
		'Equipment arrangement',
		'Steel & concrete information drawings',
		'Erection engineering work',
	]

	const pipingCapabilities = [
		'Piping list',
		'Piping material specifications',
		'PDMS Catalogue and Piping isometrics',
		"Under ground P&ID's",
		'Under ground network piping design',
		'Piping studies',
		'Material take off ,requisitions & bid technical evaluation',
		'Above Ground piping design',
		'Specification of Piping & special piping components',
		'Piping stress, flexibility analysis and pipe support (spring hanger, etc ...)',
		'Nozzle orientation',
		'Steam tracing network',
		'Test systems',
		'Erection BOQ',
	]

	const plateWorksCapabilities = [
		'Storage tanks',
		'Pressure vessels',
		'Heat exchangers',
		'Fired boilers',
		'Water tube boilers',
		'Cement Industry Equipment',
		'Detergent & Beauty Care',
		'Edible Oil Process Equipment',
	]

	const instrumentationCapabilities = [
		'Basic as well detail engineering (function and logic diagrams)',
		'Specifications of DCS / ESD / PLC',
		'Calculation and specifications of field instruments (transmitters, orifice, gauges, etc.)',
		"Calculation and specifications of final control elements (control valves, actuators , MOV's, etc.)",
		'Installation engineering (hookups, bulk material, etc.)',
		'Detail engineering of analyzer',
		'Instrument wiring engineering (instrument loop diagram, cable termination, etc.)',
		'MTO and BOQ',
	]

	const electricalCapabilities = [
		'Basic as well as detail engineering',
		'Load calculations and studies',
		'Single line diagram',
		'Lighting design',
		'Power and light current systems design',
		'Earthing & lightning protection',
		'Technical specifications for electrical equipment and bulk material',
		'Cable tray planning into PDMS model',
		'MTO & BOQ',
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
							Engineering Excellence
						</Badge>
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">ENGINEERING</span>
							<br />
							<span className="text-accent">CAPABILITIES</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Comprehensive engineering solutions across multiple disciplines, delivering innovative and
							efficient designs for complex industrial projects.
						</p>
					</div>
				</div>
			</section>

			{/* Process Engineering */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						<div className="flex items-center space-x-4">
							<Settings className="h-12 w-12 text-accent" />
							<div>
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									Process Engineering
								</h2>
								<div className="w-24 h-1 bg-accent mt-2"></div>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-start">
							<div className="space-y-3">
								{processCapabilities.map((capability, index) => (
									<div key={index} className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-muted-foreground">{capability}</span>
									</div>
								))}
							</div>

							<Card className="border-2 border-border bg-card p-0">
								<CardContent className="p-6">
									<h3 className="font-bold text-foreground uppercase tracking-wide mb-4">IT Tools</h3>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline" className="border-accent text-accent">
											Aspen HYSYS
										</Badge>
										<Badge variant="outline" className="border-accent text-accent">
											SPPID
										</Badge>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Equipment Engineering */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						<div className="flex items-center space-x-4">
							<Cog className="h-12 w-12 text-accent" />
							<div>
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									Equipment Engineering
								</h2>
								<div className="w-24 h-1 bg-accent mt-2"></div>
							</div>
						</div>

						<div className="space-y-3">
							{equipmentCapabilities.map((capability, index) => (
								<div key={index} className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<span className="text-muted-foreground">{capability}</span>
								</div>
							))}
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<Card className="border-2 border-border bg-card">
								<CardContent className="p-4">
									<h3 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
										IT Tools
									</h3>
									<Badge variant="outline" className="border-accent text-accent">
										Tank - Coade
									</Badge>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card">
								<CardContent className="p-4">
									<h3 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
										Codes & Standards
									</h3>
									<div className="space-x-2">
										{['ASME', 'AD', 'BS', 'API', 'AWWA', 'TEMA', 'TRD'].map(e => (
											<Badge key={e} variant="outline" className="border-accent text-accent">
												{e}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Civil & Steel Structure Engineering */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						<div className="flex items-center space-x-4">
							<Building className="h-12 w-12 text-accent" />
							<div>
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									Civil & Steel Structure Engineering
								</h2>
								<div className="w-24 h-1 bg-accent mt-2"></div>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-3">
								{civilCapabilities.map((capability, index) => (
									<div key={index} className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-muted-foreground">{capability}</span>
									</div>
								))}
							</div>

							<div className="space-y-4">
								<Card className="border-2 border-border bg-card p-0">
									<CardContent className="p-4">
										<h3 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											IT Tools
										</h3>

										<div className="space-x-2">
											{['SAP2000', 'AutoCAD', 'PDMS'].map(e => (
												<Badge key={e} variant="outline" className="border-accent text-accent">
													{e}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>

								<Card className="border-2 border-border bg-card p-0">
									<CardContent className="p-4">
										<h3 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											Codes & Standards
										</h3>
										<div className="space-x-2">
											{['Euro Code', 'AISC', 'BS5940', 'AWS', 'ASCE7-05'].map(e => (
												<Badge key={e} variant="outline" className="border-accent text-accent">
													{e}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Layout & Piping Engineering */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Layout & Piping Engineering
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid lg:grid-cols-2 gap-12">
							{/* Layout Section */}
							<Card className="border-2 border-border bg-card">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">
										Layout
									</h3>
									<div className="space-y-3">
										{layoutCapabilities.map((capability, index) => (
											<div key={index} className="flex items-start space-x-3">
												<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-muted-foreground">{capability}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							{/* Piping Section */}
							<Card className="border-2 border-border bg-card">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">
										Piping
									</h3>
									<div className="space-y-3 max-h-96 overflow-y-auto">
										{pipingCapabilities.map((capability, index) => (
											<div key={index} className="flex items-start space-x-3">
												<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-muted-foreground">{capability}</span>
											</div>
										))}
									</div>

									<div className="grid md:grid-cols-2 gap-4 mt-6">
										<div>
											<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
												IT Tools
											</h4>
											<span className="text-muted-foreground text-sm">
												PDMS, AutoCAD, CAESAR II
											</span>
										</div>

										<div>
											<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
												Codes & Standards
											</h4>
											<span className="text-muted-foreground text-sm">ASME, DIN, EN</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Plate Works Engineering */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Plate Works Engineering, Fabrication & Erection
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="max-w-4xl mx-auto">
							<Card className="border-2 border-border bg-card">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">
										Experience in design of mechanical static equipment
									</h3>

									<div className="grid md:grid-cols-2 gap-6">
										<div className="space-y-3">
											{plateWorksCapabilities.map((capability, index) => (
												<div key={index} className="flex items-start space-x-3">
													<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
													<span className="text-muted-foreground">{capability}</span>
												</div>
											))}
										</div>

										<div className="space-y-4">
											<div>
												<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
													IT Tools
												</h4>
												<p className="text-muted-foreground text-sm">
													Stress analysis using ANSYS multi-physics, Cosmos, PV elite,
													Compress, ETank2000, CodeCa, Autocad, Solidworks, Pro-Engineer,
													Catia, Inventor
												</p>
											</div>

											<div>
												<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
													Codes & Standards
												</h4>
												<p className="text-muted-foreground text-sm">
													ASME Sec.VIII and Sec.I, API650, API620, AD MarkBlatter, BS 5500,
													AWWA D-100, UL142, ASME Steel Stack STS-2001, TRD
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Instrumentation & Electrical Engineering */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Instrumentation Engineering */}
						<Card className="border-2 border-border bg-card">
							<CardContent className="p-8">
								<div className="flex items-center space-x-4 mb-6">
									<Gauge className="h-10 w-10 text-accent" />
									<div>
										<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
											Instrumentation Engineering
										</h3>
										<div className="w-20 h-1 bg-accent mt-1"></div>
									</div>
								</div>

								<div className="space-y-3 mb-6">
									{instrumentationCapabilities.map((capability, index) => (
										<div key={index} className="flex items-start space-x-3">
											<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
											<span className="text-muted-foreground text-sm">{capability}</span>
										</div>
									))}
								</div>

								<div className="grid grid-cols-1 gap-4">
									<div>
										<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											IT Tools
										</h4>
										<span className="text-muted-foreground text-sm">E Plan, AutoCAD</span>
									</div>

									<div>
										<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											Codes & Standards
										</h4>
										<span className="text-muted-foreground text-sm">EN, DIN, IEC, ISA</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Electrical Engineering */}
						<Card className="border-2 border-border bg-card">
							<CardContent className="p-8">
								<div className="flex items-center space-x-4 mb-6">
									<Zap className="h-10 w-10 text-accent" />
									<div>
										<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
											Electrical Engineering
										</h3>
										<div className="w-20 h-1 bg-accent mt-1"></div>
									</div>
								</div>

								<div className="space-y-3 mb-6">
									{electricalCapabilities.map((capability, index) => (
										<div key={index} className="flex items-start space-x-3">
											<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
											<span className="text-muted-foreground text-sm">{capability}</span>
										</div>
									))}
								</div>

								<div className="grid grid-cols-1 gap-4">
									<div>
										<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											IT Tools
										</h4>
										<span className="text-muted-foreground text-sm">
											E Plan, AutoCAD, PDMS, Special programs (packages) in electrical design
											field
										</span>
									</div>

									<div>
										<h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-2">
											Codes & Standards
										</h4>
										<span className="text-muted-foreground text-sm">IEC, NEC, DIN, VDE, BS</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	)
}
