import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
import {
  Button,
  FormLabel,
  Input,
  Select,
  VStack
} from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { fetchAPI } from "../assets/mockAPI";
// import * as Yup from 'yup';

const BookingForm = (props) => {
    // State of each field
    // const [date, setDate] = useState(props.date)
    // const [time, setTime] = useState(props.availableTimes[0])
    const [guests, setGuests] = useState(1);
    //const [occasion, setOccasion] = useState("Birthday");

    const numbersofGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const listAvailableTimes = props.availableTimes.map((time) => {
        return (
            <option value={time.slice(0,2)}>{time}</option>
        )
    })

    const listNumbersofGuests = numbersofGuests.map((guestsNumber) => {
        return (
            <option value={guestsNumber}>{guestsNumber}</option>
        )
    })

    const {isLoading, response } = useSubmit();
    const { onOpen } = useAlertContext();

    // const formik = useFormik({
    //     initialValues: {
    //         date: props.date,
    //         time: props.time,
    //         guests: guests
    //     },
    //     onSubmit: (values) => {
    //         submitAPI(values)
    //         submit("", values);
    //         fetchAPI(props.date)
    //             .then(response => props.dispatch({type: 'new_available_times', newAvailableTimes: response}))
    //     },
    //     validationSchema: Yup.object({
    //         time: Yup
    //         .string()
    //         .max(5, "No available times")
    //     })
    // });

    const clearForm = () => {
        props.dispatch({type: "time_change", newTime: props.availableTimes[0]});
        setGuests(1);
        // setOccasion("Birthday");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submitAPI({date: props.date, time: props.time, guests: guests})
        // submit("", {date: props.date, time: props.time, guests: guests})
        props.submitForm({date: props.date, time: props.time, guests: guests});
        fetchAPI(props.date)
            .then(response => props.dispatch({type: 'new_available_times', newAvailableTimes: response}))
    }

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === "success")
                clearForm();
        }
    // eslint-disable-next-line
    }, [response]);

    return (
        <form onSubmit={handleSubmit}>
            <VStack className="stack" bg="#495E57" color="#EDEFEE" spacing={0}>
                <div className="date">
                    <FormLabel
                        className="top-label"
                        htmlFor="date"
                        bg="#495E57"
                        color="#EDEFEE"
                        iconColor="#EDEFEE"
                    >
                        Choose date
                    </FormLabel>
                    <Input
                        id="date"
                        type="date"
                        aria-label="Date"
                        value={props.date}
                        borderColor="#EDEFEE"
                        color="#EDEFEE"
                        size='lg'
                        fontSize='1.2vw'
                        onChange={(e) => props.dispatch({type: "date_change", newDate: e.target.value}) && props.initializeTimes}
                    />
                </div>
                <div className="time">
                    <FormLabel
                        className="top-label"
                        htmlFor="time"
                        bg="#495E57"
                        color="#EDEFEE"
                    >
                        Choose time
                    </FormLabel>
                    <Select
                        id="time"
                        name="time"
                        aria-label="Time"
                        value={props.time}
                        bg="#495E57"
                        size='lg'
                        fontSize='1.2vw'
                        onChange={(e) => props.dispatch({type: "time_change", newTime: String(e.target.value)})}
                    >
                        {listAvailableTimes.length !== 0 ?
                            listAvailableTimes :
                            document.getElementById("time").value = <option>No available times for the selected date.</option>
                        }
                    </Select>
                </div>
                <div className="guests">
                    <FormLabel
                        className="bottom-label"
                        htmlFor="guests"
                        bg="#495E57"
                        color="#EDEFEE"
                    >
                        Number of guests
                    </FormLabel>
                    <Select
                        iconColor="#EDEFEE"
                        id="guests"
                        name="guests"
                        aria-label="Guests"
                        bg="#495E57"
                        size='lg'
                        fontSize='1.2vw'
                        onChange={(e) => setGuests(e.target.value)}
                    >
                        {listNumbersofGuests}
                    </Select>
                </div>
                <div className="guests">
                    <FormLabel
                        className="bottom-label"
                        htmlFor="guests"
                        bg="#495E57"
                        color="#EDEFEE"
                        size='lg'
                        fontSize='1.2vw'
                    >
                        Occasion
                    </FormLabel>
                    <Select
                        id="occasion"
                        name="occasion"
                        aria-label="Occasion"
                        bg="#495E57"
                        borderColor="#EDEFEE"
                        color="#EDEFEE"
                        size='lg'
                        fontSize='1.2vw'
                        //  onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </Select>
                </div>
                <Button id="button" className="button" type="submit" width="full" isLoading={isLoading} height='70%'>
                    Make your reservation
                </Button>
            </VStack>
        </form>
    );
};

export default BookingForm;