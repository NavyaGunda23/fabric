import React from 'react';
// import api from './src/icon-api.svg'
import './sidebar.css';


class Sidebar extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          selected_li: "apps",
        };
    }
    handleCheck = (e) => {
        this.setState({selected_li: e.currentTarget.dataset.id});
        this.props.active_li(this.state.selected_li);
        
    };
   
    render(){
        return(
            <div className="side-navigation">
                <ul>
                    <li >
                        <a className="icons kony-logo" href="true">
                            <i className="icon24 di-block icon-logo v-middle"></i>
                            <i className="icon-logo-text ml-15 di-block v-middle"></i>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="apps">
                        <a href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-apps"></i>
                            <span>Apps</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="api">
                        <a href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-api"></i>
                            <span>Api</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="devportal">
                        <a  href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-developer-portal"></i>
                            <span>Devportal Apps</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="environment">
                        <a  href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-environments"></i>
                            <span>Environment</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="reports">
                        <a  href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-reports"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="settings">
                        <a  href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-settings"></i> 
                            <span>Settings</span>
                        </a>
                    </li>
                    <li onClick={this.handleCheck} data-id="support">
                        <a href="#/">
                            <i className="icon24 di-block v-middle mr-20 icon-support"></i>
                            <span>Support</span>
                        </a>
                    </li>
                    <li className="product-name">
                        <a className="mb_title" href="#/">Quantum Fabric Console </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;