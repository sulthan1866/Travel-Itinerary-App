interface Props {
  name: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  status: "Confirmed" | "Pending";
  rating: string;
  imageUrl: string;
  isDark: boolean;
}

const AccommodationCard = ({
  name,
  checkIn,
  checkOut,
  nights,
  status,
  rating,
  imageUrl,
  isDark,
}: Props) => {
  const cardClass = isDark ? "bg-secondary text-white" : "bg-light text-dark";
  return (
    <div className="col-10 mb-3">
      <div className={`card h-100 ` + cardClass}>
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
            className="badge bg-primary bi bi-star-fill"
            style={{
              position: "absolute",
              left: "5px",
              top: "55%",
            }}
          >{" "}
            {`${rating}`}
          </div>
        </div>
        <div className="card-body p-2">
          <h6 className="card-title mb-1">{name}</h6>
          <p className="mb-1 small ">
            <b>check in :</b> {checkIn}
          </p>
          <p className="mb-1 small ">
            <b>check out :</b> {checkOut}
          </p>
          <span className="mb-1 small me-5">
            {nights} Night{nights > 1 ? "s" : ""}
          </span>
          <span
            className={`bi ${
              status === "Confirmed" ? "bi-check-circle" : "bi-alarm"
            } fs-7 `}
            style={{
              fontWeight:'bold',
              color: status === "Confirmed" ? "green" : "red",
              position: "absolute",
              right: "10px",
            }}
          >
            {" "}
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
