import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

function EditRecipe(props){
  const location = useLocation()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(true)
  const [formData, setFormData] = useState(location.state.recipe)

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(true)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

    const handleSubmit = evt => { 
      evt.preventDefault()
      const recipeFormData = new FormData()
      recipeFormData.append('name', formData.name)
      recipeFormData.append('ingredients', formData.ingredients)
      recipeFormData.append('instructions', formData.instructions)
      recipeFormData.append('calories', formData.calories)
      recipeFormData.append('prepTime', formData.prepTime)
      recipeFormData.append('picture', formData.picture)
      props.handleUpdateRecipe(recipeFormData)
  }

      const handleChangePicture = evt => {
      setFormData({...formData, picture: evt.target.files[0]})
    }

    return(
      
      <>
      <h1>Edit Recipe</h1>
            <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name-input" className="form-label">
                  recipe's Name (required)
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
              <div className="form-group mb-3">
                <label htmlFor="ingredients-input" className="form-label">
                  ingredients (required)
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="ingredients-input"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                />
           	</div>
              <div className="form-group mb-3">
                <label htmlFor="instructions-input" className="form-label">
                instructions (required)
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="instructions-input"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  required
                />
           	</div>
              <div className="form-group mb-3">
                <label htmlFor="calories-input" className="form-label">
                Calories 
                </label>
                <input 
                  type="number"
                  className="form-control"
                  id="calories-input"
                  name="calories"
                  value={formData.calories}
                  onChange={handleChange}
                />
           	</div>
              <div className="form-group mb-3">
                <label htmlFor="prepTime-input" className="form-label">
                prepTime 
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="prepTime-input"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange}
                />
           	</div>
             <div className="form-group mb-4">
					<label htmlFor="picture-upload" className="form-label">
						Upload Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="picture-upload"
						name="picture"
						onChange={handleChangePicture}
					/>
          	</div>
            	<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Edit Recipe
					</button>
				</div>
        </form>
      </>
      
      )


} 


export default EditRecipe;