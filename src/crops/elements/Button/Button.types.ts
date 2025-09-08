// src/crops/elements/Button/Button.types.ts
import { ReactNode } from "react";

export type ButtonVariant = "default" | "outline" | "circle" | "image";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  lottie?: ReactNode; // ※Lottie用コンポーネントなど
  imageSrc?: string;
  alt?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

