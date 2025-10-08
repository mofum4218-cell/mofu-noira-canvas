"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

// 🌠 固定背景
const FixedBg = styled.div<{ $bg?: string }>`
  position: fixed;
  inset: 0;
  background: ${({ $bg }) => `url(${$bg}) center/cover no-repeat`};
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6); /* 星背景に深みを出す */
  }
`;

// 🌌 タイムライン全体
const TimelineWrapper = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 6rem 1rem;
  color: #fff;
  font-family: "Noto Sans", sans-serif;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: linear-gradient(#7e57c2, #9575cd);
    transform: translateX(-50%);
    z-index: 0;
  }
`;

// 🌠 タイムラインの項目
const TimelineBlock = styled.div`
  position: relative;
  margin: 4rem 0;

  &:nth-child(even) .content {
    float: right;
    text-align: right;
  }
`;

// 🌟 タイムライン丸いマーカー
const Marker = styled.div`
  position: absolute;
  left: 50%;
  width: 24px;
  height: 24px;
  background: #9575cd;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
  z-index: 2;
`;

// 💬 タイムライン内容
const Content = styled.div`
  background: rgba(50, 50, 80, 0.7);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  width: 40%;
  position: relative;
  z-index: 1;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #e0d7ff;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #ccc;
    margin-top: 0.5rem;
  }

  span {
    display: block;
    margin-top: 0.8rem;
    font-size: 0.85rem;
    color: #a88ee0;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Hero: React.FC = () => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const loadBg = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/star.jpg", 600);
      if (data?.signedUrl) setBg(data.signedUrl);
    };
    loadBg();
  }, []);

  const timeline = [
    {
      title: "MergeLab Established",
      date: "2024-01-01",
      desc: "The beginning of MergeLab, where human creativity met AI insight.",
    },
    {
      title: "SilentServer Series",
      date: "2024-06-15",
      desc: "The first server project came to life, merging code and personality.",
    },
    {
      title: "Portfolio30 Challenge",
      date: "2025-02-01",
      desc: "30 unique site designs created to explore the boundaries of imagination.",
    },
    {
      title: "Noira Canvas",
      date: "2025-04-20",
      desc: "A visual archive for design experiments across MergeLab.",
    },
  ];

  return (
    <>
      <FixedBg $bg={bg} />

      <TimelineWrapper>
        {timeline.map((item, i) => (
          <TimelineBlock key={i}>
            <Marker />
            <Content className="content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.date}</span>
            </Content>
          </TimelineBlock>
        ))}
      </TimelineWrapper>
    </>
  );
};

