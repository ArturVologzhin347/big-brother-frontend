import React from 'react';
import SkudEventDisplay from '../../../model/SkudEventDisplay';

interface Props {
    event: SkudEventDisplay;
}

const EventListItem: React.FC<Props> = ({ event }) => {
    return (
        <div>
            <p>
                `${event.id} - ${event.type} - ${event.student.name} ${event.student.surname} - $
                {event.timestamp}`
            </p>
        </div>
    );
};

export default EventListItem;
