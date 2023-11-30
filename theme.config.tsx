import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ReactGA from "react-ga4";
import GA from "./components/ga";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Athina",
    };
  },
  logo: (
    <div style={{ display: "flex" }}>
      <img
        src="/athina-logo.png"
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      Athina
    </div>
  ),
  project: {
    link: "https://github.com/athina-ai/ariadne",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "athina.ai",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Athina" />
      <meta
        property="og:description"
        content="Documentation for Athina AI's monitoring and evaluation platform. Athina helps detect hallucinations and bad outputs in LLM-powered applications."
      />
    </>
  ),
  main: ({ children }) => {
    const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
    const shouldLogAnalytics = environment !== "local";
    return (
      <>
        {shouldLogAnalytics && <GA />}
        {children}
      </>
    );
  },
};

export default config;
