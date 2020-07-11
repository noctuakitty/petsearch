import React from "react";
import Calendar from "../Calendar";
import Events from '../Events';


function EventsPage() {
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
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Find Events
        </button>
            </form>
            <Calendar />
            <Events />
        </div>
    );
}
export default EventsPage;