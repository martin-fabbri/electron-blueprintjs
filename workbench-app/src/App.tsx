import {Mosaic} from 'react-mosaic-component'
import {ExpandButton} from './ExpandButton'
import {RemoveButton} from './RemoveButton'

import {MosaicWindow} from './MosaicWindow';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';
import './App.css';
import './css/tailwind.css';

import * as React from 'react';

import {default as Navbar} from './navbar';

const DEFAULT_CONTROLS_WITHOUT_CREATION = React.Children.toArray([<ExpandButton key="expand"/>, <RemoveButton key="remove"/>]);

export type ViewId = 'gp' | 'st' | 'gw' | 'lw' | 'new';

const ViewIdMosaic = Mosaic.ofType<ViewId>();
const ViewIdMosaicWindow = MosaicWindow.ofType<ViewId>();

const TITLE_MAP: Record<ViewId, string> = {
    'gp': 'Graph Panel',
    'gw': 'Graph Window',
    'lw': 'Layout Window',
    'new': 'Create window',
    'st': 'Samples Table'
};


class App extends React.Component {

    public render() {

        return (
            <div className="app-container">
                    <Navbar/>

                    <ViewIdMosaic
                        renderTile={(id, path) => (
                            // tslint:disable-next-line jsx-no-lambda
                            <ViewIdMosaicWindow path={path} title={TITLE_MAP[id]} toolbarControls={DEFAULT_CONTROLS_WITHOUT_CREATION}>

                                {id === 'gw' &&
                                <div className="grid max-w-l mx-auto p-8">
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/histogram1.png" alt="Histogran 1"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/dot-plot1.png" alt="Dotplot 1"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/density3.png" alt="Quads 1"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/gate1.png" alt="Gate 1" className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/quad2.png" alt="Quad 2" className="w-full block rounded-b"/>
                                    </div>

                                    <div
                                        className="span-col-2 span-row-2 bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/quads1.png" alt="Quads 1" className="w-full block rounded-b"/>
                                    </div>

                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/cdf1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/heatmap1.png" alt="Quad 2"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/zebra1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/density-plot1.png" alt="Quad 2"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/contour-plot1.png" alt="Contour plot"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/density2.png" alt="Contour plot"
                                             className="w-full block rounded-b"/>
                                    </div>
                                    <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                        <img src="img/histogram2.png" alt="Contour plot"
                                             className="w-full block rounded-b"/>
                                    </div>
                                </div>
                                }

                                {id === 'st' &&
                                <div>
                                    <div className="bp3-tree bp3-elevation-0">
                                        <ul className="bp3-tree-node-list bp3-tree-root">
                                            <li className="bp3-tree-node bp3-tree-node-expanded border-b bg-orange-lightest">
                                                <div className="bg-orange-lightest border-l-4 border-orange-dark">
                                                    <div className="bp3-tree-node-content flex-none border-b border-dotted">
                                                        <span
                                                            className="bp3-tree-node-caret bp3-tree-node-caret-open bp3-icon-standard"/>
                                                        <span
                                                            className="bp3-tree-node-icon bp3-icon-standard bp3-icon-selection text-green"/>
                                                        <span className="bp3-tree-node-label font-bold text-orange-dark">LD_NS+NS_A01_exp.fs</span>
                                                        <span
                                                            className="bp3-tree-node-secondary-label text-xs">96,670 events</span>
                                                    </div>
                                                    <ul className="bp3-tree-node-list">
                                                        <li className="bp3-tree-node border-b border-dotted">
                                                            <div className="bp3-tree-node-content">
                                                            <span
                                                                className="bp3-tree-node-caret-none bp3-icon-standard"/>
                                                                <span
                                                                    className="bp3-tree-node-icon bp3-icon-standard bp3-icon-left-join"/>
                                                                <span className="bp3-tree-node-label">Q1: CD4-, CD8+</span>
                                                                <span
                                                                    className="bp3-tree-node-secondary-label text-xs">42,908 events</span>
                                                            </div>
                                                        </li>
                                                        <li className="bp3-tree-node">
                                                            <div className="bp3-tree-node-content">
                                                            <span
                                                                className="bp3-tree-node-caret-none bp3-icon-standard"/>
                                                                <span
                                                                    className="bp3-tree-node-icon bp3-icon-standard bp3-icon-left-join"/>
                                                                <span
                                                                    className="bp3-tree-node-label">Q2: CD4+, CD8+</span>
                                                                <span
                                                                    className="bp3-tree-node-secondary-label text-xs">25,398 events</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </li>

                                            <li className="bp3-tree-node bp3-tree-node-expanded border-b">
                                                <div className="bp3-tree-node-content">
                                                        <span
                                                            className="bp3-tree-node-caret bp3-tree-node-caret-closed bp3-icon-standard"/>
                                                    <span
                                                        className="bp3-tree-node-icon bp3-icon-standard bp3-icon-selection text-blue"/>
                                                    <span className="bp3-tree-node-label font-bold">LD_NS+NS_PI_C01_exp.fs</span>
                                                    <span
                                                        className="bp3-tree-node-secondary-label text-xs">222,670 events</span>
                                                </div>
                                            </li>

                                            <li className="bp3-tree-node bp3-tree-node-expanded border-b">
                                                <div className="bp3-tree-node-content">
                                                        <span
                                                            className="bp3-tree-node-caret bp3-tree-node-caret-closed bp3-icon-standard"/>
                                                    <span
                                                        className="bp3-tree-node-icon bp3-icon-standard bp3-icon-selection text-red"/>
                                                    <span className="bp3-tree-node-label font-bold">LD_NS+NS_PI_C01_exp.fs</span>
                                                    <span className="bp3-tag bp3-intent-danger">File not found</span>
                                                    <span
                                                        className="bp3-tree-node-secondary-label">
                                                            <button type="button"
                                                                    className="bp3-button bp3-intent-danger bp3-minimal text-xs">
                                                                <span className="bp3-icon-standard bp3-icon-refresh bp3-align-right"/>
                                                            </button>
                                                        </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="#">Add Statistics</a>
                                        <a href="#" className="ml-3">Add Keyword</a>
                                    </div>
                                </div>
                                }

                                {id === 'lw' && <h1>{TITLE_MAP[id]}</h1>}

                                {id === 'gp' && <h1>{TITLE_MAP[id]}</h1>}

                            </ViewIdMosaicWindow>

                        )}
                        initialValue={{
                            direction: 'column',
                            first: 'gp',
                            second: {
                                direction: 'row',
                                first: 'st',
                                second: 'gw',
                                third: 'lw',
                            },
                        }}
                    />
            </div>
        );
    }
}

export default App;

