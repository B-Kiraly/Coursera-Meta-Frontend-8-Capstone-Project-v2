import { useState, useReducer } from "react"
import BookingForm from "../subcomponents/BookingForm"

export default function Booking() {

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    const updateTimes = () => {
        return ["15:00", "17:00", "18:00", "20:00", "21:00"]
    }

    function timesReducer(state, action) {
        switch (action.type) {
            case "initialize":
                return initializeTimes()
            case "update":
                return updateTimes()
            default:
                return state;
        }
    }

    let [availableTimes, timesDispatch] = useReducer(timesReducer, [])

    const [reservationData, setReservationData] = useState({
        name: "",
        date: "",
        time: "",
        numGuests: 0,
        occasion: ""
    })

    return (
        <main className="booking">
            <h1 className="section-header" onClick={() => timesReducer("hey", "now")}>Reserve a Table</h1>
            <BookingForm
            reservationData={reservationData}
            setReservationData={setReservationData}
            availableTimes={availableTimes}
            timesDispatch={timesDispatch}
            />
        </main>
    )
}
