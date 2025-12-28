import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert'

const Contact = () => {
    const [formData, setFormData] = useState({
         name: "", 
         email: "",
         message: ""})

         const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try{
            await emailjs.send("service_zgkz16b", "template_gdcagcy", {
            from_name: formData.name,
            to_name: "Sla",
            from_email: formData.email,
            to_email: "pietro.henriquevito@gmail.com",
            message: formData.message,
        }, "IYhnfK19CFOHK9uEx");
        setIsLoading(false);
        alert("success");
        setFormData({name: "", email: "", message: ""})
        } catch(error) {
            setIsLoading(false);
            alert("failed");   
        }
        
    }
  return (
    <section className='relative flex items-center c-space section-spacing'>
        <Alert />
        <div className='flex flex-col items-center justify-center
        max-w-md p-5 mx-auto border border-white/10 rounded-2xl
        bg-primary'>
            <div className='flex flex-col items-start w-full
            gap-5 mb-10'>
                <h2 className='text-heading'>Vamos Conversar!</h2>
                <p className='font-normal text-neutral-400'>Se você procura melhorar ou criar um website
                     jogo ou plataforma eu estou aqui para ajudar.
                </p>
            </div>
            <form className='w-full' onSubmit={ handleSubmit } action="">
                <div className='mb-5'>
                    <label htmlFor="name" className='field-lable'>
                        Full Name
                    </label>
                    <input id='name' name='name' type="text" 
                    className='field-input field-input-focus'
                    placeholder='John Doe'
                    autoComplete='name'
                    value={FormData.name}
                    onChange={handleChange}
                    required/>
                </div>

                <div className='mb-5'>
                    <label htmlFor="email" className='field-lable'>
                        Full email
                    </label>
                    <input id='email' name='email' type="email" 
                    className='field-input field-input-focus'
                    placeholder='John.Doe@gmail.com'
                    autoComplete='email'
                    value={FormData.email}
                    onChange={handleChange}
                    required/>
                </div>

                <div className='mb-5'>
                    <label htmlFor="Message" className='field-lable'>
                        Message
                    </label>
                    <input id='Message' name='Message' type="text" 
                    rows="4"
                    className='field-input field-input-focus'
                    placeholder='Me envie oque esta pensando!'
                    autoComplete='Message'
                    value={FormData.message}
                    onChange={handleChange}
                    required/>
                </div>
                <button type="submit" className='w-full px-1 py-3 text-lg text-center
                rounded-md cursor-pointer bg-radial from-lavender
                to-royal hover-animation'>
                    {!isLoading ? "Enviar" : "Enviando..."}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
