import React, { Component } from "react";

const EventCalendar = require('react-event-calendar');
 
    const events = [
        {
            start: '2020-07-20',
            end: '2020-07-20',
            eventClasses: 'optionalEvent',
            title: 'test event',
            description: 'This is a test description of an event',
        },
        {
            start: '2020-07-19',
            end: '2020-07-25',
            title: 'test event',
            description: 'This is a test description of an event',
            data: 'you can add what ever random data you may want to use later',
        },
    ];

class EventsPage extends Component {
    render() {
        return (
            <div>
                <EventCalendar
                    month={7}
                    year={2020}
                    events={events}
                    onEventClick={(target, eventData, day) => console.log(eventData)
                    }/>
            </div>
        )
    }
}

export default EventsPage;