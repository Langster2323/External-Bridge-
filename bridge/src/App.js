import React, { Component } from 'react';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render(){
    return (
      <div className="App">
        <SideBar toggleSidebar={this.toggleSidebar} expanded={this.state.expanded} />
        <MainContent />
      </div>
    );
  }
  
}

export default App;
