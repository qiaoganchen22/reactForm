import { useState } from 'react'

export const SignUpForm=({setToken})=>{
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [error,setError] =useState(null)
    const [valid,setValid] =useState('')
    const [submit,setSubmit] =useState('')

    const handleSubmit=async(event)=>{
      setValid('')
      setSubmit('')
        event.preventDefault();

         if(username.length<8){
            setValid('Username must be more than 8 characters long')
            return
        }
        if(password.length<8){
            setValid('Password must be more than 8 characters long')
            return
        }

        try{
            const postdata = {username:username,password:password};
            const response =await fetch('https://fsa-jwt-practice.herokuapp.com/signup'
            ,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(postdata)
            }
            )
            const data=await response.json()
            console.log(data)
            setToken(data.token)
            setSubmit('Form Submitted!')

        }catch(error){
            setError(error.message)
        }
      }
    return(
        <>
        <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    {valid}
      {submit}

    <form onSubmit={handleSubmit}>
  <label>
    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
  </label>
  <label>
    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
  </label>
  <button>Submit</button>
    </form>

    </>)
}