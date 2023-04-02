import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import { DayList } from "./components/DayList/DayList";

function App() {
  let [tasks, setTasks] = useState([]);
  let [days, setDays] = useState([]);

  const submit_form = (event) => {
    event.preventDefault();
    let { day, importance, description } = event.target;

    const newTask = {
      id: Date.now(),
      day: day.value,
      importance: importance.value,
      description: description.value,
    };

    setTasks([...tasks, newTask]);

    if (!days.includes(day.value)) {
      setDays([...days, day.value]);
    }
  };

  return (
    <div className="container">
      <Form submit_form={submit_form} />
      <DayList days={days} tasks={tasks} />
    </div>
  );
}

export default App;
