import { ExpandButton } from './ExpandButton';
import { RemoveButton } from './RemoveButton';

import * as React from 'react';

export const DEFAULT_CONTROLS_WITH_CREATION = React.Children.toArray([
  <ExpandButton key='eb' />,
  <RemoveButton key='rb' />,
]);
export const DEFAULT_CONTROLS_WITHOUT_CREATION = React.Children.toArray([<ExpandButton key="expand"/>, <RemoveButton key="remove"/>]);
