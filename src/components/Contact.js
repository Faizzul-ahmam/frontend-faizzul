import React from "react"
import {Button} from './Button'

export const Contact = () =>{

    return(
        <section id='contact'>
            <div className='txt'>
                <h3>need to talk?</h3>
                <h1>Just say hi!</h1>
                <Button type='btn' text='Contact me' link='mailto:faizzulahmam@gmail.com'/>
            </div>
        </section>
    )
}