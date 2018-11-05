import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
`
const Title = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`
const Images = styled.div`
  display: flex;
  width: 737px;
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

const Form = styled.form`
  max-width: 420px;
  margin: 50px auto;
`
const Input = styled.input`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid rgb(173, 219, 103);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`
const Textarea = styled.textarea`
  height: 150px;
  line-height: 150%;
  resize: vertical;
  width: 100%;
  border: 2px solid rgb(173, 219, 103);
  border-radius: 5px;
  margin-bottom: 15px;
`
const Submit = styled.button`
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background: rgb(173, 219, 103);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
  &:hover {
    background: #cc6666;
  }
`
const SecondPage = () => (
  <Container>
    <Title>
      <h1>Meet the team</h1>
    </Title>
    <Images>
      <ImageWrapper>
        <Img src="https://avatars0.githubusercontent.com/u/2607929?s=400&v=4" />
        <div>Frank</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/1832557?s=400&v=4" />
        <div>Kohei</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars0.githubusercontent.com/u/28818476?s=400&v=4" />
        <div>Justin</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/6034810?s=400&v=4" />
        <div>Hunter</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://pbs.twimg.com/profile_images/793136164379193344/uBl63U29_400x400.jpg" />
        <div>Niki</div>
      </ImageWrapper>
      <ImageWrapper>
        <Img src="https://avatars1.githubusercontent.com/u/26584764?s=400&v=4" />
        <div>Sumayyah</div>
      </ImageWrapper>
    </Images>
    <div style={{ textAlign: 'center' }}>
      <Form
        action="https://formspree.io/hunter.casbeer@gmail.com"
        method="POST"
      >
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="_replyto" placeholder="Your email" />
        <Textarea name="message" placeholder="Send us feedback! 💚" />
        <Submit type="submit">Submit</Submit>
      </Form>
    </div>
  </Container>
)

export default SecondPage
