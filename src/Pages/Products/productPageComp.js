// COMPONENTS NEEDED BY THIS SPECIFIC PAGE
export const ProductFilterComp = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const ProductFilter = ({ label, type, name, onChange, checked }) => {
  return (
    <div className='prod-func'>
      <input checked={checked} onChange={onChange} name={name} type={type} />
      <label>{label}</label>
    </div>
  );
};
