// src/crops/pages/noira-fragments/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
  position: relative;
`;

// 各clip-pathアニメーション
const clip1 = keyframes`
  0% { clip-path: polygon(0% -50%, 50% -50%, -50% 50%, -100% 50%); }
  100% { clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%); }
`;
const clipa = keyframes`
  0% { clip-path: polygon(-5% -55%, 55% -45%, -45% 55%, -95% 55%); }
  100% { clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%); }
`;
const clip2 = keyframes`
  0% { clip-path: polygon(50% -50%, 100% -50%, 200% 50%, 150% 50%); }
  100% { clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%); }
`;
const clipb = keyframes`
  0% { clip-path: polygon(40% -60%, 100% -50%, 190% 40%, 150% 50%); }
  100% { clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%); }
`;
const clip3 = keyframes`
  0% { clip-path: polygon(-100% -150%, -50% -150%, -150% -50%, -200% -50%); }
  100% { clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%); }
`;
const clip4 = keyframes`
  0% { clip-path: polygon(150% -150%, 200% -150%, 300% -50%, 250% -50%); }
  100% { clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%); }
`;

const Clip = styled.div<{ $bg?: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${(p) => p.$bg}) no-repeat center;
  background-size: cover;
  filter: grayscale(1);
  transform-origin: center;
`;

// 各断片に固有のアニメーション付与
const Clip1 = styled(Clip)`animation: ${clip1} 4s linear infinite;`;
const Clipa = styled(Clip)`transform: scale(1.1); animation: ${clipa} 9s linear infinite;`;
const Clip2 = styled(Clip)`transform: scale(1.12); animation: ${clip2} 5s linear infinite;`;
const Clipb = styled(Clip)`transform: scale(1.14); animation: ${clipb} 4s linear infinite;`;
const Clip3 = styled(Clip)`transform: scale(1.15); animation: ${clip3} 7s linear infinite;`;
const Clip4 = styled(Clip)`transform: scale(1.13); animation: ${clip4} 6s linear infinite;`;

export const Hero: React.FC = () => {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/fragments.png", 600);
      if (data?.signedUrl) setBgUrl(data.signedUrl);
    };
    load();
  }, []);

  if (!bgUrl) return <Wrapper>Loading fragments…</Wrapper>;

  return (
    <Wrapper>
      {/* 複数の断片アニメーションを重ねる */}
      <Clip1 $bg={bgUrl} />
      <Clipa $bg={bgUrl} />
      <Clip2 $bg={bgUrl} />
      <Clipb $bg={bgUrl} />
      <Clip3 $bg={bgUrl} />
      <Clip4 $bg={bgUrl} />
    </Wrapper>
  );
};

