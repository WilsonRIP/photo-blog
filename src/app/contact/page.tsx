"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"; // Type-only import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form schema with Zod for type safety
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message cannot exceed 1000 characters")
});

// Infer TypeScript type from schema
type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Replace with your API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error("Failed to send message");
      
      setSubmitStatus("success");
      reset(); // Clear form on success
    } catch (error: unknown) {
      console.error("Contact form error:", error instanceof Error ? error.message : String(error));
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6">Have a question or want to work together? Send me a message!</p>
      
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md">
          There was an error sending your message. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
            } focus:border-indigo-500`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
            } focus:border-indigo-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            {...register("subject")}
            className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
              errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
            } focus:border-indigo-500`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
              errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
            } focus:border-indigo-500`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}