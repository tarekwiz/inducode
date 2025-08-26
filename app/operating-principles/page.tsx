import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Leaf,
  Lightbulb,
  Shield,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function OperatingPrinciples() {
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
              Our Foundation
            </Badge>
            <h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">OPERATING</span>
              <br />
              <span className="text-accent">PRINCIPLES</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The core principles that guide our operations and define our
              commitment to excellence in sustainable energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Principles Section */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-xl">
                  SUSTAINABILITY
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Wisely Use of Natural Resources and Maximizing Renewable
                  Energy utilization
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary border-2 border-secondary flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-secondary uppercase tracking-wide text-xl">
                  INNOVATION
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Continuous Training, Research & development
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-chart-3 border-2 border-chart-3 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-chart-3 uppercase tracking-wide text-xl">
                  INTEGRITY
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  High business ethics in every aspect
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
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the difference our operating principles make in
              delivering exceptional energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
              >
                <Link href="/#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
              >
                <Link href="/why-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">
                    I
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    TECHNOLOGIES
                  </p>
                </div>
              </Link>
              <p className="text-sm opacity-80 leading-relaxed">
                Sustainable energy solutions guided by principles of
                sustainability, innovation, and integrity.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-wide">About Us</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link
                    href="/why-us"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vision-and-mission"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Vision and Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/values"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/operating-principles"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Operating Principles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-wide">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link
                    href="/feasibility-studies"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Feasibility Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proposal-and-design"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Proposal And Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-implementation"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Project Implementation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commissioning-solutions"
                    className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    Commissioning Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-wide">Contact Us</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@inducode.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sheridan, WY 82801, USA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wide">
                Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
