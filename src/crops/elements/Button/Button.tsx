"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledButton, ImageButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  variant = "default",
  imageSrc,
  alt = "button-image",
  href,
  size = "md",
  ariaLabel,
}) => {
  // 画像ボタン（variant === "image"）
  if (variant === "image" && imageSrc) {
    return (
      <ImageButton onClick={onClick} aria-label={ariaLabel}>
        <Image src={imageSrc} alt={alt} width={100} height={100} />
      </ImageButton>
    );
  }

  // 通常ボタン
  const content = (
    <StyledButton
      onClick={onClick}
      $variant={variant === "image" ? "default" : variant} // 👈 imageは回避
      $size={size}
      aria-label={ariaLabel}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  );

  // リンクあり
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a>{content}</a>
      </Link>
    );
  }

  return content;
};

export default Button;

