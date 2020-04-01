import React, {Component} from 'react';
import Folder from './folder/folder';
import {Route} from 'react-router-dom';
//import NotFoundPage from './NotFoundPage'

export default class App extends Component{
  render(){
    return (
      <div>
        <header>
          <h1 className="header">Noteful</h1>
        </header>
        <main className="folder-container">
          <Route path = '/folder' render={(routeProps) => {
            return <Folder store={this.props.store} {...routeProps} />;
          }}/>
        </main>
      </div>
    );
  }
}

