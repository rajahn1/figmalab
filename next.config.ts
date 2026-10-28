import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const mediaHostname = process.env.R2_PUBLIC_URL
  ? new URL(process.env.R2_PUBLIC_URL).hostname
  : undefined;
const blackFridayAssetHostname = "pub-d51033f4b865409099cb79bce79a2581.r2.dev";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 76, 78, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: blackFridayAssetHostname,
      },
      ...(mediaHostname && mediaHostname !== blackFridayAssetHostname
        ? [
            {
              protocol: "https" as const,
              hostname: mediaHostname,
            },
          ]
        : []),
    ],
  },
};

export default withPayload(nextConfig);
