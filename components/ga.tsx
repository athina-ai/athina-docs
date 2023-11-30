import Script from "next/script";
import { useEffect } from "react";
import ReactGA from "react-ga4";
export default function GA() {
  useEffect(() => {
    ReactGA.initialize("G-Z9EFZH4GYS");
    ReactGA.send({
      hitType: "pageview",
      title: "Athina Docs",
    });
  }, []);
  return <></>;
}
