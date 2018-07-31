import * as React from "react";

export const THEMES = {
    ['Light Theme']: 'mosaic-blueprint-theme',
    ['Dark Theme']: 'mosaic-blueprint-theme pt-dark',
    ['BD Unified']: '',
};

function Navbar() {
    return (
        <nav className="bp3-navbar bp3-dark titlebar-draggable">
            <div className="bp3-navbar-group bp3-align-left">
                <div className="pl-16 bp3-button-group bp3-minimal .modifier">
                    <a className="bp3-button">
                        <img height={18} width={18} src="img/ws_sample_plus.svg" alt="Kiwi standing on oval"/>
                    </a>
                    <a className="bp3-button"
                       role="button">
                        <img height={18} width={18} src="img/ws_group_new.svg" alt="Kiwi standing on oval"/>
                    </a>
                    <a className="bp3-button"
                       role="button">
                        <img height={18} width={18} src="img/ws_layout.svg" alt="Kiwi standing on oval"/>
                    </a>
                    <a className="bp3-button"
                       role="button">
                        <img height={18} width={18} src="img/ws_populations.svg" alt="Kiwi standing on oval"/>
                    </a>

                    <a className="bp3-button bp3-icon-undo" role="button"/>
                    <a className="bp3-button bp3-icon-redo" role="button"/>
                </div>
            </div>

            <div className="sm:hidden lg:flex bp3-navbar-group">
                <div className="bp3-ui-text ml-2">
                    * 8-Color-PBMC
                </div>
            </div>

            <div className="bp3-navbar-group bp3-align-right">
                <div className="sm:hidden lg:flex bp3-select">
                    <select

                    >
                        {React.Children.toArray(Object.keys(THEMES).map((label, k) => <option key={k}>{label}</option>))}
                    </select>
                </div>
                <button className="bp3-button bp3-minimal bp3-icon-control"><span className="sm:hidden lg:flex">Configure Workspace</span></button>
                <span className="bp3-navbar-divider"/>
                <button className="bp3-button bp3-minimal bp3-icon-user"/>
                <button className="bp3-button bp3-minimal bp3-icon-notifications"/>
                <button className="bp3-button bp3-minimal bp3-icon-cog"/>
            </div>
        </nav>
    );
}

export default Navbar;