export default function BookingForm({availableTimes, reservationData, setReservationData}) {
  return (
    <form
    style={{display: "grid", maxWidth: "200px", gap: "20px"}}
    className="booking__form"
    >

        <label htmlFor="res-name">Reservation Name</label>
        <input
        type="text"
        id="res-name"
        value={reservationData.name}
        onChange={e => {
            setReservationData({
                ...reservationData,
                name: e.target.value
            })
        }}
        />

        <label htmlFor="res-date">Choose date</label>
        <input
        type="date"
        id="res-date"
        value={reservationData.date}
        onChange={e => {
            setReservationData({
                ...reservationData,
                date: e.target.value
            })
        }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
        id="res-time"
        value={reservationData.time}
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
        value={reservationData.numGuests}
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
        value={reservationData.occasion}
        onChange={e => {
            setReservationData({
                ...reservationData,
                occasion: e.target.value
            })
        }}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Retirement</option>
        </select>

        <input
        type="submit"
        value="Make Your reservation"
        onClick={e => {
            e.preventDefault()
            console.log(reservationData)
        }}
        />
    </form>
  )
}
