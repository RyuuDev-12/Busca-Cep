/* eslint-disable react/prop-types */
export default function Input({name, type, placeholder, value, handleOnChange}){
  return (
    <div>
      <label htmlFor={name}>Digite seu {name}: </label> <br/>
      <input value={value} type={type}placeholder={placeholder}name={name} onChange={handleOnChange}/>
    </div>
  )
}