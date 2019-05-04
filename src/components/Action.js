import React from 'react'
import { searchAction } from '../actions/search'
import { connect } from 'react-redux'
import AddForm from './AddForm'
import '../styles/Action.css'

class Action extends React.Component {
    
    render(){
        return(
            <div className="action">
                <div >
                    <AddForm />
                    <div className="action-bar">
                        <input
                            className="action-search"
                            type="text"
                            placeholder="search..."
                            ref={(input) => this.getSearch = input}
                            onChange={
                                (e) => {
                                    const text = this.getSearch.value;
                                    const payload = {
                                        contacts: this.props.contactstate,
                                        text
                                    }
                                    this.props.dispatch(searchAction(payload))
                                    console.log(payload)

                                }
                            }
                        />

                        <button 
                            className="action-add"
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    const addform = document.getElementsByClassName("addform")
                                    console.log(addform)
                                    addform.className = "hidden";
                                }
                            }    
                        >
                            Add Contact
                        </button>
                    </div>
                </div>

                {
                    this.props.matched.length > 0 ?
                        (
                            this.props.matched.map((contact, i) => (
                                <div key={i} className="matched-contact">
                                    <p className="contact-name">{contact.data.name}</p>
                                    <p className="contact-number">{contact.data.number}</p>
                                </div>
                            ))
                        ) : (
                            <p className="error-messege">no match found!</p>
                        )
                    // console.log(this.props.matched[0])
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("search state : " + selectMatched(state.contactstate, state.search))

    return {
        contactstate: state.contactstate,
        editform: state.editform,
        matched: state.search
    }
}


export default connect(mapStateToProps)(Action);
