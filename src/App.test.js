import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';

describe("Feedback Form", () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElementHome = screen.getByText("Home");
    const headingElementAbout = screen.getByText("About");
    const headingElementMenu = screen.getByText("Menu");
    const headingElementReservations = screen.getByText("Reservations");
    const headingElementOrderOnline = screen.getByText("Order Online");
    const headingElementLogin = screen.getByText("Login");
    expect(headingElementHome).toBeInTheDocument();
    expect(headingElementAbout).toBeInTheDocument();
    expect(headingElementMenu).toBeInTheDocument();
    expect(headingElementReservations).toBeInTheDocument();
    expect(headingElementOrderOnline).toBeInTheDocument();
    expect(headingElementLogin).toBeInTheDocument();
  });

  test("initializeTimes function", () => {
    const state = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
    const initializeTimes = jest.fn();
    render(<BookingPage />);
    expect(initializeTimes.mock.results.value).toBe(state)
  });

  test("updateTimes function", () => {
    const state = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
    const updateTimes = jest.fn();
    render(<BookingPage />);
    expect(updateTimes.mock.results.value).toBe(state)
  });

})