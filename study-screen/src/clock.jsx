import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      colon: ':'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick();
        if (this.state.colon === ':') {
          this.setState({ colon: ' ' });
        } else if (this.state.colon === ' ') {
          this.setState({ colon: ':' });
        }
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const timely = this.state.date;
    return (
      <div className="center clock-container">
        <h1 className="text-align-center">
          {timely.getHours()}{this.state.colon}{timely.getMinutes()}{this.state.colon}{timely.getSeconds().toString().length === 1 ? '0' + timely.getSeconds().toString() : timely.getSeconds().toString()}
        </h1>
        <h1 className="text-align-center">
          {timely.toDateString()}
        </h1>
      </div>
    )
  }
}
