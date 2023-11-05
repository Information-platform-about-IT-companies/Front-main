import { useMemo } from "react";

import IconAccount from "./IconAccount";
import IconArrow from "./IconArrow";
import IconFilter from "./IconFilter";
import IconHeart from "./IconHeart";
import IconOctopusArrow from "./IconOctopusArrow";
import IconPin from "./IconPin";
import IconRound from "./IconRound";
import IconSearch from "./IconSearch";
import IconLike from "./IconLike";

const icons = {
  IconAccount,
  IconArrow,
  IconFilter,
  IconHeart,
  IconOctopusArrow,
  IconPin,
  IconRound,
  IconSearch,
  IconLike,
};

export default function Icon({ icon, ...props }) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);
  return <RenderIcon {...props} />;
}
