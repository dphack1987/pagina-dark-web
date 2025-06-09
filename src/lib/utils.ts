<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

>>>>>>> 1b206d614589b0df7079994e41120cafce736271
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
