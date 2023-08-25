import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function BookingForm({availableTimes, timesDispatch, reservationData, setReservationData}) {

    const navigate = useNavigate()

    useEffect(() => {
        if (reservationData.date) {
            timesDispatch({type: "update"})
        }

    }, [timesDispatch, reservationData])

    return (
        <form
        className="booking__form"
        >
            <h1 className="section-header">Reserve a Table</h1>

            <label htmlFor="res-name">Reservation Name</label>
            <input
            type="text"
            id="res-name"
            style={reservationData?.name? {outline: "3px solid lightgreen"} : {}}
            value={reservationData?.name}
            onChange={e => {
                setReservationData({
                    ...reservationData,
                    name: e.target.value
                })
            }}
            />

            <label htmlFor="res-date">Choose date</label>
            <input
            required
            type="date"
            id="res-date"
            style={reservationData?.date? {outline: "3px solid lightgreen"} : {}}
            value={reservationData?.date? reservationData.date.toISOString().split("T")[0] : ""}
            onChange={e => {
                if (e.target.value) {
                    let dateObj = new Date(e.target.value)
                    console.log(e.target.value)
                    setReservationData({
                        ...reservationData,
                        date: dateObj,
                        time: ""
                    })
                }
            }}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
            id="res-time"
            value={reservationData?.time? reservationData.time : ""}
            style={reservationData?.time? {outline: "3px solid lightgreen"} : {}}
            onChange={e => {
                setReservationData({
                    ...reservationData,
                    time: e.target.value
                })
            }}
            >
                {availableTimes?.map(time => {
                    return(<option key={Math.random()}>{time}</option>)
                })}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            style={reservationData?.numGuests? {outline: "3px solid lightgreen"} : {}}
            value={reservationData?.numGuests}
            onChange={e => {
                setReservationData({
                    ...reservationData,
                    numGuests: e.target.value
                })
            }}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            style={reservationData?.date? {outline: "3px solid lightgreen"} : {}}
            value={reservationData?.occasion}
            onChange={e => {
                setReservationData({
                    ...reservationData,
                    occasion: e.target.value
                })
            }}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Retirement</option>
            </select>

            <input
            type="submit"
            value="Make Your reservation"
            className="button--standard"
            aria-label="submit-button"
            disabled={!reservationData.name || !reservationData.date || !reservationData.time || !reservationData.numGuests || !reservationData.occasion}
            onClick={e => {
                e.preventDefault()
                console.log(reservationData)
                if (reservationData.name && reservationData.date && reservationData.time && reservationData.numGuests && reservationData.occasion) {
                    console.log("Submit conditions have been reached")
                    navigate("/confirmation", {state: reservationData})
                }
            }}
            />
        </form>
    )
}
