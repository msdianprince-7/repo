import { profileData } from "@/data/portfolio-data";

export function useProfile() {
  return {
    data: profileData,
    isLoading: false,
  };
}