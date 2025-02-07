"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { z } from "zod";
import axios from "axios";
import { signup } from "@/lib/auth";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters"),
});

interface SignupDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  message?: string;
}

export default function SignupModal({ isOpen, onOpenChange, message }: SignupDialogProps) {
  const router = useRouter();

  type SignupInput = z.infer<typeof signupSchema>;
  const { toast } = useToast();

  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: SignupUser, isPending, error } = useMutation({
    mutationFn: async (data: SignupInput) => {
      try {
        return signup(data.email, data.password);  // axios automatically parses JSON
      } catch (error: any) {
        // axios error handling
        if (error.response) {
          throw new Error(error.response.data.message);
        }
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: 'Account created successfully!',
        description: `You're now logged in`,
        variant: 'default'
      });
      setTimeout(() => {
      router.push("/dashboard");
      }, 1000);
    },
    onError: (error) => {
      toast({
        title: 'Signup failed',
        description: error.message,
        variant: 'destructive'
      });
    },
  });

  const onSubmit = (data: SignupInput) => {
    SignupUser(data);
  };

  return (
    <div >
      <Dialog open={ isOpen } onOpenChange={ onOpenChange }>
        <DialogContent className=" rounded-lg max-sm:mx-auto">
          <DialogHeader className="mb-1">
            <DialogTitle className="text-xl">Create Account</DialogTitle>
            <DialogDescription>{ message }</DialogDescription>
          </DialogHeader>
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className=" flex flex-col gap-3">
              <div className="space-y-2">
              <FormField
                control={ form.control }
                name="email"
                render={ ({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                      <FormControl>
                        <Input placeholder="Email" className="pl-10" { ...field } />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                ) }
              />

              <FormField
                control={ form.control }
                name="password"
                render={ ({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                      <FormControl>
                        <Input type="password" placeholder="Password" className="pl-10" { ...field } />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                ) }
                />
                </div>

              <Button type="submit" className="w-full" disabled={ isPending }>
                { isPending ? "Creating account..." : "Sign Up" }
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{ " " }
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={ () => {
                router.push("/login");
              } }
            >
              Sign In
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}