import React, { Component } from 'react';

class Custumer extends Component {
    state = {
        custumers: [{ id: 1, name: "ravi", phon_no: '12-233' }, { id: 2, name: "raj", phon_no: '12-233' }
            , { id: 3, name: "ram", phon_no: '12-233' },
        { id: 4, name: "rahul", phon_no: '12-233' }]
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thread>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            this.state.custumers.map((cust) => {
                                return (<tr key={cust.id}>
                                    <td>
                                      {cust.id}
                                    </td>
                                    <td>
                                    {cust.name}
                                    </td>
                                    <td>
                                    {cust.phon_no}
                                    </td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Custumer;