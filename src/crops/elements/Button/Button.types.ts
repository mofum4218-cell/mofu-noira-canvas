// src/crops/elements/Button/Button.types.ts
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "default" | "circle" | "image" | "outline";
  imageSrc?: string;
  alt?: string;
  href?: string;
  ariaLabel?: string;
   size?: "sm" | "md" | "lg"; // ← 🆕 追加
}

