import styled from "styled-components";



export const Container = styled.div`
height: 95vh;
width: 100%;
display: flex;
position: relative;
padding:20px 10px;
overflow: hidden;
justify-content: center;
overflow: hidden;

@media screen and (max-width: 768px){

    display:none;
    
}


`


export const SlideContainer = styled.div`
background-color:#e4e6eb;
width: 80%;
height: 530px;
overflow: hidden;










`

export const Wrapper = styled.div`
position: relative;

width: 100%;
height: 100%;

background-size:cover;
overflow: hidden;
background-image: url(${props => props.slides[props.slideIndex].url}) ;
background-position: top center;
background-repeat: no-repeat;
object-fit: contain;
transition: 1ms ease-in-out;

`

export const Right = styled.div`
position: absolute;
height: 30px;
width: 30px;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
top: 50%;
right: 15px;
background-color: white;
font-weight:bold;

`
export const Left = styled.div`
position: absolute;
height: 30px;
width: 30px;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
top: 50%;
left: 15px;
background-color: white;
font-weight: bold;
`

export const Section = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 100%;
padding-bottom: 10px;

@media screen and (max-width:600px){
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:20px ;
    
}


`


export const Card = styled.div`
margin-top: 20px;
width: 350px;
height: 400px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 30px;
border-radius:10px ;
flex-direction: column;
padding-top:4px;
@media screen and (max-width:600px){
    width: 200px;
    height: 300px;
    
    
}
`

export const Image = styled.img`
width: 60%;
border-radius: 10px;
`

