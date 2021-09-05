import React from 'react';
import Columns from './Columns'
function Table(props) {
    return (
        <table>

            <tbody>
                <tr>

                    <Columns></Columns>
                </tr>
            </tbody>
        </table>
    );
}
export default Table;