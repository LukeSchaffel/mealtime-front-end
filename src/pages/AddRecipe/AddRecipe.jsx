import { useState, useRef, useEffect } from "react"

function AddRecipe(props){
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    calories: ''
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
      recipeFormData.append('name', formData.name)
      recipeFormData.append('ingredients', formData.ingredients)
      recipeFormData.append('instructions', formData.instructions)
      recipeFormData.append('calories', formData.calories)
      recipeFormData.append('prepTime', formData.prepTime)
      recipeFormData.append('picture', formData.picture)
      props.handleAddRecipe(recipeFormData)
  }

      const handleChangePicture = evt => {
      setFormData({...formData, picture: evt.target.files[0]})
    }

    return(
      <>
     
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
                <textarea 
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
						Add Recipe
					</button>
				</div>
        </form>
      </>
      
      )


} 


export default AddRecipe;