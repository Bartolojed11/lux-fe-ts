export const stateSetter = (event: React. ChangeEvent<HTMLInputElement>, setter: (newValue: any) => void) => {
  console.log({setter})
  console.log({ event })
    // name, value and type this are attributes of input field
    const {name, value, type, checked} = event.target

    setter(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
      }
    })
}
