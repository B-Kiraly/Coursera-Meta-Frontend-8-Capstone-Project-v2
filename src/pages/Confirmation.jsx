import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Confirmation() {

    const navigate = useNavigate()
    const {state} = useLocation()

    const reservationData = state

    useEffect(() => {
        if (!reservationData) {
            console.log("Confirmation page not accessible without reservationData object")
            navigate("/")
        }
    }, [navigate, reservationData])


    return (
        <main className="confirmation">
            <div className="container confirmation__container">
                <h1 className="confirmation__header section-subheader">
                    Reservation #{reservationData?.id? reservationData.id : "Error"} Confirmed!
                </h1>
                <p className="confirmation__field">
                    Name: <em className="confirmation__data">{reservationData?.name? reservationData.name : "Name Error"}</em>
                </p>
                <p className="confirmation__field">
                    Occasion: <em className="confirmation__data">{reservationData?.occasion? reservationData.occasion === "None"? "Standard": reservationData.occasion : "error"}</em>
                </p>
                <p className="confirmation__field">
                    Date: <em className="confirmation__data">{reservationData?.date? reservationData.date.toISOString().split("T")[0] : "Date error"}</em>
                </p>
                <p className="confirmation__field">
                    Time: <em className="confirmation__data">{reservationData?.time? reservationData.time : "time error"}</em>
                </p>
                <p className="confirmation__field">
                    <em className="confirmation__data">We will see you then!</em>
                </p>
            </div>
        </main>
    )
}
