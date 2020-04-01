import React, {Component} from 'react'

class Note extends Component{
    render(){
        return(
           <div>
            <nav>
            </nav>
            
                {this.props.store.notes.map((note) =>{
                    return(
                        <li id={note.id}>
                        <h4>{note.name}</h4>
                        <p>Last Modified: {note.modified}</p>
                        <p>{note.content}</p>
                        <button>Delete Now! (its not wired don't click)</button>
                    </li>
                    )
                })}
            </div>
            
            
        )
    }
}

export default Note