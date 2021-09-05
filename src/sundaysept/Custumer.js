import React, { Component } from 'react';

class Custumer extends Component {
    constructor() {
  this.state={}
        super()



    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>phone_no</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Custumer;