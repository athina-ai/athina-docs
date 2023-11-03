import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
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
};

export default config;
