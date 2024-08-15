"use client"
import styled from 'styled-components';

const Main = styled.main`
    
    
`
const P= styled.p`
 color: aliceblue;
 font-weight: bold;
 font-size: 20px;
`
const H2 = styled.h2`
    color: aliceblue;
    font-weight: bold;
    font-size: 38px;
`
const Div = styled.div`
     display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;    
    height: 100vh;          
    background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-d-rendered-abstract-technology-big-data-flow-in-motion-for-transfer-image_3627439.jpg") ;
    height:100vh;
    background-size:cover ; 

`
const Home: React.FC = () => (
    <Main>
        <Div>
            <H2>TechNova Store</H2>

            <P>Somos apasionados por la tecnología. Ofrecemos una amplia gama de productos de última generación, desde smartphones y laptops hasta gadgets innovadores. Nos esforzamos por brindar la mejor experiencia de compra en línea con atención al cliente de primera calidad.</P>
        </Div>   
    </Main>
  );
  
  export default Home;