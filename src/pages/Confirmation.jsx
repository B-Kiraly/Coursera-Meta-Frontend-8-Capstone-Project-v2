import Homepage from "./Homepage"

export default function Confirmation({reservationData}) {

    if (!reservationData) {
        console.log("Confirmation page not accessible without reservationData object")
        return <Homepage />
    }

    return (
        <main>
            <h1>Transaction #{reservationData.id? reservationData.id : 123456} Confirmed!</h1>
            <h2>Type: Reservation</h2>
            <h3>Name: {reservationData.name? reservationData.name : "Name Error"}</h3>
            <h2>Occasion: {reservationData.occasion != "None"? reservationData.occasion : "Standard"}</h2>
            <h3>Time: {reservationData.time}</h3>
            <h3>We'll see you then!</h3>
        </main>
    )
}
