import { useState, useRef, useEffect } from "react"

function AddRestaurant(props){
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    picture: '',
    link: '',
  })
  
  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const restaurantFormData = new FormData()
		restaurantFormData.append('picture', formData.picture)
    restaurantFormData.append('name', formData.name)
    restaurantFormData.append('link', formData.link)
    restaurantFormData.append('location', formData.location)
    props.handleAddRestaurant(restaurantFormData)

  }

    const handleChangePhoto = evt => {
      setFormData({...formData, photo: evt.target.files[0]})
    }

    return(
<>
<h1>Add Restaurants</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Restaurant's Name
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Restaurant's Location 
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="location"
            value={formData.location}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Restaurant's website 
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="link"
            value={formData.link}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="picture"
						onChange={handleChangePhoto}
					/>
				</div>
        <div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Restaurant
					</button>
				</div>
</form>
</>

    )

}  
export default AddRestaurant;