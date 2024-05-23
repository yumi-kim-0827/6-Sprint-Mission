export const handleInputChange = setter => event => {
  const { name, value } = event.target;
  setter(prevValues => ({
    ...prevValues,
    [name]: value,
  }));
};
