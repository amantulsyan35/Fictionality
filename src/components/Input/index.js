export const FormInput = ({ label, type, placeholder, className }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder ? placeholder : null} />
    </div>
  );
};
