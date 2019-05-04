import React from 'react'
import { connect } from 'react-redux'
import { open } from '../actions/edit'
import { deleteAction } from '../actions/contact'
import '../styles/ContactAction.css'

class ContactAction extends React.Component{
    render(){
        return(
            <div className="contactAction">
                <button
                    className="edit-button" 
                    onClick={
                    (e) => {
                        e.preventDefault()
                        console.log("editing " + this.props.i)
                        // console.log("app : "+this.props.i)
                        this.props.dispatch(open(this.props.i))
                    }
                } >
                    Edit
                </button>

                <button 
                    className="delete-button"
                    onClick={
                    (e) => {
                        e.preventDefault()
                        console.log("deleting " + this.props.i)
                        this.props.dispatch(deleteAction(this.props.i))
                    }
                } >
                    Delete
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contactstate: state.contactstate,
        editform: state.editform,
        matched: state.search
    }
}


export default connect(mapStateToProps)(ContactAction);
