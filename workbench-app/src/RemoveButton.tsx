import * as React from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import { MosaicKey } from 'node_modules/react-mosaic-component/src/types';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class RemoveButton<T extends MosaicKey> extends React.PureComponent<MosaicButtonProps> {
    static contextTypes = MosaicWindowContext;
    context: MosaicWindowContext<T>;

    constructor(props: MosaicButtonProps) {
        super(props);
        this.remove = this.remove.bind(this);
    }

  render() {
    return createDefaultToolbarButton('Close Window', 'bp3-icon-cross', this.remove);
  }

  private remove = () => {
    this.context.mosaicActions.remove(this.context.mosaicWindowActions.getPath());
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}

export const RemoveButtonFactory = React.createFactory(RemoveButton);
