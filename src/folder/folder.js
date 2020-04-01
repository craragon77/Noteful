import React, {Component} from 'react';
import Note from '../note/note';
import {Route} from 'react-router-dom';

class Folder extends Component{
    render(){
        return(
            <div>
                <header>
                    <h1>Folder</h1>
                </header>
                <main>
                    <ul>
                        {this.props.store.folders.map((item) => {
                        return(
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <Route path='/' component={Note} store={this.props.store} />
                        </li>
                        )
                    })
                    }
                        
                    </ul>
                    
                </main>
            </div>
        )
    }
}

export default Folder