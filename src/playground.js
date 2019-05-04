import React from 'react';
import { connect } from 'react-redux'
import { addAction, deleteAction, editAction, setAction } from './actions/contact'
import { searchAction } from './actions/search'
import Action from './components/Action'
import { open } from './actions/edit'

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

    //just before the component goes away
    componentWillUnmount = () => {
        // console.log("component unmounted!")

    }

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


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Contact App</h1>
                </header>

                <div>
                    <input
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



                    <button>
                        Add Contact
                    </button>

                    {
                        this.props.matched.length > 0 ?
                            (
                                this.props.matched.map((contact, i) => (
                                    <div key={i}>
                                        <p>{contact.data.name}</p>
                                        <p>{contact.data.number}</p>
                                    </div>
                                ))
                            ) : (
                                <p>no match found!</p>
                            )
                        // console.log(this.props.matched[0])
                    }

                    <div>
                        <form
                            onSubmit={this.onadd}
                        >
                            <input type="text" name="name" ref={(input) => this.getName = input} placeholder="enter name" />
                            <input type="number" name="number" ref={(input) => this.getNumber = input} placeholder="enter number" />

                            <button>
                                Cancel
                            </button>

                            <button type='submit'>
                                Add
                            </button>

                        </form>
                    </div>
                </div>

                <div>
                    {
                        this.props.contactstate.length > 0 ?
                            (
                                this.props.contactstate.map((contact, i) => (
                                    <div key={i}>

                                        <div>
                                            <p>{contact.data.name}</p>
                                            <p>{contact.data.number}</p>
                                        </div>

                                        <button onClick={
                                            (e) => {
                                                e.preventDefault()
                                                console.log("editing " + i)
                                                // console.log("app : "+i)
                                                this.props.dispatch(open(i))
                                            }
                                        } >
                                            Edit
                                        </button>

                                        <button onClick={
                                            (e) => {
                                                e.preventDefault()
                                                console.log("deleting " + i)
                                                this.props.dispatch(deleteAction(i))
                                            }
                                        } >
                                            Delete
                                        </button>

                                        {
                                            this.props.contactstate[i].edit &&
                                            <form
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
                                                            index: i
                                                        }

                                                        console.log(payload)

                                                        this.props.dispatch(editAction(payload))

                                                    }
                                                }
                                            >

                                                <input type="text" name="name" placeholder="enter name" defaultValue={contact.data.name} ref={(input) => this.getName = input} />
                                                <input type="number" name="number" placeholder="enter number" defaultValue={contact.data.number} ref={(input) => this.getNumber = input} />

                                                <button>
                                                    Cancel
                                            </button>

                                                <button type='submit'>
                                                    Update
                                            </button>

                                            </form>
                                        }
                                    </div>
                                ))


                            )
                            : (<p>No Contact Available</p>)
                    }

                </div>

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
