import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class MainContent extends Component {
    render() {
        return (
            <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}>
                <NavBar />
                <div className="container">
                    <div className="module--full"></div>
                    <div className="module-wrapper">
                        <div className="module--half"></div>
                        <div className="module--half"></div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default MainContent;