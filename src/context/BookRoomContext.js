import axios, { useState, useEffect } from 'axios';
import { createContext } from 'react';

export const BookRoomContext = createContext();

export const RoomBookProvider = (props) => {
    const [book, setBook] = useState();
    
    useEffect(() => {
        axios.get("/my-booking").then(function (res) {
            console.log(res.data)
            setBook(res.data)
        })
    }, [])

    return (
        <BookRoomContext.Provider value={[book, setBook]}>
            {props.children}
        </BookRoomContext.Provider>
    )
}