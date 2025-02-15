import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        salutations: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        number: "",
        gender: "",
        education: []
    })
    const [errors, setErrors] = useState({
    })
    // const [checkedData, setCheckedData] = useState([])

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleRadio = (event) => {
        console.log(event)
        // setFormData({...formData, salutations: event.target.id})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submitted')
        const isError = validateForm()
        if(isError){
            console.log('Errors:', errors)
        }else{
            console.log('Form Submitted:', formData)
        }
    }

    function validateEmail (errorsValidation) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!formData.email){
            errorsValidation.email = 'email required'
        }
        else if(!emailRegex.test(formData.email)){
            errorsValidation.email = 'invalid email'
        }
    }

    function validatePassword(errorsValidation){
        const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if(!formData.password){
            errorsValidation.password = 'Password Required'
        }
        else if(!passwordRegex.test(formData.password)){
            errorsValidation.password = '"Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter '
        }

    }

    function validateNumber(errorsValidation){
        const NumberRegex = /^\d{10}$/
        if(!formData.number){
            errorsValidation.number = 'Number Required'
        }else if(!NumberRegex.test(formData.number)){
            errorsValidation.number = 'Number must be of 10 digits'
        }
    }

    function validateEducation(errorsValidation){
        if(formData.education.length === 0){
            errorsValidation.education = "Education Required"
        }
    }

    const handleChecked = (event) => {
        const isChecked = event.target.checked
        let checkedData = [...formData.education]

        if(isChecked){
            checkedData.push(event.target.name)
        }else{
            checkedData = checkedData.filter((element) => 
                event.target.name !== element
            )
        }
        setFormData({...formData, education: checkedData})
    }

    function validateForm(){
        const errorsValidation = {}
        if(!formData.firstName){
            errorsValidation.firstName =  'firstName Required'
        }
        if(!formData.lastName){
            errorsValidation.lastName = 'lastName Required'
        }
        validateEmail(errorsValidation)
        validatePassword(errorsValidation)
        validateNumber(errorsValidation)
        validateEducation(errorsValidation)

        if(formData.confirmPassword !== formData.password){
            errorsValidation.confirmPassword = 'Should be same as password entered.'
        }
        if(!formData.birthDate){
            errorsValidation.birthDate = 'birthdate required'
        }
        if(!formData.gender){
            errorsValidation.gender = 'Gender Required'
        }
        {!formData.salutations}{
            errorsValidation.salutations = 'Salutation Required'
        }
        setErrors(errorsValidation)
    }
    console.log('error:', errors)
    // console.log('checkedData:', checkedData)
    
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="salutation">
                <label>Salutation: </label>
                <input type="radio" id="Mr" name="salutation" onChange={handleRadio}/>
                <label htmlFor="Mr">Mr.</label>
                <input type="radio" id="Mrs" name="salutation" onChange={handleRadio}/>
                <label htmlFor="Mrs">Mrs.</label>
                <input type="radio" id="Ms"  name="salutation" />
                <label htmlFor="Ms" onChange={handleRadio}>Ms.</label>
                <p className='error'>{errors.salutations}</p>
            </div>

            <div className="firstName">
                <label>FirstName: </label>
                <input type="text" value={formData.firstName} onChange={handleChange} name='firstName'/>
                <p className='error'>{errors.firstName}</p>
            </div>

            <div className="lastName">
                <label>LastName: </label>
                <input type="text" value={formData.lastName} onChange={handleChange} name='lastName'/>
                <p className='error'>{errors.lastName}</p>
            </div>

            <div className="email">
                <label>Email: </label>
                <input type="text" value={formData.email} onChange={handleChange} name='email'/>
                <p className='error'>{errors.email}</p>
            </div>

             <div className="password">
                <label>password: </label>
                <input type="password" value={formData.password} onChange={handleChange} autoComplete="off" name="password"/>
                <p className='error'>{errors.password}</p>
            </div> 

            <div className="password">
                <label>Confirm Password: </label>
                <input type="password" value={formData.confirmPassword} onChange={handleChange} autoComplete='off' name='confirmPassword'/>
                <p className='error'>{errors.confirmPassword}</p>
            </div>

            <div className="birthdate">
                <label>Date of Birth: </label>
                <input type="date" value={formData.birthDate} onChange={handleChange} name='birthDate'/>
                <p className='error'>{errors.birthDate}</p>
            </div>

            <div className="number">
                <label>Mobile Number: </label>
                <input type="text" value={formData.number}  onChange={handleChange} name='number'/>
                <p className='error'>{errors.number}</p>
            </div> 

            <div className="Gender">
                <label>Gender: </label>
                <select id="gender" value={formData.gender} onChange={handleChange} name='gender'>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Otehrs</option>
                </select>
                <p className='error'>{errors.gender}</p>
            </div>

            <div className="education">
                <label>Education: </label>
                <input type="checkbox" name='10' onChange={handleChecked} checked={formData.education.includes('10')}/>
                <label >10th</label>

                <input type="checkbox" name='12' onChange={handleChecked} checked={formData.education.includes('12')}/>
                <label>12th</label>

                <input type="checkbox" name='diploma' onChange={handleChecked} checked={formData.education.includes('diploma')}/>
                <label>Diploma</label>

                <input type="checkbox" name='graduate' onChange={handleChecked} checked={formData.education.includes('graduate')}/>
                <label>Graduation</label>

                <input type="checkbox" name='post-graduate' onChange={handleChecked} checked={formData.education.includes('post-graduate')}/>
                <label>Post-Graduation</label>

                <input type="checkbox" name='doctorate' onChange={handleChecked} checked={formData.education.includes('doctorate')}/>
                <label>Doctorate</label>
                <p className='error'>{errors.education}</p>
            </div>
            <input type='submit' style={{width: '70px'}}/>
        </form>
    )
}

export default Form