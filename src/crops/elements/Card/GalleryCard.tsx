"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { getPublicUrl } from "@/lib/supabaseUtils";

const CardWrapper = styled(Link)<{ $bg: string }>`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 20px 5px rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-decoration: none;
  min-height: 250px;
  background: ${({ $bg }) => `url(${ $bg }) lightgray 50% / cover no-repeat`};
`;

const CardContent = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Subtitle = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`;

type Props = {
  id: string;
  title: string;
  subtitle: string;
};

export const GalleryCard: React.FC<Props> = ({ id, title, subtitle }) => {
  const imgUrl = getPublicUrl(`top/${id}.png`);

  return (
    <CardWrapper href={`/${id}`} $bg={imgUrl}>
      <CardContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardContent>
    </CardWrapper>
  );
};

