import * as React from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import { MosaicKey } from 'node_modules/react-mosaic-component/src/types';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class AddGraphWindowButton<T extends MosaicKey> extends React.PureComponent<MosaicButtonProps> {
  static contextTypes = MosaicWindowContext;
  context: MosaicWindowContext<T>;

    constructor(props: MosaicButtonProps) {
        super(props);
        this.addMode = this.addMode.bind(this);
    }

    render() {
      return createDefaultToolbarButton('Add Mode', 'bp3-icon-plus', this.addMode, 'Add Mode');
    }

  private addMode = () => {
    this.context.mosaicActions.expand(this.context.mosaicWindowActions.getPath());

    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}

export const AddGraphWindowButtonFactory = React.createFactory(AddGraphWindowButton);
