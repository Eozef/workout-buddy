import { useState } from "react";
import { useWorkoutsContext } from "./hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext;
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    //to prevent the submition of the form
    e.preventDefault();

    const workout = { title, load, reps };

    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();

    if (!res.ok) {
      setErr(json.err);
    }
    if (res.ok) {
      //erase the workout
      setTitle("");
      setLoad("");
      setReps("");
      setErr(null);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <lable>Exercice Title:</lable>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <lable>Exercice Load (KG):</lable>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <lable>Exercice Reps:</lable>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Submit</button>
      {err && <div className="err">{err}</div>}
    </form>
  );
};

export default WorkoutForm;
