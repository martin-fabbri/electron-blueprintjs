import * as React from "react";
import {Alignment, Button, Navbar, ButtonGroup, NavbarDivider, Classes, NavbarGroup, NavbarHeading} from "@blueprintjs/core";

export const THEMES = {
    ['Light Theme']: 'mosaic-blueprint-theme',
    ['Dark Theme']: 'mosaic-blueprint-theme pt-dark',
};

export interface INavbarProps {
    debug?: boolean;
}

class AppNavbar extends React.Component<INavbarProps> {
    public render() {
        const today = new Date();
        const dateFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'};
        const fileName = new Intl.DateTimeFormat(navigator.language, dateFormatOptions).format(today).replace(', ', '-').replace(' ', '-');
        return (
            <>
            <Navbar className='bp3-dark'>
                <NavbarGroup align={Alignment.LEFT}>
                    <ButtonGroup minimal={true}>
                        <Button icon="database"/>
                        <Button icon="function"/>
                        <Button icon="undo"/>
                        <Button icon="redo"/>
                    </ButtonGroup>
                    <Navbar.Divider/>
                </NavbarGroup>
                <Navbar.Group align={Alignment.CENTER}>
                    <span className={Classes.MINIMAL}>* {fileName}</span>
                </Navbar.Group>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Button icon="control" className={Classes.MINIMAL}>Configure Workspace</Button>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="user"/>
                    <Button className={Classes.MINIMAL} icon="notifications"/>
                    <Button className={Classes.MINIMAL} icon="cog"/>
                </NavbarGroup>
            </Navbar>

                <Navbar className='bp3-dark'>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Blueprint</NavbarHeading>
                        <NavbarDivider />
                        <Button className={Classes.MINIMAL} icon="home" text="Home" />
                        <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>

            </>
        );
    }
}

export default AppNavbar;