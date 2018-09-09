import * as React from "react";

import { Cell, Column, Table } from "@blueprintjs/table";

function formatDate(date: any) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
}

export class SamplesTable extends React.PureComponent {
    public render() {
        const cellRenderer = (rowIndex: number) => <Cell>{`LD1_NS+NS_${rowIndex}_exp`}</Cell>;
        const cellNumRenderer = (rowIndex: number) => <Cell>{rowIndex * 1000 + (rowIndex % 2 === 0 ? rowIndex * 100 : rowIndex * 10) + rowIndex + 327}</Cell>;
        const cellCollectionTime = (rowIndex: number) => <Cell>{`${formatDate(new Date(2018, rowIndex % 10 + 1, rowIndex % 20 + 1, rowIndex % 9 + 1))}`}</Cell>;
        const cellWellId = (rowIndex: number) => <Cell>A01</Cell>;
        return (
            <Table numRows={100}>
                <Column name="Name" cellRenderer={cellRenderer} />
                <Column name="#Events" cellRenderer={cellNumRenderer} />
                <Column name="Collection Time" cellRenderer={cellCollectionTime} />
                <Column name="Well ID" cellRenderer={cellWellId} />
            </Table>
        );
    }
}