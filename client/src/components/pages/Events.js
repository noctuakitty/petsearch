import React, { Component } from "react";
import Calendar from "./../Calendar";
import EventsPage from "../EventsPage";

class Events extends Component {
    render() {
        return (
            <div>
                <EventsPage />
                <Calendar />
            </div>
        )
    }
}

export default Events;