import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import Api from './api';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected_li: ''
    }
    this.selectedModule = this.selectedModule.bind(this);
  }
  selectedModule(val) {
    this.setState({ selected_li: val });
  }


  render(){
    return (
      <div>
          <Sidebar active_li={this.selectedModule}/>
          <Api />
             <p className="ml-60">{this.state.selected_li}</p> 
      </div>
    );
  }
}

export default App;
