import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Button,
  FormLabel,
  Input,
  Select,
  VStack
} from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const BookingForm = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month
    let year = date.getFullYear();
    date = year + "-" + month + "-" + day;

    const formik = useFormik({
        initialValues: {
            date: date,
            time: '17:00',
            guests: '1',
            occasion: 'birthday'
        },
        onSubmit: (values) => {
            submit("", values);
        }
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === "success")
                formik.resetForm();
        }
    // eslint-disable-next-line
    }, [response]);

    return (
        <form onSubmit={formik.handleSubmit}>
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
                        {...formik.getFieldProps("date")}
                        id="date"
                        type="date"
                        borderColor="#EDEFEE"
                        color="#EDEFEE"
                        size='lg'
                        fontSize='1.2vw'
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
                        bg="#495E57"
                        size='lg'
                        fontSize='1.2vw'
                    >
                        <option value="17">17:00</option>
                        <option value="18">18:00</option>
                        <option value="19">19:00</option>
                        <option value="20">20:00</option>
                        <option value="21">21:00</option>
                        <option value="22">22:00</option>
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
                        bg="#495E57"
                        size='lg'
                        fontSize='1.2vw'
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
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
                        bg="#495E57"
                        borderColor="#EDEFEE"
                        color="#EDEFEE"
                        size='lg'
                        fontSize='1.2vw'
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </Select>
                </div>
                <Button className="button" type="submit" width="full" isLoading={isLoading} height='70%'>
                    Make your reservation
                </Button>
            </VStack>
        </form>
    );
};

export default BookingForm;