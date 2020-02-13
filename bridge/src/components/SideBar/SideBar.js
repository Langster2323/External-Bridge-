import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className={this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"} 
            onClick={this.props.toggleSidebar}>
                <span className="shape"></span>
                <span className="shape"></span>
            </div>
        )
    }
}

export default SideBar;