import { useEffect } from "react"

const ContactPage = () => {

  useEffect(() => {
    const timer = setInterval(() => console.log("Hello World"), 1000)
    
    return ()=> clearInterval(timer)
  }, [])

  return (
    <h1>Contact Page</h1>
  )
}

export default ContactPage