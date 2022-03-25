import { useState, useRef, useEffect } from "react"

function AddRecipe(props){
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

    const handleSubmit = evt => {
      evt.preventDefault()
      const recipeFormData = new FormData()
      recipeFormData.append('picture', formData.picture)
      recipeFormData.append('name', formData.name)
      recipeFormData.append('ingredients', formData.age)
      recipeFormData.append('prepTime', formData.prepTime)
      recipeFormData.append('creator', formData.creator)
      recipeFormData.append('calories', formData.calories)
      recipeFormData.append('restaurants', formData.restaurants)
      props.handleAddRecepe(recipeFormData)
  }

      const handleChangePhoto = evt => {
      setFormData({...formData, photo: evt.target.files[0]})
    }

    return(
      <>
      <h1>Add Recipe</h1>
            <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name-input" className="form-label">
                  Puppy's Name (required)
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="name-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
           	</div>











             
           </form>
      </>
      
      
      
      )


} 


export default AddRecipe;