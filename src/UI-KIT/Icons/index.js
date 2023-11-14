import { useMemo } from "react";

import IconAccount from "./IconAccount";
import IconArrow from "./IconArrow";
import IconСategoryDesign from "./IconСategoryDesign";
import IconСategoryMarketing from "./IconСategoryMarketing";
import IconСategorySoftware from "./IconСategorySoftware";
import IconСategoryWeb from "./IconСategoryWeb";
import IconFilter from "./IconFilter";
import IconHeart from "./IconHeart";
import IconOctopusArrow from "./IconOctopusArrow";
import IconPin from "./IconPin";
import IconRound from "./IconRound";
import IconSearch from "./IconSearch";

const icons = {
  IconAccount,
  IconArrow,
  IconСategoryDesign,
  IconСategoryMarketing,
  IconСategorySoftware,
  IconСategoryWeb,
  IconFilter,
  IconHeart,
  IconOctopusArrow,
  IconPin,
  IconRound,
  IconSearch,
};

export default function Icon({ icon, ...props }) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);
  return <RenderIcon {...props} />;
}
