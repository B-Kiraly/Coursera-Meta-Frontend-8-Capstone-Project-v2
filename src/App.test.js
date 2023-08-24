import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./subcomponents/BookingForm";

test('Renders the BookingForm heading', () => {
  const timeDispatch = () => {
    return 1+1
  }
  render(<BookingForm timesDispatch={timeDispatch}/>);
  const formLabels = ["Reservation Name", "Choose date", "Choose time", "Number of guests", "Occasion"]
  formLabels.forEach(labelText => {
    const labelElement = screen.getByText(labelText)
    expect(labelElement).toBeInTheDocument()
  })
})

test('testing to see that the expected times appear in the rendered', () => {
  let initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const timeDispatch = () => {
    initialTimes = [...initialTimes, "17:00"]
  }
  render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch}/>);
  initialTimes.forEach(time => {
    const timeText = screen.getByText(time)
    expect(timeText).toBeInTheDocument()
  })
})
