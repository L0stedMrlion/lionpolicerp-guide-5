import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Head from "next/head";

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = arr[1] && arr[1][0] !== "#" ? arr[1] : "Lion Police RP";
  const rawTitle = arr[arr.length - 1] || "Guide";
  const title =
    /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category
        ? "Documentation"
        : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const description =
    frontMatter.description || "Documentation Lion Police Roleplay";
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />{" "}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Head>
  );
}

const config: DocsThemeConfig = {
  navigation: {
    prev: false,
    next: false,
  },
  primaryHue: 52,
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background:
          "url('https://i.ibb.co/sszfTrX/policelogo.png') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      🦁 Lion Police Roleplay
    </div>
  ),
  project: {
    link: "https://github.com/L0stedMrlion/lionpolicerp-guide-5",
  },
  chat: {
    link: "https://discord.gg/Pd4FqRQ7aH",
  },
  docsRepositoryBase: "https://github.com/L0stedMrlion/lionpolicerp-guide-5",
  useNextSeoProps: useNextSeoProps,
  head: useHead,
  footer: {
    text: "🦁 Lion Police Roleplay",
  },
};

export default config;
