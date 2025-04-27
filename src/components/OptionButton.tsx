interface Props {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  color: string;
}

const OptionButton = ({ label, isSelected, onClick, color }: Props) => (
  <button
    type="button"
    className={`btn w-100 ${
      isSelected ? `btn-${color}` : `btn-outline-${color}`
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default OptionButton;
