interface Activity {
  title: string;
  time: string;
  duration: string;
  pickUp: string;
  imageUrl: string;
}

interface Props {
  activities: Activity[];
  isDark: boolean;
}

const Activities = ({ activities, isDark }: Props) => {
  const cardClass = isDark ? "bg-secondary text-white" : "bg-light text-dark";

  return (
    <div className="mb-5">
      {/* <div className="d-flex justify-content-between align-items-center mb-2"></div> */}

      <div className="row g-3">
        {activities.map((act, i) => (
          <div className={"col-12 " + cardClass} key={i}>
            <div className="card flex-row">
              <img
                src={act.imageUrl}
                className="card-img-top"
                alt={act.title}
                style={{ width: 150, height: 150, objectFit: "cover" }}
              />
              <div className={"card-body py-2 px-3 " + cardClass}>
                <h5 className="card-title mb-3">{act.title}</h5>
                <p className="small mb-0">
                  <b>{"Timing: "}</b>
                  {act.time}
                </p>
                <p className="small mb-0">
                  <b>{"Duraton: "}</b>
                  {act.duration}
                </p>
                <p className="small mb-0">
                  <b>{"Pick up: "}</b>
                  {act.pickUp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
