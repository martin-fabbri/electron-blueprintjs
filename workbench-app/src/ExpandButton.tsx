import * as React from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import { MosaicKey } from 'node_modules/react-mosaic-component/src/types';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class ExpandButton<T extends MosaicKey> extends React.PureComponent<MosaicButtonProps> {
  static contextTypes = MosaicWindowContext;
  context: MosaicWindowContext<T>;

    constructor(props: MosaicButtonProps) {
        super(props);
        this.expand = this.expand.bind(this);
    }

    render() {
      return createDefaultToolbarButton('Expand', 'bp3-icon-maximize', this.expand);
    }

  private expand = () => {
    this.context.mosaicActions.expand(this.context.mosaicWindowActions.getPath());

    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}

export const ExpandButtonFactory = React.createFactory(ExpandButton);
