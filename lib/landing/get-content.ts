import { unstable_cache } from "next/cache";
import { cache } from "react";

import { LANDING_CACHE_TAG } from "./cache";
import { defaultLandingPage } from "./default-content";
import { fromPayloadLandingPage } from "./from-payload";

const getCmsLandingPage = unstable_cache(
  async () => {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import("payload"),
      import("@payload-config"),
    ]);
    const payload = await getPayload({ config });
    const page = await payload.findGlobal({
      slug: "landing-page",
      depth: 2,
      overrideAccess: true,
    });

    return fromPayloadLandingPage(page);
  },
  ["landing-page-global"],
  { tags: [LANDING_CACHE_TAG], revalidate: 3600 }
);

export const getLandingPage = cache(async () => {
  if (process.env.CMS_ENABLED !== "true") {
    return defaultLandingPage;
  }

  return getCmsLandingPage();
});
