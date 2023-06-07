import React from 'react'
import { slides, categories} from '../data/data'
import { useState } from 'react'
import { SlideContainer, Container,  Wrapper, SubSection, Left, Right, Image, Section, Card } from '../data/slideElement'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { addToCart } from '../Services/Cartslice'
import { useDispatch } from 'react-redux'


const Slider = () => {

  
const dispatch = useDispatch()
  
  const [slideIndex, setIndex] = useState(0)

   const Prev =() => {

    const isFirst = slideIndex ===0;
    const nextPade = isFirst ? slides.length -1 : slideIndex - 1;
    setIndex(nextPade)
   }


   const Next = () => {
     
     const isLast =slideIndex === slides.length - 1;
     const next = isLast ? 0 : slideIndex + 1;
     setIndex(next) 
   }


  return (
    <>
    <Container>
    <SlideContainer>
    <Wrapper slides={slides} slideIndex={slideIndex}>
      <Left>
      <AiOutlineArrowLeft onClick={Prev}/>
      </Left>
      
      <Right>
      <AiOutlineArrowRight onClick={Next}/>
      </Right>
    </Wrapper>
    </SlideContainer>
    </Container>

    <Section>
     
     {
      categories.map((item) => (
     <Card key={item.id}>
      <Image src={item.img}/>
      <button className='mt-4 
      bg-gradient-to-r from-green-400 to-blue-500 p-2 
      rounded text-white '

      onClick={( )=>dispatch(addToCart(item))}
       >
        Add To Cart</button>
     </Card>

      ))
     }

    </Section>
      

  

    

    </>
  )
}

export default Slider
