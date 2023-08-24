import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Confirmation() {

    const navigate = useNavigate()
    const {state} = useLocation()

    console.log('welcome to the confirmation page, here is the location')
    console.log(state)

    const reservationData = state

    useEffect(() => {
        if (!reservationData) {
            console.log("Confirmation page not accessible without reservationData object")
            navigate("/")
        }
    }, [])



    return (
        <main className="confirmation">
            <h1>Transaction #{reservationData?.id? reservationData.id : 123456} Confirmed!</h1>
            <h2>Type: Reservation</h2>
            <h3>Name: {reservationData?.name? reservationData.name : "Name Error"}</h3>
            <h3>Occasion: {reservationData?.occasion? reservationData.occasion === "None"? "Standard": reservationData.occasion : "error"}</h3>
            <h3>Date: {reservationData?.date? reservationData.date.toISOString().split("T")[0] : "Date error"}</h3>
            <h3>Time: {reservationData?.time? reservationData.time : "time error"}</h3>
            <h3>We'll see you then!</h3>
        </main>
    )

    return (
        <h1>woooow what a fancy page</h1>
    )
}
