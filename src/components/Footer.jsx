import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';


const Wrapper = styled.section`

.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 2rem 7rem 1rem 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.footer_bg};

      margin-bottom: 2.4rem;
    }
  }
  h3{
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.hr};


  }



${'' /* this is footer original */}
footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    .button{
        color: ${({ theme }) => theme.colors.hr};
        border:none;
    }
    a{
        color: ${({ theme }) => theme.colors.hr};
    }
    
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.hr};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.hr};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          ${'' /* position: relative; */}
          cursor: pointer;
        }
      }
    }
    
  }

  .footer-bottom--section {
    padding-top: 9rem;
.grid{
    justify-content:space-evenly;
    text-align:center;
    align-items:center;
}
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .term{
        display:flex;
        flex-direction: column;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="/contact"> Get Started </NavLink>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* 
                <footer>
                    <div className='footer'>

                        <div className='main-footer'>
                            <div>
                                <h3>Anas Raza</h3>
                                <p>This is a complete website for tech series and talks</p>
                            </div>
                            <div className='subscribe'>
                                <h3>Subscribe To get Important Updates</h3>
                                <input type="email" placeholder='Enter Email' />
                                <Button className='button'>
                                    <NavLink to='contact'>   Subscribe</NavLink>
                                 
                                </Button>
                            </div>
                            <div>
                                <p>Follow Us</p>
                                <div className='social-media'>
                                    <a target='_anas' href="https://www.facebook.com/anasraza685"><RiFacebookCircleLine className='icons' /></a>
                                    <a target='_anas' href="https://www.youtube.com/razatechtube"><AiOutlineYoutube className='icons' /></a>
                                    <a target='_anas' href="https://www.instagram.com/anasraza6096"><BsInstagram className='icons' /></a>
                                </div>

                            </div>
                            <div>
                                <p>Call Us</p>
                                <p>+92-307-401-6096</p>
                            </div>

                        </div>



                        <hr />

                        <div className='hr-footer'>
                            <div>
                                <p>Copyright &copy; Anas Raza. All Rights Reserved 2023</p>
                            </div>
                            <div className='terms'>
                                <a href="https://www.youtube.com/razatechtube">Privacy Policy</a>
                                <a href="https://www.youtube.com/razatechtube">Terms And Condition</a>
                            </div>

                        </div>
                    </div>
                </footer> */}
                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Anas Raza</h3>
                            <p>This is Tech store. You can buy each and every thing related to tech </p>
                        </div>
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                                <NavLink to='contact'>    <input type="submit" value="subscribe" className='button' /></NavLink>
                            
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <a target='_anas' href="https://www.facebook.com/anasraza685"><RiFacebookCircleLine className='icons' /></a>
                                </div>
                                <div>
                                    <a target='_anas' href="https://www.youtube.com/razatechtube"><AiOutlineYoutube className='icons' /></a>

                                </div>
                                <div>
                                    <a target='_anas' href="https://www.instagram.com/anasraza6096"><BsInstagram className='icons' /></a>

                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <h3>+92307-4016-096</h3>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column ">
                            <p>
                                CopyRight &copy; Anas Raza 2023. All Rights Reserved
                            </p>
                            <div className='term'>
                                <a href="https://www.youtube.com/razatechtube">Privacy Policy</a>
                                <a href="https://www.youtube.com/razatechtube">Terms And Condition</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>

        </>
    )
}
export default Footer;