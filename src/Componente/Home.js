import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/register')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            
        }
    }, [])
  

   
    return (
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Home
