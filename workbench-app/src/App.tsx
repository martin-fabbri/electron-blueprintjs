import {Mosaic} from 'react-mosaic-component'
import {ExpandButton} from './ExpandButton'
import {RemoveButton} from './RemoveButton'
import {FullscreenButton} from './FullscreenButton'
import {AddGraphWindowButton} from './AddGraphWindowModeButton'
import {GraphsWindowTabs} from './GraphsWindowTabs'
import {THEMES} from './navbar';
import {MosaicWindow} from './MosaicWindow';
import {SamplesTable} from './SamplesTable';
import {FilterInput} from './FilterInput';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/table/lib/css/table.css';
import 'react-mosaic-component/react-mosaic-component.css';
import './App.css';
import './css/tailwind.css';

import * as React from 'react';

import {default as Navbar} from './navbar';
import {Button, MenuItem} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import {ItemRenderer} from "@blueprintjs/select/lib/cjs";

export interface AppState {
    currentTheme: string;
    paramX: Parameters;
}

export interface AppProps {
    debug?: boolean;
}

const DEFAULT_CONTROLS_WITHOUT_CREATION = React.Children.toArray([<FullscreenButton key="fullscreen"/>, <ExpandButton key="expand"/>, <RemoveButton key="remove"/>]);
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

const EMPTY_ARRAY: any[] = [];

const addGraphWindowMode = React.Children.toArray([<AddGraphWindowButton key='addGraphMode'/>]);
const samplesToolbar = React.Children.toArray([<FilterInput key='samples'/>]);
const graphsWindowTabs = React.Children.toArray([<GraphsWindowTabs key='addGraphMode'/>]);

interface Parameters {
    id: number;
    type: string;
}

const ParametersSelect = Select.ofType<Parameters>();

const lines = [
    {id: 1, type: 'dotted'},
    {id: 2, type: 'solid' }
];

class App extends React.Component<AppProps, AppState> {

    state: AppState = {
        currentTheme: 'Light Theme',
        paramX: lines[0],
    };

    public render() {

        const {paramX} = this.state;

        console.log('rendering', paramX.type);

        return (
            <div className={`app-container ${this.state.currentTheme === 'Dark Theme' ? 'bp3-dark' : ''}`}>

                    <Navbar currentTheme={this.state.currentTheme} setThemeState={this.setCurrentTheme}/>

                    <ViewIdMosaic
                        className={THEMES[this.state.currentTheme]}
                        renderTile={(id, path) => (
                            // tslint:disable-next-line jsx-no-lambda
                            <ViewIdMosaicWindow
                                path={path}
                                title={TITLE_MAP[id]}
                                toolbarControls={DEFAULT_CONTROLS_WITHOUT_CREATION}
                                additionalControls={id === 'gw' ? addGraphWindowMode : EMPTY_ARRAY}
                                toolbarTab={id === 'gw' ? graphsWindowTabs : (id === 'st' ? samplesToolbar : EMPTY_ARRAY)}
                            >

                                {id === 'gw' &&

                                         <div className="grid-container max-w-l mx-auto p-8">
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite1">
                                                 <img src="img/histogram1.png" alt="Histogran 1"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">{this.state.paramX.type}</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite2">
                                                 <img src="img/dot-plot1.png" alt="Dotplot 1"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs"> {paramX.type}</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite3">
                                                 <img src="img/density3.png" alt="Quads 1"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs"> {paramX.type}</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md  satellite4">
                                                 <img src="img/gate1.png" alt="Gate 1" className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs"> {paramX.type}</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite5">
                                                 <img src="img/quad2.png" alt="Quad 2" className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs"> {paramX.type}</p>
                                             </div>

                                             <div className="grid-axes bg-white rounded h-full text-grey-darkest shadow-md main-plot">
                                                 <div className='x'>
                                                     <ParametersSelect
                                                         items={lines}
                                                         filterable={false}
                                                         itemRenderer={this.renderParam}
                                                         onItemSelect={this.handleValueChangeX}
                                                         className='bp3-button-fill'
                                                     >
                                                         <Button className='bp3-button-fill'
                                                                 text={paramX.type}
                                                                 rightIcon="caret-down"/>
                                                         {paramX.type}
                                                     </ParametersSelect>
                                                 </div>
                                                 <div className='y'>
                                                     y
                                                 </div>
                                                 <div className='plot'>
                                                    <img src="img/quads1.png" alt="Quads 1" className="w-full block rounded-b"/>
                                                 </div>
                                             </div>

                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite6">
                                                 <img src="img/cdf1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite7">
                                                 <img src="img/heatmap1.png" alt="Quad 2"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite8">
                                                 <img src="img/zebra1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite9">
                                                 <img src="img/density-plot1.png" alt="Quad 2"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite10">
                                                 <img src="img/contour-plot1.png" alt="Contour plot"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite11">
                                                 <img src="img/density2.png" alt="Contour plot"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                             <div className="bg-white rounded h-full text-grey-darkest shadow-md satellite12">
                                                 <img src="img/histogram2.png" alt="Contour plot"
                                                      className="w-full block rounded-b"/>
                                                 <p className="text-center text-xs">FSC-A</p>
                                             </div>
                                         </div>

                                }

                                {id === 'st' &&
                                    <SamplesTable/>
                                }

                                {id === 'lw' && <div
                                >

                                    <h1><span>paramX.type</span>{paramX.type}</h1>
                                    <h2><span>paramX.type</span>{paramX.type}</h2>
                                </div> }
                                {id === 'gp' && <div><h1><span>paramX.type</span>{paramX.type}</h1>
                                <h2><span>paramX.type</span>{paramX.type}</h2></div>}

                            </ViewIdMosaicWindow>

                        )}
                        initialValue={{
                            direction: 'column',
                            first: 'gp',
                            second: {
                                direction: 'row',
                                first: 'st',
                                second: {
                                    direction: 'row',
                                    first: 'gw',
                                    second: 'lw',
                                }
                            },
                        }}
                    />
            </div>
        );
    }

    private renderParam: ItemRenderer<Parameters> = (param, { handleClick, modifiers }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        const {paramX} = this.state;
        const active = param.id === paramX.id;
        // console.log('param.type', param.type, active);
        return (
            <MenuItem
                active={active}
                disabled={modifiers.disabled}
                key={param.id}
                onClick={handleClick}
                text={param.type}
            />
        );
    };

    private handleValueChangeX = (p: Parameters) => {
        this.setState({
            ...this.state,
            paramX: p
        });
    };

    private setCurrentTheme = (theme: string) => {

        console.log('setCurrentTheme', theme);
        this.setState({ currentTheme: theme});
    }
}

export default App;

