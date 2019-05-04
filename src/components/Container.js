import React from 'react'
import { connect } from 'react-redux'
import EditForm from './EditForm'
import ContactAction from './ContactAction'
import '../styles/Container.css'

class Container extends React.Component {
    render(){
        return(
            <div className="container">
                {
                    this.props.contactstate.length > 0 ?
                        (
                            this.props.contactstate.map((contact, i) => (
                                <div key={i} className="container-single">

                                    <div className="contact-detail">
                                        <p className="contact-name">{contact.data.name}</p>
                                        <p className="contact-number">{contact.data.number}</p>
                                    </div>

                                    <ContactAction i={i}/>

                                    {
                                        this.props.contactstate[i].edit &&
                                        <EditForm contact={contact} i={i}/>
                                    }
                                </div>
                            ))


                        )
                        : (<p className="error-messege">No Contact Available</p>)
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


export default connect(mapStateToProps)(Container);
