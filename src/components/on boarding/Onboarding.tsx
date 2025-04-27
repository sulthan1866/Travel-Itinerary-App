import { useEffect, useState } from "react";
import Input from "./Input";
import TravelOptionButton from "./TravelOptionButton";
import DarkModeButton from "../DarkModeButton";

const travelOptions = ["🧑 Solo", "🧑‍🤝‍🧑 Couple", "👨‍👩‍👦 Family", "👥 Friends"];

const Onboarding = () => {
  const [whoWith, setWhoWith] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("isDark");
    if (savedMode !== null) {
      setIsDark(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      localStorage.setItem("isDark", String(!prev));
      return !prev;
    });
  };

  return (
    <div
      className={`d-flex vh-100 align-items-center justify-content-center ${
        isDark ? "bg-secondary text-white" : "bg-light"
      }`}
    >
      <div
        className={`card p-4 shadow-sm ${isDark ? "bg-dark text-white" : ""}`}
        style={{ maxWidth: 400, width: "100%" }}
      >
        <DarkModeButton isDark={isDark} toggleDarkMode={toggleDarkMode} />

        <h3 className="card-title">Plan Your Journey, Your Way!</h3>
        <p className=" mb-4">
          Let's create your personalized travel experience
        </p>

        <Input
          label="Where would you like to go?"
          placeholder="📍 Enter Destination"
          isDark={isDark}
        />

        <Input
          label="How long will you stay?"
          placeholder="📅 Select Duration"
          type="select"
          options={["1–3 Days", "4–7 Days", "1–2 Weeks", "2+ Weeks"]}
          isDark={isDark}
        />

        <div className="mt-3 mb-5">
          <p className="mb-2 fw-medium">Who are you traveling with?</p>
          <div className="row g-2">
            {travelOptions.map((opt) => (
              <div className="col-6" key={opt}>
                <TravelOptionButton
                  label={opt}
                  isSelected={whoWith === opt}
                  onClick={() => setWhoWith(opt)}
                  isDark={isDark}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-primary w-100 mt-5">Continue</button>
      </div>
    </div>
  );
};

export default Onboarding;
