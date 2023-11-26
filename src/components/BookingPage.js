import BookingForm from "./BookingForm";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "../assets/mockAPI";

function BookingPage() {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    if (month < 10) month = '0' + month
    let year = newDate.getFullYear();
    newDate = year + "-" + month + "-" + day;

    const [isLoaded, setIsLoaded] = useState(false);

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'new_available_times': {
                return {
                    ...state,
                    availableTimes: action.newAvailableTimes,
                    time: action.newAvailableTimes[0]
                }
            }
            case 'date_change': {
                return {
                    ...state,
                    date: action.newDate
                }
            }
            case 'time_change': {
                return {
                    ...state,
                    time: action.newTime
                }
            }
            default: {
                return state;
            }
        }
    }

    const initialValues = {date: newDate, availableTimes: ["No times available."], time: "No times available."}
    const [state, dispatch] = useReducer(updateTimes, initialValues);

    const initializeTimes = (date) => {
        fetchAPI(date)
            .then(response => dispatch({type: 'new_available_times', newAvailableTimes: response}))
    }

    useEffect(() => {
        initializeTimes(state.date);
        setIsLoaded(true);
    }, [state.date]);

    return (
        <section className="booking">
            <h1 id="booking-section">Reserve a table</h1>
            {isLoaded &&
                (<BookingForm
                    date = {state.date}
                    availableTimes={state.availableTimes}
                    time={state.time}
                    dispatch={dispatch}
                    initializeTimes = {initializeTimes}
                />)
            }
        </section>
    );
}

export default BookingPage;