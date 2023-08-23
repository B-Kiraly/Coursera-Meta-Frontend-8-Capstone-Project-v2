import { useState, useReducer } from "react"
import BookingForm from "../subcomponents/BookingForm"

export default function Booking() {

    let initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    let timesReducer = (state, action) => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    let [availableTimes] = useReducer(timesReducer, initializeTimes())

    const [reservationData, setReservationData] = useState({
        name: "",
        date: "",
        time: "",
        numGuests: 0,
        occasion: ""
    })

    return (
        <main className="booking">
            <h1 className="section-header">Reserve a Table</h1>
            <BookingForm
            reservationData={reservationData}
            setReservationData={setReservationData}
            availableTimes={availableTimes}
            />
        </main>
    )
}
