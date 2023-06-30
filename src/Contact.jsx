import React from 'react'
import styled from 'styled-components';
import {Button} from './styles/Button';


const Wrapper = styled.section`
padding:10rem 0;
text-align:center;
.map{

    width:50%;
}
h3{
       margin-bottom:3rem;
       font-weight:bold;
       font-size:3rem;        
    }
.contact-section{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
   
}
.form form{
    display:flex;
    flex-direction:column;
    flex-Wrapper:wrap;
 
    input{
        background:${({theme})=>theme.colors.bg};
        padding:2rem;
        width:100%; 
        margin-bottom:1.5rem;
        border:transparent;
        text-transform:initial;
    }
    textarea{
        background:${({theme})=>theme.colors.bg};
        width:100%; 
        margin-bottom:1.5rem;
        border:transparent;
        text-transform:initial;

    }
   
}
`;

const Contact = () => {
    return (
        <>
            <Wrapper>
                <div className='container'>
                <h3>Contact Us If you have Any Problem</h3>
                    <div className='contact-section'>
                        <div className='form'>
                        <form action='https://formspree.io/f/xqkordzq' method='post'>
                               <input name='username' placeholder='Your Name?' />
                               <input name='Email' placeholder='Your Email?' />
                               <textarea name='message' cols='50' rows='10' placeholder='Enter your Message'></textarea>
                               <Button type='submit' >Submit</Button>
                        </form>
                        </div>
                        <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853775!2d74.3343893!3d31.482940350000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1686328524122!5m2!1sen!2s" width="100%" height="450" style={{border:0,}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
export default Contact; 