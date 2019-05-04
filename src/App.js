import React from 'react';
import { connect } from 'react-redux'
import {setAction} from './actions/contact'
import Action from './components/Action'
import Container from './components/Container'
import './App.css'

class Contacts extends React.Component {

    // when component mounted for the first time
    componentDidMount = () => {
        console.log("component mounted!!")
        try {
            const contacts = JSON.parse(localStorage.getItem('contacts'))
            if (contacts) {
                this.props.dispatch(setAction(contacts))
            }
        } catch (error) {
            console.log(error)
        }

    }

    //when component is updated
    componentDidUpdate = (prevProps) => {
        if (prevProps.contactstate.length !== this.props.contactstate.length) {
            localStorage.setItem('contacts', JSON.stringify(this.props.contactstate))
        }

        console.log("component updated!!")
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Contact App</h1>
                </header>
                <Action />
                <Container />
            </div>
        );
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


export default connect(mapStateToProps)(Contacts);
