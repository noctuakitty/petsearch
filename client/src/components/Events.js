import React from 'react';

const events = [
    {
        start: '2020-07-20',
        end: '2020-07-20',
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
    {
        start: '2020-07-19',
        end: '2020-07-25',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
    {
        start: '2020-07-19',
        end: '2020-07-25',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
    {
        start: '2020-07-19',
        end: '2020-07-25',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
    {
        start: '2020-07-19',
        end: '2020-07-25',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
    {
        start: '2020-07-19',
        end: '2020-07-25',
        title: 'test event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloribus velit aperiam earum accusamus unde totam alias necessitatibus expedita cum ad fugiat soluta ab sit aliquid magnam in quisquam? Maiores.',
    },
];

console.log(events);

function Events() {
    return (
        <div class= "container">
            <div class="card">
                <p>
                    {events[0].start}
                </p>
                <p>
                    {events[0].end}
                </p>
                <p>
                    {events[0].title}
                </p>
                <p>
                    {events[0].description}
                </p>
            </div>
            <div class="card">
                <p>
                    {events[1].start}
                </p>
                <p>
                    {events[1].end}
                </p>
                <p>
                    {events[1].title}
                </p>
                <p>
                    {events[1].description}
                </p>
            </div>
        </div>

    )
}

export default Events;
