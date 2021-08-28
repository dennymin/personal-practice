import React from 'react';

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      description: '',
      date: ''
    }
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value})
  }

  handleDateChange(event) {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="center entry-container justifty-content-flex-start flex-wrap">
        <div className="justift-content-flex-start flex-wrap align-content-flex-start flex-basis-100">
          <label className="larger-label flex-basis-100" htmlFor="title">Title</label>
          <input onChange={this.handleTitleChange} className="margin-bottom-10px flex-basis-100 title-box" type="text" id="title"></input>
          <label className="larger-label flex-basis-100" htmlFor="date">Date</label>
          <input onChange={this.handleDateChange} className="margin-bottom-10px flex-basis-100 date-box" type="date" id="date"></input>
          <label className="larger-label flex-basis-100" htmlFor="description">Description</label>
          <textarea onChange={this.handleDescriptionChange} className="margin-bottom-10px flex-basis-100 description-box" id="description"></textarea>
        </div>
        <div className="flex-basis-100 justift-content-flex-end">
          <button>Submit</button>
        </div>
      </form>
    )
  }
}
