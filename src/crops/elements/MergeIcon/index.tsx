"use client";

import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

// ふわふわアニメーション
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Floaty = styled.div`
  animation: ${float} 2.5s ease-in-out infinite;
  width: 40px;
  height: 40px;
`;

const MergeIcon: React.FC = () => {
  return (
    <Floaty>
      <Image src="/merge.png" alt="Merge" width={40} height={40} />
    </Floaty>
  );
};

export default MergeIcon;

