'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Building2, User2, MessageSquare } from "lucide-react";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                    ${step >= number ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {step > number ? <Check className="h-5 w-5" /> : number}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {number === 1 ? 'Account' : number === 2 ? 'Business' : 'Integration'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-1 bg-muted">
              <div 
                className="h-1 bg-primary transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <Card className="p-6">
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User2 className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Create Your Account</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Business Information</h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Size</Label>
                    <RadioGroup defaultValue="10-50" className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-10" id="1-10" />
                        <Label htmlFor="1-10">1-10 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10-50" id="10-50" />
                        <Label htmlFor="10-50">10-50 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50-200" id="50-200" />
                        <Label htmlFor="50-200">50-200 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="200+" id="200+" />
                        <Label htmlFor="200+">200+ employees</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="Technology" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">SMS Integration</h2>
                </div>
                <Tabs defaultValue="new" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="new">New Number</TabsTrigger>
                    <TabsTrigger value="existing">Existing Number</TabsTrigger>
                  </TabsList>
                  <TabsContent value="new" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Area Code</Label>
                      <Input placeholder="Enter area code" />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly SMS Volume</Label>
                      <RadioGroup defaultValue="1000" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1000" id="1000" />
                          <Label htmlFor="1000">Up to 1,000 messages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5000" id="5000" />
                          <Label htmlFor="5000">Up to 5,000 messages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10000" id="10000" />
                          <Label htmlFor="10000">Up to 10,000 messages</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                  <TabsContent value="existing" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Your Phone Number</Label>
                      <Input placeholder="Enter your business phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Verification Code</Label>
                      <Input placeholder="Enter verification code" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
              )}
              <div className="ml-auto">
                {step < 3 ? (
                  <Button onClick={nextStep}>Continue</Button>
                ) : (
                  <Button>Complete Setup</Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}