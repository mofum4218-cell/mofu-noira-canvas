"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "@/greenhouse/themes/ThemeContext";
import { getTheme } from "@/greenhouse/themes/colors";
import { ThemeName } from "@/greenhouse/themes/types";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

const Wrapper = styled.section<{ $bg: string; $text: string }>`
  background: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: bold;
`;

const TextBlock = styled.p`
  font-size: clamp(16px, 3.5vw, 20px);
  max-width: 720px;
  line-height: 1.7;
`;

const FooterMofu = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  cursor: pointer;

  .bubble {
    background: rgba(255,255,255,0.9);
    color: #333;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    white-space: nowrap;
  }
`;

export const DescWrapper: React.FC<{
  title: string;
  feature: string;
  arrange: string;
}> = ({ title, feature, arrange }) => {
  const { currentTheme } = useTheme();
  const theme = getTheme(currentTheme as ThemeName);

  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("common/merge.svg", 300);
      if (data?.signedUrl) setLogoUrl(data.signedUrl);
    };
    fetchUrl();
  }, []);

  return (
    <Wrapper $bg={theme.bg} $text={theme.text}>
      <Title>{title}</Title>
      <TextBlock>{feature}</TextBlock>
      <TextBlock>{arrange}</TextBlock>

      <FooterMofu>
        {logoUrl && (
          <Image
            src={logoUrl}
            alt="Merge"
            width={60}
            height={60}
            style={{ width: "60px", height: "auto" }}
          />
        )}
        <Link href="/top" className="bubble">
          ・・・もふ。（topページに帰りたいですぞ）
        </Link>
      </FooterMofu>
    </Wrapper>
  );
};

