"use client"
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google';
import { useState } from 'react';

const  mulish= Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap',
  });

const ContactForm = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:"",
  })
  const [status, setStatus] = useState(null)

  const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser((prevUser)=>({...prevUser, [name]:value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
   try {
    const response = await fetch('/api/contact',{
       method: 'POST',
       headers:{"Content-Type":"application/json"},
       body: JSON.stringify({
        username:user.username,
        email:user.email,
        phone:user.phone,
        message:user.message,
       })
    })
// Set the status based on the contact from the API route
    if(response.status === 200){
      setUser({
        username:"",
        email:"",
        phone:"",
        message:"",
      })
      setStatus('success')
     }else{
      setStatus('error')
     }
   } catch (e) {
    console.log(e)
   }
   
  }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
                Name
                <input type="text" name="username" id="username" value={user.username} onChange={handleChange} required placeholder='Enter your name' className={mulish.className}/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
               Email
                <input type="text" name="email" id="email" value={user.email} onChange={handleChange} required placeholder='Enter your email' className={mulish.className}/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor="phone" className={styles.label}>
                Phone 
                <input type="number" name="phone" id="phone" value={user.phone} onChange={handleChange} required placeholder='Enter your phone' className={mulish.className}/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor="message" className={styles.label}>
               Message
                <textarea name="message" id="message" value={user.message} onChange={handleChange} required placeholder='Enter your message' className={mulish.className} rows={5}/>
            </label>
        </div>

        <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
        <button type='submit' className='mulish.className'>Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm