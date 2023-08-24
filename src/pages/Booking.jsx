import { useState, useReducer } from "react"
import BookingForm from "../subcomponents/BookingForm"
import About from "../components/About";

export default function Booking() {

    const [reservationData, setReservationData] = useState({
        id: Math.ceil(Math.random() * 1000000),
        name: "",
        date: new Date(),
        time: "",
        numGuests: 0,
        occasion: ""
    })

    // following two functions allegedly correspond to the broken api's code
    const seededRandom = seed => {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let s = seed % m;
        return () => (s = s * a % m) / m;};

    const fetchAPI = date => {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if (random() < 0.5) result.push(i + ':00');
            if(random() < 0.5) result.push(i + ':30');
        }

        return result;
        };

    // ------------------------------------------------------------------

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
            <h1 className="section-header" onClick={() => timesReducer("hey", "now")}>Reserve a Table</h1>
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
