'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Zap, Target, BarChart3, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
            Supercharge Your Sales with AI-Powered SMS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Transform your sales process with intelligent messaging that converts leads into customers
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => router.push('/onboarding')}>
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => router.push('/demo')}>
              Book Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Conversations</h3>
            <p className="text-muted-foreground">
              AI-powered messaging that understands context and drives engagement
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
            <p className="text-muted-foreground">
              Never miss a lead with automated, intelligent responses 24/7
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Targeted Campaigns</h3>
            <p className="text-muted-foreground">
              Reach the right prospects with personalized messaging campaigns
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-lg opacity-90">Increase in Response Rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-lg opacity-90">Reduced Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2x</div>
              <div className="text-lg opacity-90">Lead Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Maximize Your Sales ROI
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Real-time conversion tracking</li>
                <li>• Advanced analytics dashboard</li>
                <li>• Campaign performance insights</li>
                <li>• ROI measurement tools</li>
              </ul>
            </Card>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Increased Efficiency</h4>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and focus on high-value activities
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Higher Conversion Rates</h4>
                <p className="text-muted-foreground">
                  Convert more leads with personalized, timely engagement
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Scalable Growth</h4>
                <p className="text-muted-foreground">
                  Handle more leads without increasing headcount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-600/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading sales teams who have revolutionized their outreach with AI-SMS-Agent
          </p>
          <Button size="lg" className="text-lg" onClick={() => router.push('/onboarding')}>
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}