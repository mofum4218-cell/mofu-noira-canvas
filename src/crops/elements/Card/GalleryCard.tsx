"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const CardWrapper = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 20px 5px rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-decoration: none;
  min-height: 250px;
  background-size: cover;
  background-position: center;
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
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl(`top/${id}.png`, 300);
      if (data?.signedUrl) setImgUrl(data.signedUrl);
    };
    fetchUrl();
  }, [id]);

  return (
    <CardWrapper href={`/${id}`} style={{ backgroundImage: `url(${imgUrl})` }}>
      <CardContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardContent>
    </CardWrapper>
  );
};

