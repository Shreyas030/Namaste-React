import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);

        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <div className="user-card">
                <h1>Count:{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }
                }>Increase the count</button>
                <h2>Name : {this.props.name}</h2>
                <h3>Age : 20</h3>
                <h3>Loacation:Rajpura</h3>
                <h3>Contact:  @shreyas30_</h3>
            </div>
        )
    }
}

export default UserClass;