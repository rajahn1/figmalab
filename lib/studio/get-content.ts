import { unstable_cache } from "next/cache";
import { cache } from "react";

import { STUDIO_HOME_CACHE_TAG } from "./cache";
import { defaultStudioHome } from "./default-content";
import { fromPayloadStudioHome } from "./from-payload";

const getCmsStudioHome = unstable_cache(
  async () => {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import("payload"),
      import("@payload-config"),
    ]);
    const payload = await getPayload({ config });
    const page = await payload.findGlobal({
      slug: "studio-home",
      depth: 2,
      overrideAccess: true,
    });

    return fromPayloadStudioHome(page);
  },
  ["studio-home-global-v3"],
  { tags: [STUDIO_HOME_CACHE_TAG], revalidate: 3600 }
);

export const getStudioHome = cache(async () => {
  if (process.env.CMS_ENABLED !== "true") return defaultStudioHome;
  return getCmsStudioHome();
});
