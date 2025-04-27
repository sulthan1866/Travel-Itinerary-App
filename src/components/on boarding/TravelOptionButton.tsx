interface Props {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  isDark: boolean;
}

const TravelOptionButton = ({ label, isSelected, onClick, isDark }: Props) => (
  <button
    type="button"
    className={`btn w-100 ${
      isSelected
        ? `btn-${isDark ? "secondary" : "dark"}`
        : `btn-outline-${isDark ? "secondary" : "dark"}`
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default TravelOptionButton;
