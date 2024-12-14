import { NextResponse } from 'next/server';
import { z } from "zod";

// Validation Schema
const ContactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" })
    .transform(val => val.replace(/\D/g, '')),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" })
});

// Type for Contact Data
export type ContactData = z.infer<typeof ContactSchema>;

// Route Handler
export async function POST(req: Request) {
  try {
    // Validate request body
    const body = await req.json();
    const validatedData: ContactData = ContactSchema.parse(body);

    // Process the validated data (replace with actual logic)
    console.log('Validated Contact:', validatedData);

    return NextResponse.json({ 
      success: true, 
      message: 'Contact submitted successfully',
      data: {
        name: validatedData.name,
        email: validatedData.email
      }
    }, { status: 200 });

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }))
      }, { status: 400 });
    }

    // Handle other errors
    console.error('Submission error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An unexpected error occurred' 
    }, { status: 500 });
  }
}

// Next.js route configuration
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
