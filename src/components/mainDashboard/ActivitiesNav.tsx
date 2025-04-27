import React, { useState } from "react";
import OptionButton from "../OptionButton";

interface DateItem {
  day: string;
  date: number;
  month: string;
}

interface Props {
  totalActivities: number;
  isDark: boolean;
}

const ActivitiesNav = ({ totalActivities, isDark }: Props) => {
  const dateItems: DateItem[] = [
    { month: "Apr", day: "MON", date: 1 },
    { month: "Apr", day: "TUE", date: 2 },
    { month: "Apr", day: "WED", date: 3 },
    { month: "Apr", day: "THU", date: 4 },
    { month: "Apr", day: "FRI", date: 5 },
    { month: "Apr", day: "SAT", date: 6 },
    { month: "Apr", day: "SUN", date: 7 },
    { month: "Apr", day: "MON", date: 8 },
    { month: "Apr", day: "TUE", date: 9 },
    { month: "Apr", day: "WED", date: 10 },
    { month: "Apr", day: "THU", date: 11 },
    { month: "Apr", day: "FRI", date: 12 },
    { month: "Apr", day: "SAT", date: 13 },
    { month: "Apr", day: "SUN", date: 14 },
    { month: "Apr", day: "MON", date: 15 },
    { month: "Apr", day: "TUE", date: 16 },
    { month: "Apr", day: "WED", date: 17 },
    { month: "Apr", day: "THU", date: 18 },
    { month: "Apr", day: "FRI", date: 19 },
    { month: "Apr", day: "SAT", date: 20 },
    { month: "Apr", day: "MON", date: 21 },
    { month: "Apr", day: "TUE", date: 22 },
    { month: "Apr", day: "WED", date: 23 },
    { month: "Apr", day: "THU", date: 24 },
    { month: "Apr", day: "FRI", date: 25 },
    { month: "Apr", day: "SAT", date: 26 },
    { month: "Apr", day: "SUN", date: 27 },
    { month: "Apr", day: "MON", date: 28 },
    { month: "Apr", day: "TUE", date: 29 },
    { month: "Apr", day: "WED", date: 30 },
  ];

  const [selectedTab, setSelectedTab] = useState<"day" | "all">("day");
  const [selectedSubTab, setSelectedSubTab] = useState<"day" | "all">("day");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dayNumber = selectedIndex + 1;
  const sel = dateItems[selectedIndex];
  const formattedDate = `${sel.date
    .toString()
    .padStart(2, "0")}.${sel.month.toUpperCase()}.2025`;

  const monthPillStyle: React.CSSProperties = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    height: "72px",
    lineHeight: "1",
    border: "1px solid #ced4da",
    borderRadius: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.5rem",
    flexShrink: 0,
  };
  const seeColor = isDark ? "warning" : "primary";

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 border-1 border-light rounded-3 p-2">
        <h5 className="mb-0">Activities</h5>
        <u className={"text-" + seeColor}>See all</u>
      </div>

      <div className="btn-group mb-3">
        <OptionButton
          label="Day Plan"
          isSelected={selectedTab === "day"}
          onClick={() => setSelectedTab("day")}
          color={seeColor + " me-3"}
        />
        <OptionButton
          label="Activities"
          isSelected={selectedTab === "all"}
          onClick={() => setSelectedTab("all")}
          color={seeColor}
        />
      </div>

      <div
        className="d-flex overflow-auto mb-3"
        style={{ paddingBottom: "0.5rem", gap: "0.5rem" }}
      >
        <div style={monthPillStyle}>{dateItems[0].month.toUpperCase()}</div>

        {dateItems.map((item, idx) => (
          <button
            key={idx}
            className={`btn flex-shrink-0 text-center ${
              idx === selectedIndex
                ? `btn-${seeColor} text-white`
                : "btn-outline-secondary"
            }`}
            style={{ minWidth: "64px" }}
            onClick={() => setSelectedIndex(idx)}
          >
            <div className="small">{item.day}</div>
            <div className="fw-bold">{item.date}</div>
          </button>
        ))}
      </div>

      <div className="mb-4 col-12">
        <div className="btn-group mb-3">
          <OptionButton
            label={` Day ${dayNumber} ${" "} ${formattedDate} `}
            isSelected={selectedSubTab === "day"}
            onClick={() => setSelectedSubTab("day")}
            color={seeColor + " me-3"}
          />
          <OptionButton
            label={
              selectedTab === "day"
                ? `${totalActivities} Activities`
                : "All Activities"
            }
            isSelected={selectedSubTab === "all"}
            onClick={() => setSelectedSubTab("all")}
            color={seeColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesNav;
