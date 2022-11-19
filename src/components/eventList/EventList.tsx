import React from 'react';
import SkudEventDisplay from '../../model/SkudEventDisplay';
import EventListItem from './eventListItem/EventListItem';

interface Props {
    events: SkudEventDisplay[];
}

const EventList: React.FC<Props> = ({ events }) => {
    return (
        <div>
            {events.map((event, index) => {
                return <EventListItem event={event} key={index}></EventListItem>;
            })}
        </div>
    );
};

export default EventList;
