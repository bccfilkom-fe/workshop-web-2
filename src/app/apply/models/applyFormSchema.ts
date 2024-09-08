import { z } from "zod";

export const ApplyFormSchema = z.object({
    fullName: z.string().min(5, 'Nama lu pendek banget').max(1000, 'Nama lu panjang banget'),
    email: z.string().email('Invalid email address'),
})

export type ApplyFormFields = z.infer<typeof ApplyFormSchema>;