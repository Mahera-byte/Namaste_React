import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            //Never update State Variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2: {this.state.count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact: @Mahera-byte</h4>
      </div>
    );
  }
}
export default UserClass;
