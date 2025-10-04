import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Validation schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(15),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export const authService = {
  async signUp(data: RegisterInput) {
    try {
      const validated = registerSchema.parse(data);
      
      const { data: authData, error } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: validated.fullName,
            phone: validated.phone,
          },
        },
      });

      if (error) throw error;
      return { data: authData, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { data: null, error: error.errors[0].message };
      }
      if (error instanceof Error) {
        return { data: null, error: error.message };
      }
      return { data: null, error: "An unexpected error occurred" };
    }
  },

  async signIn(data: LoginInput) {
    try {
      const validated = loginSchema.parse(data);
      
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (error) throw error;
      return { data: authData, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { data: null, error: error.errors[0].message };
      }
      if (error instanceof Error) {
        return { data: null, error: error.message };
      }
      return { data: null, error: "An unexpected error occurred" };
    }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },
};
