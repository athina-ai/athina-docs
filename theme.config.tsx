import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex" }}>
      <img
        src="/magik-logo.png"
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      Magik
    </div>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;