import { render, fireEvent, screen} from "@testing-library/react";
import BookingForm from "./subcomponents/BookingForm";

// General mocks / variables
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

let initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

let reservationData = {
  id: Math.ceil(Math.random() * 1000000),
  time: "",
  date: new Date(),
  name: "",
  Occasion: "",
  numGuests: 0
}

test('Renders the BookingForm heading', () => {
  const timeDispatch = () => {
    return 1+1
  }
  render(<BookingForm timesDispatch={timeDispatch} reservationData={reservationData}/>);
  const formLabels = ["Reservation Name", "Choose date", "Choose time", "Number of guests", "Occasion"]
  formLabels.forEach(labelText => {
    const labelElement = screen.getByText(labelText)
    expect(labelElement).toBeInTheDocument()
  })
})

test('The list of times gets passed into the component and they get rendered into options tags onscreen', () => {
  const timeDispatch = () => {
    initialTimes = [...initialTimes, "17:00"] // new item does not get rendered
  }
  render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData}/>);
  initialTimes.forEach(time => {
    const timeText = screen.getByText(time)
    expect(timeText).toBeInTheDocument()
  })
})

test('confirming that form HTML validation works properly', () => {
  let initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const timeDispatch = () => {
    initialTimes = [...initialTimes, "17:00"]
  }
  const {getByLabelText} = render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData} />)
  let submitButton = getByLabelText("submit-button")
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toBeDisabled()
})
