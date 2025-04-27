interface Props {
  name: string;
  pfpLink: string;
}

const Header = ({ name, pfpLink }: Props) => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h1 className="h5 mb-1">Hello {name}!</h1>
      <small className="small">Ready for the trip?</small>
    </div>
    <img
      className="rounded-circle me-2 pfp"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: ".5rem",
        height: "3rem",
      }}
      src={pfpLink}
      alt="dp"
    />
  </div>
);

export default Header;
