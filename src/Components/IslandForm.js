import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  function changeName(event) {
    setName(event.target.value);
  }
  function changePhone(event) {
    setPhone(event.target.value);
  }
  function bookAlert() {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={changeName} />
      <input
        placeholder="Type Phone Number"
        type="number"
        onChange={changePhone}
      />
      <button className="book" onClick={bookAlert}>
        Book for today!
      </button>
    </div>
  );
}
