const FormSearch = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default FormSearch;
