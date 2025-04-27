interface Props {
  from: string;
  to: string;
  departDate: string;
  subFrom: string;
  subTo: string;
  imageUrl: string;
}

const FlightDetailsCard = ({
  from,
  to,
  departDate,
  subFrom,
  subTo,
  imageUrl,
}: Props) => (
  <div className="card mb-4 bg-primary text-light border-5 border-primary">
    <div
      className="card-img flight"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: ".5rem",
      }}
    >
      <div className="card-body d-flex align-items-center">
        <div className="flex-grow-1">
          <h4 className="card-title mb-1">Flight Details</h4>
          <p className="mb-1 small">{departDate}</p>
          <div className="d-flex justify-content-start">
            <span>
              <h4>{from}</h4>
              <p className="small">{subFrom}</p>
            </span>

            <span>
              <h3 className="bi bi-arrow-right"></h3>
            </span>
            <span className="text-primary"> .....</span>
            <span>
              <h4>{to}</h4>
              <p className="small">{subTo}</p>
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 ">
          <u className="fs-6 text-warning position-absolute top-0 end-0">
            See all
          </u>
          <div className="flex-shrink-0 me-3"></div>
        </div>
      </div>
    </div>
  </div>
);

export default FlightDetailsCard;
