import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
margin: 0 auto;
`
const Images = styled.div`
  display: flex;
  width: 800px;
  margin: auto;
`
const ImageWrapper = styled.div`
  display: flex
  flex-direction: column;
  align-items: center;
  padding: 5px;
`

const Img = styled.img`
  border-radius: 50%;
`

const SecondPage = () => (
  <Container>
    <Images>
      <ImageWrapper>
        <Img src="https://avatars0.githubusercontent.com/u/2607929?s=400&v=4" />
        <div>frank</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/1832557?s=400&v=4" />
        <div>kohei</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars0.githubusercontent.com/u/28818476?s=400&v=4" />
        <div>justin</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/6034810?s=400&v=4" />
        <div>hunter</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://pbs.twimg.com/profile_images/793136164379193344/uBl63U29_400x400.jpg" />
        <div>niki</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/26584764?s=400&v=4" />
        <div>sumayyah</div>
      </ImageWrapper>
    </Images>
    <form action="https://formspree.io/hunter.casbeer@email.com" method="POST">
      <input type="text" name="name" />
      <input type="email" name="_replyto" />
      <input type="submit" value="Send"/>
    </form>
  </Container>
)

export default SecondPage
