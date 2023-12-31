import { useState } from "react";

const Authenticate = ({token}) => {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    const [username, setUsername] = useState(null)

const handleClick = async(event) => {
    event.preventDefault();
    try{
    const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate',
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //not sure why it doesn't matter if authorization is in quotes or not
            Authorization: `Bearer ${token}`
        }
    });
    const result = await response.json()
    setUsername(result.data.username)
    setSuccessMessage(result.message);
    }
    catch(error){
        setError(error.message);
    }
}
    return (
    <>
    <h2>Authenticate!</h2>
    {successMessage && <p>{username} has been {successMessage.toLowerCase()}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </>
)}

export default Authenticate;