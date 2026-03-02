import { useMutation } from "@tanstack/react-query";

// Mock implementation of useCreateLead hook
// In a real app, this would connect to an API endpoint
export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulate success
      console.log("Lead created:", data);
      return { success: true, data };
    },
  });
}
