'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Loader2 } from "lucide-react";

export default function Demo() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSending(false);
    setIsSent(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSent(false);
      setPhone('');
      setMessage('');
    }, 3000);
  };

  return (
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
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll send a test message to this number
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Custom Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message or let our AI generate one for you"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">
                  Leave blank to see our AI in action with a personalized message
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={isSending || isSent}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSent ? (
                    <>
                      <MessageSquare className="mr-2 h-4 w-4" />
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
                    Our AI will generate a personalized message or use your custom text
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
  );
}