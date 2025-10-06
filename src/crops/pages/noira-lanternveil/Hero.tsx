"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section<{ $bg: string }>`
  width: 100%;
  height: 200vh; /* 2枚のレイヤー分 */
  background: url(${({ $bg }) => $bg}) no-repeat center center / cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

/* オレンジの半透明レイヤー */
const OrangeLayer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 102, 0, 0.6); /* オレンジ60%透明 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 3rem 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const OrangeText = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: #fff;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

/* ふわふわ浮遊アニメーション */
const float = keyframes`
  0%, 100% {
    transform: scale(1.15) translateY(0);
  }
  50% {
    transform: scale(1.18) translateY(-10px);
  }
`;

const OrangeImage = styled.img`
  flex: 1;
  max-width: 650px; /* ← 拡大 */
  height: auto;
  object-fit: contain;
  transform: scale(1.15);
  transition: transform 0.5s ease;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 1024px) {
    max-width: 500px;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    max-width: 320px;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    max-width: 260px;
    transform: scale(1);
  }
`;

/* 黒い不透明レイヤー */
const BlackLayer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  color: #ff6600; /* オレンジ文字 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 3rem;
    letter-spacing: 3px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Hero: React.FC = () => {
  const [bg, setBg] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data: bgData } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/halloween.jpg", 600);
      if (bgData?.signedUrl) setBg(bgData.signedUrl);

      const { data: groupData } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/img-group.png", 900);
      if (groupData?.signedUrl) setGroup(groupData.signedUrl);
    };
    load();
  }, []);

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a tincidunt nulla. 
  Vivamus elementum, felis non facilisis bibendum, ipsum sapien tincidunt justo, nec convallis lorem ipsum sit amet nunc. 
  Nulla facilisi. Suspendisse sit amet libero nunc. Integer pulvinar, tortor a vulputate congue, 
  lorem ligula dictum massa, vitae pulvinar libero erat ut dolor. 
  Quisque non dignissim magna. In nec fermentum magna. 
  Sed consequat vel ex nec mattis. Donec suscipit lorem vel nibh bibendum convallis. 
  Phasellus vehicula volutpat nulla, sed consequat ante.`;

  return (
    <Wrapper $bg={bg}>
      {/* オレンジレイヤー */}
      <OrangeLayer>
        <OrangeText>
          <h1>HALLOWEEN NIGHT FEST</h1>
          <p>{lorem}</p>
        </OrangeText>
        {group && <OrangeImage src={group} alt="Group" />}
      </OrangeLayer>

      {/* ブラックレイヤー */}
      <BlackLayer>
        <h2>TRICK OR TREAT</h2>
        <p>Feel the chill of October, when the night glows orange and black.</p>
      </BlackLayer>
    </Wrapper>
  );
};

