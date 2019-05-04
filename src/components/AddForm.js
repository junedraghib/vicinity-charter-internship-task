import React from 'react'
import { addAction } from '../actions/contact'
import { connect } from 'react-redux'
import '../styles/AddForm.css'

class AddForm extends React.Component{
    
    onadd = (e) => {
        e.preventDefault()
        const name = this.getName.value;
        const number = this.getNumber.value;

        const data = {
            name,
            number
        }

        this.props.dispatch(addAction(data))

        e.target.elements.name.value = ''
        e.target.elements.number.value = ''

    }
    
    render(){
        return(
            <div className="addform">
                <form
                    onSubmit={this.onadd}
                >
                    <input type="text" name="name" ref={(input) => this.getName = input} placeholder="enter name" />
                    <input type="number" name="number" ref={(input) => this.getNumber = input} placeholder="enter number" />

                    <button onClick={
                        (e) => {
                            e.preventDefault()
                        }
                    }>
                        Cancel
                    </button>

                    <button type='submit'>
                        Add
                    </button>

                </form>
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


export default connect(mapStateToProps)(AddForm);