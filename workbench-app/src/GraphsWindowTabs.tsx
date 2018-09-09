import * as React from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import { MosaicKey } from 'node_modules/react-mosaic-component/src/types';
import { MosaicButtonProps } from './MosaicButton';

export class GraphsWindowTabs<T extends MosaicKey> extends React.PureComponent<MosaicButtonProps> {
  static contextTypes = MosaicWindowContext;
  context: MosaicWindowContext<T>;

    render() {
      return (
          <div className="bp3-tabs pl-3">
              <ul className="bp3-tab-list .modifier" role="tablist">
                  <li className="bp3-tab pt-active" role="tab" aria-selected="true">Parameters</li>
                  <li className="bp3-tab" role="tab">Backgating</li>
                  <li className="bp3-tab" role="tab">Diva Gating</li>
              </ul>
          </div>
      );
    }
}

export const GraphsWindowTabsFactory = React.createFactory(GraphsWindowTabs);
