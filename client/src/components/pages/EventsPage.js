import React from "react";
import Events from '../Events';
import Calendar from '../Calendar';



class EventsPage extends React.Component {

    state = {
        isHidden: true
    }

    FindEvents = event => {
        event.preventDefault();
        if (this.state.isHidden) {
            this.setState({isHidden:false})
        } else {
            this.setState({isHidden:true})
        }
    }

    render () {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Events Near You</h1>
                <p>
                    Find an adoption event near you and bring home your new best friend!
          Just input your zip code and select a date to use the event finder then go meet Fluffy!{" "}
                </p>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter Zip Code"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {this.FindEvents}>
                    Find Events
                </button>
            </form>
            <Calendar />
            {this.state.isHidden ?(""):(<Events />)}
        </div>
    );
}
}

export default EventsPage;