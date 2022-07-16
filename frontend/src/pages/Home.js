import { useEffect, useState } from "react";

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
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
