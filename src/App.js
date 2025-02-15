import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleTime = (event, type) => {
    const value = Number(event.target.value);
    if (type === "hour") setHour(value);
    if (type === "minute") setMinute(value);
    if (type === "second") setSecond(value);
  };

  const handleReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  const handleStartStop = () => {
    setIsStarted(!isStarted);
  };

  useEffect(() => {
    let tid;
    if (second > 60) {
      setMinute((min) => min + Math.floor(second / 60));
      setSecond((second) => second % 60);
    }

    if (minute > 60) {
      setHour((hr) => hr + Math.floor(minute / 60));
      setMinute((minute) => minute % 60);
    }

    tid = setTimeout(() => {
      if (isStarted) {
        if (second) {
          setSecond((sec) => sec - 1);
        }

        if (minute && second === 0) {
          setMinute((min) => min - 1);
          setSecond(60);
        }

        if (hour && minute === 0 && second === 0) {
          setHour((hr) => hr - 1);
          setMinute(60);
          setSecond(60);
        }
      }
    }, 1000);

    if (!second && !minute && !hour) {
      setIsStarted(false);
    }

    return () => {
      clearInterval(tid);
    };
  }, [second, minute, hour, isStarted]);

  return (
    <div className="App">
      <h3>Countdown</h3>
      <div className="time">
        <input
          type="textbox"
          value={hour}
          onChange={(event) => {
            handleTime(event, "hour");
          }}
        />{" "}
        :
        <input
          type="textbox"
          value={minute}
          onChange={(event) => {
            handleTime(event, "minute");
          }}
        />{" "}
        :
        <input
          type="textbox"
          value={second}
          onChange={(event) => {
            handleTime(event, "second");
          }}
        />
      </div>

      <div className="actions">
        <button className="start-stop" onClick={handleStartStop}>
          {isStarted ? "STOP" : "START"}
        </button>
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
