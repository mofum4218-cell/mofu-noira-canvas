"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

// タイプライターアニメーション
const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkingCursor = keyframes`
  from { border-right-color: rgba(255,255,255,.75); }
  to { border-right-color: transparent; }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Right = styled.div<{ $bg?: string }>`
  flex: 1;
  background: ${({ $bg }) =>
    $bg ? `url(${$bg}) no-repeat center center / cover` : "#111"};
`;

const Typewriter = styled.p`
  position: relative;
  max-width: 90%;
  margin: 0;
  font-size: 32px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation:
    ${typewriter} 6s steps(60) 1s 1 normal both,
    ${blinkingCursor} 500ms steps(50) infinite normal;

  @media (max-width: 768px) {
    font-size: 20px;
    white-space: normal;
    border-right: none;
    animation: none;
    text-align: center;
  }
`;

export const Hero: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/book.png", 300);
      if (data?.signedUrl) setImgUrl(data.signedUrl);
    };
    loadImage();
  }, []);

  return (
    <Wrapper>
      <Left>
        <Typewriter>
          Hi there, I'm Noira — weaving stories with light and code.
        </Typewriter>
      </Left>
      <Right $bg={imgUrl} />
    </Wrapper>
  );
};

