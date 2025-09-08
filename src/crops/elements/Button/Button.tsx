"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledButton, ImageButton, StyledLinkButton } from "./Button.styles";
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
  disabled = false,
  block = false,
}) => {
  // 🧊 画像ボタン（Image専用）
  if (variant === "image" && imageSrc) {
    return (
      <ImageButton onClick={onClick} aria-label={ariaLabel}>
        <Image src={imageSrc} alt={alt} width={100} height={100} />
      </ImageButton>
    );
  }

  // 🔗 リンク付きボタン（<a>をボタン風にする）
  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");

    const StyledLink = (
      <StyledLinkButton
        href={href}
        $variant={variant}
        $size={size}
        $block={block}
        aria-label={ariaLabel}
      >
        {icon && <span>{icon}</span>}
        {children}
      </StyledLinkButton>
    );

    return isInternal ? (
      <Link href={href} legacyBehavior>
        {StyledLink}
      </Link>
    ) : (
      StyledLink
    );
  }

  // 🎯 通常ボタン
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $size={size}
      $block={block}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  );
};

export default Button;

