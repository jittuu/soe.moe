import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default withContentlayer(nextConfig);
