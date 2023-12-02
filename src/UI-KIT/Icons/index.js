import { useMemo } from "react";

import IconAccount from "./IconAccount";
import IconArrow from "./IconArrow";
import IconCategoryDesign from "./IconCategoryDesign";
import IconCategoryMarketing from "./IconCategoryMarketing";
import IconCategorySoftware from "./IconCategorySoftware";
import IconCategoryBusiness from "./IconCategoryBusiness";
import IconFilter from "./IconFilter";
import IconHeart from "./IconHeart";
import IconOctopusArrow from "./IconOctopusArrow";
import IconPin from "./IconPin";
import IconRound from "./IconRound";
import IconSearch from "./IconSearch";
import IconThemeDark from "./IconThemeDark";
import IconThemeLight from "./IconThemeLight";

const icons = {
  IconAccount,
  IconArrow,
  IconCategoryDesign,
  IconCategoryMarketing,
  IconCategorySoftware,
  IconCategoryBusiness,
  IconFilter,
  IconHeart,
  IconOctopusArrow,
  IconPin,
  IconRound,
  IconSearch,
  IconThemeDark,
  IconThemeLight,
};

export default function Icon({ icon, ...props }) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);
  return <RenderIcon {...props} />;
}
