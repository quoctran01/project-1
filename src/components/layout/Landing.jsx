import { Redirect } from 'react-router-dom'

const Landing = () => {
	return <>
        <div>hello landing</div>
         <Redirect to='/login' />
    </>
     
}

export default Landing