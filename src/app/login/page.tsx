"use client";

import SignupModal from "@/app/login/signup-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form, FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { login } from "@/lib/auth";
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export default function LoginPage() {
  const router = useRouter();
  const [ showSignupDialog, setShowSignupDialog ] = useState(false);
  const [ message, setMessage ] = useState('Sign up to get started');

  type loginFormType = z.infer<typeof loginSchema>;

  const form = useForm<loginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const { toast } = useToast();


  const { mutate: loginUser, isPending, error } = useMutation({
    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      try {
        return login(data.email, data.password);
      } catch (error: any) {
        // axios error handling
        if (error.response) {
          throw new Error(error.response.data.message);
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      toast({
        title: 'Success!',
        description: 'Logged in successfully',
        variant: 'default'
      });
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    },
    onError: (error: any) => {
      if (error.needsSignup) {
        // Handle signup prompt
        toast({
          title: 'Signup required',
          description: 'Seems like you don\'t have an account yet',
          variant: 'destructive'
        });
        setTimeout(() => {
          setShowSignupDialog(true);
          setMessage('Seems like you don\'t have an account yet');
        }, 1000);
      }
      if (error.response.status === 401) {
        toast({
          title: 'Login failed',
          description: 'Invalid email or password',
          variant: 'destructive'
        });
      }
    }
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    loginUser(values);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex">
      <div className="relative h-screen lg:rounded-r-lg w-full md:w-6/12 z-0">
        <Image
          alt="Lawyer"
          fill
          className="object-cover rounded-r-[40px]"
          src="/Lawyer.jpg"
        />
      </div>

      <div className="flex items-center absolute  max-md:mx-auto max-md:absolute max-md:inset-0 md:relative lg:-ml-24 md:flex-1 z-50">
        <Card className="w-full max-w-md p-8 space-y-6 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>
          
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(handleLogin) } className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={ form.control }
                  name="email"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Email"
                            className="pl-10"
                            { ...field }
                            required
                          />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) } />
              </div>
              <div className="space-y-2">
                <FormField name="password" control={ form.control } render={ ({ field }) => (
                  <FormItem><FormControl>
                    <div className="relative">
                      <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-10"
                        { ...field }
                        required
                      />
                    </div>
                  </FormControl></FormItem>
                ) } />
              </div>
              <Button type="submit" className="w-full" >
                Sign In
              </Button>
            </form>
          </Form>
          <span className="text-gray-600">Don&apos;t have an account?</span>{ " " }
          <Button
            variant="link"
            className="p-0 h-auto"
            onClick={ () => {
              setShowSignupDialog(true);
            } }
          >
            Sign Up
          </Button>
          <SignupModal isOpen={ showSignupDialog } onOpenChange={ setShowSignupDialog } message={ message } />

        </Card>
      </div>
    </div>
  );
}