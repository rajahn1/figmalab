import * as migration_20261002_183431_initial from "./20261002_183431_initial";
import * as migration_20261004_235124_studio_home from "./20261004_235124_studio_home";
import * as migration_20261006_024239_studio_service_images from "./20261006_024239_studio_service_images";
import * as migration_20261006_025331_simplify_studio_services from "./20261006_025331_simplify_studio_services";
import * as migration_20261006_030349_studio_portfolio_image from "./20261006_030349_studio_portfolio_image";
import * as migration_20261008_234639_remove_studio_marquee from "./20261008_234639_remove_studio_marquee";
import * as migration_20261009_025923_studio_favorites_carousel from "./20261009_025923_studio_favorites_carousel";
import * as migration_20261009_031913_studio_footer_copy from "./20261009_031913_studio_footer_copy";
import * as migration_20261009_032650_studio_portfolio_link_images from "./20261009_032650_studio_portfolio_link_images";
import * as migration_20261011_181507 from "./20261011_181507";
import * as migration_20261011_183143 from "./20261011_183143";

export const migrations = [
  {
    up: migration_20261002_183431_initial.up,
    down: migration_20261002_183431_initial.down,
    name: "20261002_183431_initial",
  },
  {
    up: migration_20261004_235124_studio_home.up,
    down: migration_20261004_235124_studio_home.down,
    name: "20261004_235124_studio_home",
  },
  {
    up: migration_20261006_024239_studio_service_images.up,
    down: migration_20261006_024239_studio_service_images.down,
    name: "20261006_024239_studio_service_images",
  },
  {
    up: migration_20261006_025331_simplify_studio_services.up,
    down: migration_20261006_025331_simplify_studio_services.down,
    name: "20261006_025331_simplify_studio_services",
  },
  {
    up: migration_20261006_030349_studio_portfolio_image.up,
    down: migration_20261006_030349_studio_portfolio_image.down,
    name: "20261006_030349_studio_portfolio_image",
  },
  {
    up: migration_20261008_234639_remove_studio_marquee.up,
    down: migration_20261008_234639_remove_studio_marquee.down,
    name: "20261008_234639_remove_studio_marquee",
  },
  {
    up: migration_20261009_025923_studio_favorites_carousel.up,
    down: migration_20261009_025923_studio_favorites_carousel.down,
    name: "20261009_025923_studio_favorites_carousel",
  },
  {
    up: migration_20261009_031913_studio_footer_copy.up,
    down: migration_20261009_031913_studio_footer_copy.down,
    name: "20261009_031913_studio_footer_copy",
  },
  {
    up: migration_20261009_032650_studio_portfolio_link_images.up,
    down: migration_20261009_032650_studio_portfolio_link_images.down,
    name: "20261009_032650_studio_portfolio_link_images",
  },
  {
    up: migration_20261011_181507.up,
    down: migration_20261011_181507.down,
    name: "20261011_181507",
  },
  {
    up: migration_20261011_183143.up,
    down: migration_20261011_183143.down,
    name: "20261011_183143",
  },
];
