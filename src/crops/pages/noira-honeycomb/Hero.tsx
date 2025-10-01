// src/crops/pages/noira-honeycomb/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #3ea0eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const Honeycomb = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  transform: translateY(68px); /* hexHeight / 4 */

  .honeycomb-cell {
    flex: 0 1 250px;
    max-width: 250px;
    height: 137.5px; /* width * 0.55 */
    margin: 65px 12.5px 25px; /* hexHeight/2.1 etc */
    position: relative;
    padding: 0.5em;
    text-align: center;
    z-index: 1;
    cursor: pointer;

    &__title {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
      font-size: 1.25em;
      transition: opacity 350ms;

      > small {
        font-weight: 300;
        margin-top: 0.25em;
      }
    }

    &__image {
      object-fit: cover;
      object-position: center;
    }

    &::before,
    &::after {
      content: "";
    }

    &::before,
    &::after,
    &__image {
      top: -50%;
      left: 0;
      width: 100%;
      height: 200%;
      display: block;
      position: absolute;
      clip-path: polygon(
        50% 0%,
        100% 25%,
        100% 75%,
        50% 100%,
        0% 75%,
        0% 25%
      );
      z-index: -1;
    }

    &::before {
      background: #fff;
      transform: scale(1.055);
    }

    &::after {
      background: #3ea0eb;
      opacity: 0.5;
      transition: opacity 350ms;
    }

    &:hover {
      .honeycomb-cell__title {
        opacity: 0;
      }

      &::before {
        background: #72f88e;
      }

      &::after {
        opacity: 0;
      }
    }
  }

  .honeycomb__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
  }
`;

export const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 7; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`honeycomb/img0${i}.png`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setImages(urls);
    };
    load();
  }, []);

  if (images.length === 0) return <Wrapper>Loading honeycomb…</Wrapper>;

  return (
    <Wrapper>
      <Honeycomb className="honeycomb" lang="en">
        {images.map((url, i) => (
          <li key={i} className="honeycomb-cell">
            <img className="honeycomb-cell__image" src={url} alt={`hex-${i}`} />
            <div className="honeycomb-cell__title">Cell {i + 1}</div>
          </li>
        ))}
        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </Honeycomb>
    </Wrapper>
  );
};

