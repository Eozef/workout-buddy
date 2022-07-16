import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkdouts = async () => {
      const res = await fetch("/api/workouts");

      //pass in workout obj
      const json = await res.json();

      if (res.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkdouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
