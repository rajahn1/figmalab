import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const mediaHostname = process.env.R2_PUBLIC_URL
  ? new URL(process.env.R2_PUBLIC_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 76, 78, 100],
    remotePatterns: mediaHostname
      ? [
          {
            protocol: "https",
            hostname: mediaHostname,
          },
        ]
      : [],
  },
};

export default withPayload(nextConfig);
