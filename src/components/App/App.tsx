import React from 'react';
import { useFetch } from '../../hooks/common/useFetch';
import Page from '../../model/pageable/Page';
import SkudEventDisplay from '../../model/SkudEventDisplay';
import './App.scss';

const App: React.FC = () => {
    const { loading, data, error } = useFetch<Page<SkudEventDisplay>>(
        'http://localhost:8080/api/admin/skud',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log('error', error);
        return <div>ERROR</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
};

export default App;
