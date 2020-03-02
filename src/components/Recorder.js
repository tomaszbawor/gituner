import React from "react";

class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { freq: 0 };
  }

  onRecordClick = () => {
    const { freq } = this.state;
    this.setState({ freq: freq + 1 });
  };

  render() {
    const { freq } = this.state;
    return (
      <div>
        <h1>Frequency: {freq}</h1>
        <button type="button" onClick={this.onRecordClick}>
          Record
        </button>
      </div>
    );
  }
}

export default Recorder;
