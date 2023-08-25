import { render, fireEvent, screen, getByLabelText} from "@testing-library/react";
import BookingForm from "./subcomponents/BookingForm";

// General mocks / variables
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const formLabels = ["Reservation Name", "Choose date", "Choose time", "Number of guests", "Occasion"]

let initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const timeDispatch = () => {
  initialTimes = [...initialTimes]
}

let reservationData = {
  id: Math.ceil(Math.random() * 1000000),
  time: "",
  date: new Date(),
  name: "",
  Occasion: "",
  numGuests: 0
}

// Tests

test('Renders the BookingForm heading', () => {
  render(<BookingForm timesDispatch={timeDispatch} reservationData={reservationData}/>);
  formLabels.forEach(labelText => {
    const labelElement = screen.getByText(labelText)
    expect(labelElement).toBeInTheDocument()
  })
})

test('The list of times gets passed into the component and they get rendered into options tags onscreen', () => {
  render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData}/>);
  initialTimes.forEach(time => {
    const timeText = screen.getByText(time)
    expect(timeText).toBeInTheDocument()
  })
})

test('confirming that form HTML validation works properly', () => {
  const {getByLabelText} = render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData} />)
  let submitButton = getByLabelText("submit-button")
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toBeDisabled()
})

test('confirming that range function minimum and maximum are set and working properly', () => {
  const {getByLabelText} = render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData} />)
  let rangeInput = getByLabelText("Number of guests")
  expect(rangeInput).toBeInTheDocument()
  expect(rangeInput.getAttribute("min")).toBe("1")
  expect(rangeInput.getAttribute("placeholder")).toBe("1")
  expect(rangeInput.getAttribute("max")).toBe("10")
})

test("Confirming all form fields possessed the required attribute", () => {
  const {getByLabelText} = render(<BookingForm availableTimes={initialTimes} timesDispatch={timeDispatch} reservationData={reservationData} />)
  formLabels.forEach(label => {
    let formField = getByLabelText(label)
    expect(formField).toHaveAttribute("required")
  })
})
