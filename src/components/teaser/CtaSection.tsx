
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const CtaSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      setIsSubmitting(true);
      
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log('Email submitted (Mock):', data.email);
      setSubmitted(true);
      form.reset();
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
        variant: "default",
      });
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-cardano-blue py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Stay Tuned
        </h2>
        
        <p className="text-xl text-white/90 mb-8">
          Be the first to know when ADAspending launches. Subscribe to our newsletter for updates on the platform release.
        </p>
        
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                  {...form.register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="bg-white text-cardano-blue hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
              </div>
              {form.formState.errors.email && (
                <p className="text-red-300 text-sm">Please enter a valid email address</p>
              )}
            </form>
          ) : (
            <div className="bg-white/10 p-4 rounded-md">
              <p className="text-white">Thank you for subscribing! We'll notify you when ADAspending launches.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
