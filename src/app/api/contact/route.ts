import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { z } from "zod";

// Define the same schema for validation on the server side
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message cannot exceed 1000 characters")
});

// Define the expected input type
type ContactFormInputType = z.input<typeof contactFormSchema>;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body with explicit type
    const body = await request.json() as ContactFormInputType;
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);
    
    // Process the form submission (e.g., send email, store in database)
    // This is where you'd add your actual implementation
    
    // For now, just log the data and return success
    console.log("Form submission received:", validatedData);
    
    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    // Handle validation errors or other issues
    console.error("Contact form error:", error);
    
    return NextResponse.json(
      { success: false, message: "Failed to process contact form" },
      { status: 400 }
    );
  }
}