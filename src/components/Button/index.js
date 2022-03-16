export const FormButton = ({ label }) => {
  return (
    <div className='form-button'>
      <button className='btn btn-icon btn-primary'>
        <i className='fas fa-shopping-cart'></i>
        {label}
      </button>
    </div>
  );
};
