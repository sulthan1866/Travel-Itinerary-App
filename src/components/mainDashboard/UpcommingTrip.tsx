interface Props {
  city: string;
  dateRange: string;
  imageUrl: string;
}

const UpcomingTrip = ({ city, dateRange, imageUrl }: Props) => (
  <div className="card text-white mb-4" style={{ border: "none" }}>
    <div
      className="card-img-top d-block trip"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: ".5rem",
      }}
    >
      <div
        className="h-100 d-flex flex-column justify-content-between p-3"
        style={{ background: "rgba(0,0,0,0.3)", borderRadius: ".5rem" }}
      >
        <div>
          <h2 className="mb-1" style={{ fontWeight: "bolder" }}>
            {city.toUpperCase()}
          </h2>
          <small>{dateRange}</small>
        </div>
        <div className="d-flex gap-3">
          <div>
            <i className="bi bi-sun"></i> 28°C
          </div>
          <div>
            <i className="bi bi-cloud-rain"></i> 6 mm
          </div>
          <div>
            <i className="bi bi-water"></i> 75% RH
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingTrip;
