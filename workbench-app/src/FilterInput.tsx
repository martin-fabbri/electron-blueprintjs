import * as React from "react";

import { Button, Intent, ITagProps, TagInput } from "@blueprintjs/core";

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

const VALUES = [
    'Well ID: A01',
    undefined,
];

export interface ITagInputExampleState {
    addOnBlur: boolean;
    addOnPaste: boolean;
    disabled: boolean;
    fill: boolean;
    intent: boolean;
    large: boolean;
    minimal: boolean;
    values: React.ReactNode[];
}

export interface IProps {
    values?: React.ReactNode[];
}

export class FilterInput extends React.PureComponent<IProps, ITagInputExampleState> {
    public state: ITagInputExampleState = {
        addOnBlur: false,
        addOnPaste: true,
        disabled: false,
        fill: false,
        intent: false,
        large: false,
        minimal: false,
        values: VALUES,
    };

    public render() {
        const { minimal, values, ...props } = this.state;

        const clearButton = (
            <Button
                disabled={props.disabled}
        icon={values.length > 1 ? "remove" : "refresh"}
        minimal={true}
        onClick={this.handleClear}
        />
    );

        // define a new function every time so switch changes will cause it to re-render
        // NOTE: avoid this pattern in your app (use this.getTagProps instead); this is only for
        // example purposes!!
        const getTagProps = (_v: string, index: number): ITagProps => ({
            intent: this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
            large: props.large,
            minimal,
        });

        return (
        <TagInput
            {...props}
        leftIcon="filter"
        onChange={this.handleChange}
        placeholder="Separate filters with commas..."
        rightElement={clearButton}
        tagProps={getTagProps}
        values={values}
        />
    );
    }

    private handleChange = (values: React.ReactNode[]) => {
        this.setState({ values });
    };

    private handleClear = () => this.handleChange(this.state.values.length > 0 ? [] : VALUES);
}