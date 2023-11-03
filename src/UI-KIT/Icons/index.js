import { useMemo } from "react";

import IconAccount from "./IconAccount";
import IconArrow from "./IconArrow";
import IconFilter from "./IconFilter";
import IconOctopusArrow from "./IconOctopusArrow";
import IconPin from "./IconPin";
import IconRound from "./IconRound";
import IconSearch from "./IconSearch";

const icons = {
  IconAccount,
  IconArrow,
  IconFilter,
  IconOctopusArrow,
  IconPin,
  IconRound,
  IconSearch,
};

export default function Icon({ icon, ...props }) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);
  return <RenderIcon {...props} />;
}
