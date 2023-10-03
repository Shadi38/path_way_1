import React,{useState} from "react";

function RegisterForm(props) {
  // const { selectedColor, setSelectedColor } = props;
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("evening");
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerStatus, setRegisterStatus] = useState(false);

  //pathway-project-1-server.onrender.com
  //adding new volunteer
  function addClickHandeler(e) {
    e.preventDefault();
    // set tile colour to orange
    // setSelectedColor("orange");
    const newVolunteer = {
      name: name,
      lastname: lastname,
      address: address,
      day: day,
      time: time,
      booked: true,
    };
    fetch("http://localhost:3000/sessions/Volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVolunteer),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegisterMessage(data);
        setRegisterStatus(true);
      });
  }

  return (
    <div style={{ width: 380 }}>
      <form className="formDiv" onSubmit={addClickHandeler}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            className="lineInput"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last name</label>
          <input
            className="lineInput"
            id="lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            className="lineInput"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="day">Day</label>
          <input
            className="lineInput"
            id="day"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
            placeholder="Oct 08, 2023"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="session">Time</label>
          <select
            className="lineInput"
            value={time}
            onChange={(e) => {
              const selectedsession = e.target.value;
              setTime(selectedsession);
            }}
          >
            <option value={"morning"}>Morning</option>
            <option value={"evening"}>Evening</option>
          </select>
        </div>
        <div className="input-group">
          <button
            style={{
              borderRadius: 5,
              backgroundColor: "rgb(248, 230, 209)",
              color: "#FC4445",
            }}
            type="submit"
          >
            submit
          </button>
        </div>
        {registerStatus && (
          <div className="mainMessageDive">
            <div className="messageDiv">{registerMessage}</div>
          </div>
        )}
      </form>
    </div>
  );
}
export default RegisterForm;