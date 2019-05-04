import React from 'react'
import { connect } from 'react-redux'
import { editAction } from '../actions/contact'
import '../styles/EditForm.css'

class EditForm extends React.Component{
    render(){
        return(
            <form
                className="edit-form"
                onSubmit={
                    (e) => {
                        e.preventDefault()
                        const name = this.getName.value;
                        const number = this.getNumber.value

                        const payload = {
                            data: {
                                name,
                                number
                            },
                            index: this.props.i
                        }

                        console.log(payload)

                        this.props.dispatch(editAction(payload))

                    }
                }
            >

                <input type="text" name="name" placeholder="enter name" defaultValue={this.props.contact.data.name} ref={(input) => this.getName = input} />
                <input type="number" name="number" placeholder="enter number" defaultValue={this.props.contact.data.number} ref={(input) => this.getNumber = input} />

                <button className="cancel-button">
                    Cancel
                </button>

                <button type='submit' className="update-button">
                    Update
                </button>

            </form>
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


export default connect(mapStateToProps)(EditForm);