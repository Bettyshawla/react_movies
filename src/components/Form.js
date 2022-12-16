import {useState, useEffect} from 'react'

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  Form (props){
  //The component must return some JSX
  const [formData, setFormData] = useState({
    searchterm: ""
  })

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    props.getMovie(formData.searchterm)
  }

  return (
    <div  >
      <br/>
        <h1 className='input' >Input</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="searchterm"
          onChange={handleChange}
        /> 
        <input className='submit' type="submit" value="Submit" />
      </form>
    </div>
  )
};