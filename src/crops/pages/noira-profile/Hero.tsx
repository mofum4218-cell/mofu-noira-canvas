// src/crops/pages/noira-profile/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

// ================== Keyframes ==================
const mainBlock = keyframes`
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
`;

const secBlock = keyframes`
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
`;

const mainFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  0% { width: 0px; height: 0px; opacity: 0; }
  50% { width: 12px; height: 12px; opacity: 1; bottom: 45px; }
  100% { width: 7px; height: 7px; bottom: 13px; opacity: 1; }
`;

const secFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 0.8; }
`;

// ================== Styled ==================
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #232323;
  color: #fff;
`;

const ImageBox = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;

  .block {
    position: absolute;
    width: 0%;
    height: 100%;
    background: #ffb510;
    animation: ${mainBlock} 2s cubic-bezier(.74,.06,.4,.92) forwards;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    color: #fff;
    animation: ${mainFadeIn} 2s forwards;
    animation-delay: 1.6s;
    opacity: 0;
    display: flex;
    align-items: baseline;
    position: relative;

    span {
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #ffb510;
      animation: ${popIn} 0.8s cubic-bezier(.74,.06,.4,.92) forwards;
      animation-delay: 2s;
      margin-left: 5px;
      position: absolute;
      bottom: 13px;
      right: -12px;
    }
  }
`;

const Role = styled.div`
  position: relative;
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;

  .block {
    position: absolute;
    width: 0%;
    height: 100%;
    background: #e91e63;
    animation: ${secBlock} 2s cubic-bezier(.74,.06,.4,.92) forwards;
    animation-delay: 2s;
  }

  p {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 5px;
    opacity: 0;
    animation: ${secFadeIn} 2s forwards;
    animation-delay: 3.2s;
  }
`;

// ================== Component ==================
export const Hero: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/flower.png", 300);
      if (data?.signedUrl) setImgUrl(data.signedUrl);
    };
    loadImage();
  }, []);

  return (
    <Wrapper>
      <ImageBox>{imgUrl && <img src={imgUrl} alt="Profile visual" />}</ImageBox>
      <TextBox>
        <Box>
          <Title>
            <div className="block"></div>
            <h1>
              Noira Profile<span></span>
            </h1>
          </Title>
          <Role>
            <div className="block"></div>
            <p>UI Dev Designer</p>
          </Role>
        </Box>
      </TextBox>
    </Wrapper>
  );
};

