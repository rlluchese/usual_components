import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((columnData) => {
            return (
                <td key={ columnData.label } className="p-2">{ columnData.render(rowData) }</td>
            );
        });
        
        return (<tr key={ keyFn(rowData) } className="border-b">
            { renderedCells }
            </tr>);
    });

    const renderedHeaders = config.map((columnData) => {
        if (columnData.header){
            return <Fragment key={ columnData.label }>{ columnData.header() }</Fragment>;
        }
         
        return (
            <th key={ columnData.label }>{ columnData.label }</th>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    { renderedHeaders }
                </tr>
            </thead>
            <tbody>
                { renderedRows }
            </tbody>
        </table>
    );
}

export default Table;