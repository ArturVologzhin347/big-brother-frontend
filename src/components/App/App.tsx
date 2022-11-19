import React, { useEffect, useState } from 'react';
import SkudEventDisplay from '../../model/SkudEventDisplay';
import EventList from '../eventList/EventList';
import './App.scss';

const fetchSkudEvents = (callback: (events: SkudEventDisplay[]) => void): void => {
    useEffect(() => {});
};

const App: React.FC = () => {
    const [events, setEvents] = useState<SkudEventDisplay[]>([]);

    fetchSkudEvents(events => {
        setEvents(events);
    });

    return (
        <div>
            <EventList events={events} />
        </div>
    );
};

export default App;
