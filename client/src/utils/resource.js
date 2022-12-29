import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const sendEmail = (
  receiverEmail,
  email,
  fullName,
  message,
  duration
) => {
  emailjs
      .send(
          "service_d85v3dm",
          "template_93k66ch",
          {
              to_email: receiverEmail,
              from_email: email,
              fullName,
              message,
              duration,
          },
          "ySmgs7LjtAbXP_4hU"
      )
      .then(
          (result) => {
              console.log(result.text);
              toast.success("Session booked successfully!");
          },
          (error) => {
              console.log(error.text);
              toast.error(error.text);
          }
      );
};

export const morningTime = [
  { id: "null", t: "Select" },
  { id: "1", t: "7:00 - 7:45" },
  { id: "2", t: "9:00 - 9:45" },
  { id: "3", t: "11:00 - 11:45" },
];

export const afternoonTime = [
  { id: "null", t: "Select" },
  { id: "4", t: "13:00 - 13:45" },
  { id: "5", t: "15:00 - 15:45" },
  { id: "6", t: "17:00 - 17:45" },
];

export const eveningTime = [
  { id: "null", t: "Select" },
  { id: "7", t: "18:00 - 18:45" },
  { id: "8", t: "19:00 - 19:45" },
  { id: "9", t: "20:00 - 20:45" },
];

export async function handleRegister(email, username, password, navigate) {
  try {
    const request = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      toast.success(data.message);
      navigate("/");
    }
  } catch (err) {
    console.error(err);
    toast.error("Account creation failed");
  }
}

export async function handleLogin(username, password, navigate) {
  try {
    const request = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      //👇🏻If login successful
      toast.success(data.message);
      //👇🏻 saves the email and id for identification
      localStorage.setItem("_id", data.data._id);
      localStorage.setItem("_myEmail", data.data._email);
      navigate("/dashboard");
    }
  } catch (err) {
    console.error(err);
  }
}

export async function handleCreateSchedule(
  selectedTimezone,
  schedule,
  navigate
) {
  try {
    await fetch("http://localhost:4000/schedule/create", {
      method: "POST",
      body: JSON.stringify({
        userId: localStorage.getItem("_id"),
        timezone: selectedTimezone,
        schedule,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // navigates to the profile page
    navigate(`/profile/${localStorage.getItem("_id")}`);
  } catch (err) {
    console.error(err);
  }
}

export function fetchBookingDetails(
  user,
  setError,
  setTimezone,
  setSchedules,
  setReceiverEmail
) {
  fetch(`http://localhost:4000/schedules/${user}`, {
      method: "POST",
      body: JSON.stringify({
          username: user,
      }),
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  })
      .then((res) => res.json())
      .then((data) => {
          if (data.error_message) {
              toast.error(data.error_message);
              setError(true);
          } else {
              setTimezone(data.timezone.label);
              setSchedules(data.schedules);
              setReceiverEmail(data.receiverEmail);
          }
      })
      .catch((err) => console.error(err));
}
