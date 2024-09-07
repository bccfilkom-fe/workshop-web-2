import { z } from "zod";

export const ApplyFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, 'Invalid phone number'),
  dateOfBirth: z.string().refine((date) => {
    return (
      new Date(date) < new Date() && new Date(date) > new Date('1900-01-01')
    );
  }, 'Invalid date of birth'),
  description: z.string().min(1, 'Description is required'),
});

export type ApplyFormFields = z.infer<typeof ApplyFormSchema>;
