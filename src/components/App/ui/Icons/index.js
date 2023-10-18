import { useMemo } from 'react';

import { IconAccount } from './IconAccount';
import { IconOctopusArrow } from './IconOctopusArrow';
import { IconPin } from './IconPin';
import { IconRound } from './IconRound';
import { IconSearch } from './IconSearch';

const icons = { IconAccount, IconOctopusArrow, IconPin, IconRound, IconSearch };

function Icon({ icon, ...props }) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);
  return <RenderIcon {...props} />;
}

export default Icon;
