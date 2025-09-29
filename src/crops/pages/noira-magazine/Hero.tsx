"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

// ⚡ テキストが下からクリップされて表示されるアニメ
const textClip = keyframes`
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

// ⚡ 左からスライドしてくるアニメ
const outerLeft = keyframes`
  from { transform: translateX(50%); }
  to { transform: none; }
`;

const innerLeft = keyframes`
  from { transform: translateX(-50%); }
  to { transform: none; }
`;

// ⚡ 画像がスライドして表示される
const imageIn = keyframes`
  from {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh; /* ← フル画面固定 */
  width: 100%;
  background: #ede8e2;
  color: #3a3535;
  font-family: "Prata", serif;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 6vw;
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* ← 中央寄せ */
  text-align: center;
  animation: ${outerLeft} 1s 1s ease both;

  .title-inner {
    display: inline-block;
    animation: ${innerLeft} 1s 1s ease both;
  }

  .cafe-inner {
    display: inline-block;
    animation: ${innerLeft} 1s 1s ease both,
      ${textClip} 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  }

  .mozart-inner {
    display: inline-block;
    animation: ${textClip} 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  }
`;

const ImageBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  opacity: 0.7;
  animation: ${imageIn} 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;
  height: 100vh; /* ← 高さ基準を画面に固定 */
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%; /* ← 高さ合わせ */
    object-fit: cover; /* ← はみ出さないように調整 */
  }
`;

export const Hero: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/office.png", 300);
      if (data?.signedUrl) setImgUrl(data.signedUrl);
    };
    loadImage();
  }, []);

  return (
    <Wrapper>
      <Title>
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">Keyframé</div>
          </div>
          <div className="mozart">
            <div className="mozart-inner">Artistes</div>
          </div>
        </div>
      </Title>
      {imgUrl && (
        <ImageBox>
          <img src={imgUrl} alt="Office" />
        </ImageBox>
      )}
    </Wrapper>
  );
};

