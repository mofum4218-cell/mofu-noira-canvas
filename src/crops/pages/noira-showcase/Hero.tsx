"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  font-family: "Noto Sans", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

const Showcase = styled.div<{ $bg: string }>`
  flex: 1;
  background: #000 url(${({ $bg }) => $bg}) no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  position: relative;
  transition: background-image 0.6s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  > div {
    z-index: 2;
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    font-size: 1.5rem;
  }
`;

const Menu = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    font-size: 2rem;
    margin: 1rem 0;
    cursor: pointer;
    position: relative;
    color: #000;
    transition: transform 0.25s ease;

    &:hover {
      transform: translateX(10px);
      color: #ef3340;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
      &:hover {
        transform: none;
        color: #ef3340;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const fetched: string[] = [];
      for (let i = 1; i <= 4; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`sample/showcase${i}.jpg`, 600);
        if (data?.signedUrl) fetched.push(data.signedUrl);
      }
      setImages(fetched);
    };
    load();
  }, []);

  const menuItems = ["Introduction", "The System", "Typography", "Photography"];

  return (
    <Wrapper>
      <Showcase $bg={images[activeIndex] || ""}>
        <div>{menuItems[activeIndex]}</div>
      </Showcase>
      <Menu>
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            onMouseEnter={() => {
              if (window.innerWidth > 768) setActiveIndex(idx);
            }}
            onClick={() => {
              if (window.innerWidth <= 768) setActiveIndex(idx);
            }}
          >
            {item}
          </li>
        ))}
      </Menu>
    </Wrapper>
  );
};

