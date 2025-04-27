interface Props {
  label: string;
  placeholder: string;
  type?: "text" | "select";
  options?: string[];
  isDark: boolean;
}

const Input = ({
  label,
  placeholder,
  type = "text",
  options = [],
  isDark,
}: Props) => (
  <div className="mb-3">
    <label className="form-label ">{label}</label>
    {type === "select" ? (
      <select
        className={`form-select ${isDark ? "bg-secondary text-light" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type="text"
        className={` form-control ${
          isDark ? "bg-secondary text-light dark-placeholder" : ""
        }`}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default Input;
