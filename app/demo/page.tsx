'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send, Loader2, CheckCircle } from "lucide-react";
import { Toaster } from 'sonner';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Demo() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch(`${API_URL}/sms/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || 'Failed to send message');
      }

      if (data.status === 'success' && data.messageSid) {
        setStatus('success');
        
        // Show success state briefly before redirecting
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        throw new Error('Invalid response from server');
      }
      
    } catch (error) {
      setStatus('idle');
      console.error('Error sending message:', error);
      
      toast.error('Failed to send message', {
        description: error instanceof Error ? error.message : 'Please try again later',
        duration: 5000,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Try Sami Now</h1>
              <p className="text-xl text-muted-foreground">
                Experience the power of AI-driven messaging firsthand
              </p>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Your Phone Number</Label>
                  <div className="flex gap-4">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="flex-1"
                      disabled={status !== 'idle'}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We'll send an AI-generated message to this number
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={status !== 'idle'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 animate-bounce" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Test Message
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">What You'll Experience</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      1
                    </div>
                    <p className="text-muted-foreground">
                      Enter your phone number to receive a test message
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      2
                    </div>
                    <p className="text-muted-foreground">
                      Our AI will generate a personalized message just for you
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      3
                    </div>
                    <p className="text-muted-foreground">
                      Receive an instant message showcasing our platform's capabilities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Toaster position="top-center" expand={true} richColors />
    </>
  );
}