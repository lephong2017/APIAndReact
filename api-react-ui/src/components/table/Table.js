
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
const API = 'http://nguyenphucthinhwebapi.azurewebsites.net';
const DEFAULT_QUERY = '/api/product/findall';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
              {
                 "id": 1,
                 "name": "nokia X",
                 "price": 30000,
                 "quantity": 20,
                 "status": true,
                 "idKind": 1
               }
            ]
        };
    };
    componentDidMount() {
      fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({ datas: data }));
    }
    render() {

        return (
            <div>
                <ReactTable data={this.state.datas}
                    columns={[
                        {
                            Header: "ID",
                            accessor: "id"
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Price",
                            accessor: "price"
                        },
                        {
                            Header: "Quantity",
                            accessor: "quantity"
                        },
                        {
                            Header: "Status",
                            accessor: "status"
                        },
                        {
                            Header: "IdKind",
                            accessor: "idKind"
                        }
                    ]}
                    // onFetchData={this.state.datas}
                    // onFetchData={(state, instance) => {
                    //     let request = new XMLHttpRequest();
                    //     request.open("GET", 'http://nguyenphucthinhwebapi.azurewebsites.net/api/product/findall', true);
                    //     request.send();
                    //     request.onload = function() {
                    //         if (request.status === 200) {
                    //             let response = JSON.parse(request.responseText);
                    //             let responseInfo = JSON.stringify(response);
                    //
                    //             this.setState({
                    //                 datas: responseInfo
                    //             })
                    //         }
                    //     }.bind(this);
                    // }}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    manual
                />
            </div>
        );
    }
}
export default Table;
