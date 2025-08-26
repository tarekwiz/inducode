import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Settings, Thermometer, Gauge, Zap } from "lucide-react"
import Link from "next/link"

export default function EnergyTransferStations() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
            >
              Energy Transfer Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">ENERGY TRANSFER</span>
              <br />
              <span className="text-accent">STATIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Advanced energy transfer stations that enhance district cooling plant performance and protect chiller
              loops through intelligent control systems and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                  Enhanced Performance & Protection
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ETS will enhance the performance of DCP and will protect the chillers loop by providing two different
                  circuits. Design a proper control for ETS will enhance the system efficiency and transfer the required
                  energy.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground uppercase tracking-wide mb-2">Flow Control Systems</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      By installing a flow control valve (temperature controlled), the flow through ETS can be
                      controlled based on the return line temperature going to the plant or the return temperature at
                      the secondary side coming from the served building.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
                    <Gauge className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground uppercase tracking-wide mb-2">Pressure Monitoring</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Installing differential pressure transmitter across the chilled water supply and return line of
                      ETS will help to control the flow of secondary pumps installed in the district cooling plant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground uppercase tracking-wide mb-2">System Synchronization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In case of having many ETS rooms for one centralized DCP, the secondary pumps will be controlled
                      based on the lowest ETS DP. Such synchronization between ETS's and DCP will guarantee the heat
                      transfer efficiency and DCP performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-border bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-center text-accent uppercase tracking-wide">
                    Complete PLC Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Many service providers request to measure the heat transfer value for different purposes. Inducode
                    Technologies LLC can provide a full PLC solution with BTU meter and flow measuring devices to
                    calculate and report the actual heat transfer to main DCP.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent mr-3"></div>
                      <span className="text-muted-foreground">BTU Measurement</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent mr-3"></div>
                      <span className="text-muted-foreground">Flow Monitoring</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent mr-3"></div>
                      <span className="text-muted-foreground">Real-time Reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Ready to Optimize Your Energy Transfer Systems?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact our experts to learn how Energy Transfer Stations can enhance your district cooling performance
              and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                Get Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
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
