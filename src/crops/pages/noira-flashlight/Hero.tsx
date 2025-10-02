"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section<{ $bg: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: none;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    pointer-events: none;
    background: radial-gradient(
      circle 10vmax at var(--cursorX, 50vw) var(--cursorY, 50vh),
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,.5) 80%,
      rgba(0,0,0,.95) 100%
    );
  }
`;

export const Hero: React.FC = () => {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/book.png", 600);
      if (data?.signedUrl) setBgUrl(data.signedUrl);
    };
    load();

    const update = (e: MouseEvent | TouchEvent) => {
      let x: number, y: number;
      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }
      document.documentElement.style.setProperty("--cursorX", `${x}px`);
      document.documentElement.style.setProperty("--cursorY", `${y}px`);
    };

    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    return () => {
      document.removeEventListener("mousemove", update);
      document.removeEventListener("touchmove", update);
    };
  }, []);

  if (!bgUrl) return <div>Loading...</div>;

  return <Wrapper $bg={bgUrl}></Wrapper>;
};

