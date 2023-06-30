import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 9rem 0;
   background-color: ${({ theme }) => theme.colors.bg};

   .brand-section {
     padding: 12rem 0 0 0;
  }

     .brand-section-slider {
     margin-top: 3.2rem;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-direction: row;
   }
img{
    width:8rem;
    height:6rem;
}
h3 {
     text-align: center;
     text-transform: capitalize;
     color: ${({ theme }) => theme.colors.text};
     font-size: 2rem;
     font-weight: bold;
   }
   
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
     .brand-section-slider {
       margin-top: 3.2rem;
       display: grid;
       grid-template-columns: 1fr 1fr;
       /* background-color: red; */
       text-align: center;
     }
   }
`;
const Trusted = () => {

    return (
        <Wrapper className='brand-section'>

            <div className='container'>
                <h3>Our Delivery Partners</h3>
                <div className='brand-section-slider'>
                    <div className='slider'>
                        <img src="https://seeklogo.com/images/T/TCS-logo-EF1E3C1B4A-seeklogo.com.png" alt='tcs' />
                    </div>
                    <div className='slider'>
                        <img src="https://mulphilog.com/assets/images/logo.png" alt='mp' />
                    </div>
                    <div className='slider'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LeopardsLogo.png/1200px-LeopardsLogo.png" alt='leopard' />
                    </div>
                </div>
            </div>


        </Wrapper>
    )
};
export default Trusted;

// import styled from "styled-components";

// const Trusted = () => {
//   return (
//     <Wrapper className="brand-section">
//       <div className="container">
//         <h3>Trusted By 1000+ Companies</h3>
//         <div className="brand-section-slider">
//           {/* my 1st img  */}
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
//               alt="trusted-brands"
//             />
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .brand-section {
//     padding: 12rem 0 0 0;
//   }
//   h3 {
//     text-align: center;
//     text-transform: capitalize;
//     color: ${({ theme }) => theme.colors.text};
//     font-size: 2rem;
//     font-weight: bold;
//   }

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .brand-section-slider {
//     margin-top: 3.2rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .brand-section-slider {
//       margin-top: 3.2rem;
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       /* background-color: red; */
//       text-align: center;
//     }
//   }
// `;

// export default Trusted;