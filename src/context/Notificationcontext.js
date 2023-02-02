import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
    const [book, setBook] = useState();

    useEffect(() => {
        axios.get(`/my-booking`).then(function (result) {
            setBook(result?.data)
        })
    }, [])

    return (
        <NotificationContext.Provider value={[book, setBook]}>
            {props.children}
        </NotificationContext.Provider>
    )
}