import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
      },
      {
        id: 2,
        name: "Jones",
        phone: "982-014",
        address: { city: "New Jersy" },
      },
      { id: 3, name: "Allen", phone: "889-921", address: { city: "London" } },
      { id: 4, name: "James", phone: "552-901", address: { city: "Berlin" } },
      { id: 5, name: "John", phone: "781-778", address: { city: "New York" } },
    ],
  };
  // state={name:abhishek}


  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((must) => {
              return (
                <tr key={must.id}>
                  <td>{must.id}</td>
                  <td>{must.name}</td>
                  <td>{must.phone}</td>
                  <td>{must.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
