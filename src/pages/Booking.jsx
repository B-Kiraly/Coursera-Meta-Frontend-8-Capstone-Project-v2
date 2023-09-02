import { useState, useReducer } from "react"
import BookingForm from "../subcomponents/BookingForm"
import About from "../components/About";
import { fetchAPI } from "../utils/reservationAPI";

export default function Booking() {

    const [reservationData, setReservationData] = useState({
        id: Math.ceil(Math.random() * 1000000),
        name: "",
        date: new Date(),
        time: "",
        numGuests: 0,
        occasion: "None"
    })

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    function timesReducer(state, action) {
        switch (action.type) {
            case "initialize":
                return initializeTimes()
            case "updateStatic":
                return ["15:00", "17:00", "18:00", "20:00", "21:00"]
            case "update":
                return fetchAPI(reservationData.date)
            default:
                return state;
        }
    }

    let [availableTimes, timesDispatch] = useReducer(timesReducer, [])

    return (
        <main className="booking">
            <BookingForm
            reservationData={reservationData}
            setReservationData={setReservationData}
            availableTimes={availableTimes}
            timesDispatch={timesDispatch}
            />
            <About />
        </main>
    )
}
