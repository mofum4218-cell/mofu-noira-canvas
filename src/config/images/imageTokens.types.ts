export type ImageTokens = {
  logo: {
    default: string;
    dark?: string;
  };
  icon: {
    favicon: string;
    menu?: string;
    close?: string;
  };
  ogp: {
    default: string;
  };
  avatar?: {
    default: string;
    [key: string]: string;
  };
  content?: {
    [key: string]: string;
  };
};

