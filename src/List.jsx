import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      value: ""
    });

    this.props.addFunction(this.state.value);
    event.preventDefault();
  }

  editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
      return this.state.currList.filter(currList => currList.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  deleteItem(id) {
    //console.log(id);
    const list = [this.state.currList];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ currList: updatedList });
  }

  render() {
    return (
      <div className="col-6 mx-auto">
        {/*Replace the code below to call the title prop*/}
        <p className="h2">{this.props.title}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{this.props.title}
          <br></br>
          <input type='text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search...'/>
          </div>
          {this.props.currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {" "
              /* 
              console.log(this.props.currList.dynamicSearch)
              console.log(item.dynamicSearch)
              console.log(item)
              */
              }
              { item }
              {" "}
              <button onClick={() => this.deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
