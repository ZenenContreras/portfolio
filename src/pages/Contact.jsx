import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [send, setSend] = useState(false)
    const refForm = useRef()

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        const serviceId = 'service_cdypu4n'
        const templateId = 'template_ixcuo8c'
        const apiKey = '_FfezKIcEeyrhyY62'

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey )
        .then(result => console.log(result.text))
        .catch(error => console.error(error))

        if (refForm.current) {
            refForm.current.reset();
        }
        setSend(true)
    }


    return (
        <div className='py-26 text-white flex flex-col items-center gap-10 '>
            <div className='text-center flex flex-col gap-4 w-[90%]'>
                <h1 className='text-4xl mt-12 font-bold'>Contact</h1>
                <p className='text-[#95999d]'>Open to new opportunities and collaborations. Let's build something together.</p>
            </div>

            <form ref={refForm} action="" onSubmit={handleSubmit} className='flex flex-col gap-10 text-left w-[90%] lg:w-full '>
                <div className='flex flex-col gap-2 w-full '>
                    <label htmlFor="">Email Adress</label>
                    <input required name='email' type="text" placeholder='Your@emailhere.com' className='border-1 border-white rounded-md px-7 py-2 w-full ' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="">Subject </label>
                    <input required name='subject' type="text" placeholder='Brief description of your inquiry' className='border-1 border-white rounded-md px-7 py-2 w-full' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="">Leave a comment </label>
                    <textarea required name='message' maxLength={500} type="text" placeholder='Tell me about the project, timeline, and how I can help...' className='border-1 border-white rounded-md px-7 py-2 w-full' rows={5} cols={30} />
                </div>

                {send &&(
                    <div className='text-green-500'>
                        <p>Message sent!</p>
                    </div>
                )}
                

                <div className='w-full justify-center flex items-center'>
                    <button type="submit" className='flex flex-row items-center gap-2 w-50 lg:w-50 justify-center border-1 border-white px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:scale-104 group transition duration-150'>
                        Send Message
                        <svg className="w-5 h-5 fill-white group-hover:fill-blue-500 transition duration-150 group-hover:-rotate-45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </form>


        </div>
    )
}

export default Contact