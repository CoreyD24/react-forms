import { useState } from "react";

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [passwork, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    return <h2>Sign Up!</h2>
}

export default SignUpForm;