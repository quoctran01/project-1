import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import AlertMessage from '../layout/AlertMessage'
import { AuthContext } from '../../context/AuthContext'

const RegisterForm =() => {
	const { registerUser } = useContext(AuthContext)
	
	// Local state
	const [registerForm, setRegisterForm] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})
	const { username, password,confirmPassword } = registerForm
	

	const [alert , setAlert] = useState(null)

	const onChangeRegisterForm = event =>
		setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })

	 
	const register = async event =>{
		event.preventDefault()
		if(password !== confirmPassword){
			setAlert({type:'danger' , message: 'password do not match'})
			setTimeout(()=> setAlert(null) , 5000 )
			return
		}
		try {
			const registerData = await registerUser(registerForm)
			if(!registerData.success) {
				setAlert({type:'danger' , message:registerData.message})
				setTimeout(()=> setAlert(null) , 5000)
			}
		} catch (error) {
			console.log(error)
		}
	}
    return(
        <>
        <Form className='my-4' onSubmit={register}>
			<AlertMessage info={alert}/>
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Username'
						required
						name='username'
						value={username}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
                <Form.Group className="my-3">
					<Form.Control
						type='password'
						placeholder='Password'
						required
						name='password'
						value={password}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
				<Form.Group className="my-3">
					<Form.Control
						type='password'
						placeholder='Confirm password'
						required
						name='confirmPassword'
						value={confirmPassword}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Register
				</Button>
			</Form>
			<p>
				Already have an account?
				<Link to='/login'>
					<Button variant='info' size='sm' className='ml-2'>
						Login
					</Button>
				</Link>
			</p>
        </>
    )
}
export default RegisterForm