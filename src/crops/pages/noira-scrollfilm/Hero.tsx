"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 300vh;
  z-index: 5;
`;

const OverlaySection = styled.div<{ $color?: string; $opacity?: number }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ $color }) => $color || "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  ${({ $opacity }) =>
    $opacity &&
    `
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,${$opacity});
      z-index: 1;
    }
  `}

  > * {
    position: relative;
    z-index: 2;
  }
`;

const TextBlock = styled.div`
  max-width: 700px;
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 2rem;
`;

const Marquee = styled.div`
  width: 300vw;
  white-space: nowrap;
  animation: slide 20s linear infinite;
  font-size: 2rem;
  font-weight: 600;
  color: #000;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;

  img {
    max-width: 400px;
    border-radius: 12px;
  }

  p {
    max-width: 400px;
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

export const Hero: React.FC = () => {
  const [fragImg, setFragImg] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/fragments.png", 600);
      if (data?.signedUrl) setFragImg(data.signedUrl);
    };
    load();
  }, []);

  return (
    <Wrapper>
      <OverlaySection $opacity={0.6}>
        <TextBlock>
          <h2>Frozen Whispers</h2>
          <p>
            The winter night descends quietly,  
            each snowflake a fragment of a story untold.  
            The world slows, holding its breath,  
            waiting for the whisper of warmth to return.
          </p>
        </TextBlock>
      </OverlaySection>

      <OverlaySection $color="#fff">
        <Marquee>— Frost drifts. Time slows. The wind hums a lullaby. —</Marquee>
      </OverlaySection>

      <OverlaySection $opacity={0.6}>
        <FlexBox>
          {fragImg && <img src={fragImg} alt="fragments" />}
          <p>
            Beneath the frozen silence, echoes of motion still remain.  
            The light, the cold, the stillness — all part of winter’s quiet symphony.
          </p>
        </FlexBox>
      </OverlaySection>
    </Wrapper>
  );
};

