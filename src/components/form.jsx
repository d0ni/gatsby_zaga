import React, { Component } from "react"
import styled from "styled-components"

// import { Flex } from "../utils/const"

const Input = styled.input`
  width: 48%;
  background-color: #373737;
  border: none;
  color: white;
  padding: 19px 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
  /* margin-right: 30px; */
  font-size: 0.875em;
  font-family: inherit;

  &::placeholder {
    font-size: 0.875em;
    color: #9b9b9b;
    font-family: inherit;
  }

  &:focus {
    border: solid 1px #e9e2d8;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 170px;
  border: none;
  color: white;
  background-color: #373737;
  padding: 19px 30px;
  box-sizing: border-box;
  resize: none;
  margin-bottom: 30px;
  font-size: 0.875em;
  font-family: inherit;

  &::placeholder {
    font-size: 0.875em;
    color: #9b9b9b;
    font-family: inherit;
  }

  &:focus {
    border: solid 1px #e9e2d8;
  }
`

const Send = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 44px;
  border: solid 2px #fff;
  font-size: 1em;
  font-family: "helveticaneuebold", sans-serif;
  font-weight: 500;
  color: white;
  background: transparent;

  &:hover {
    background: #fff;
    color: #2b2b2b;
  }
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ width }) => (width ? `width: ${width};` : "")}
`

export default class FormContainer extends Component {
  render() {
    const { width } = this.props

    return (
      // <Flex justify="space-between" wrap width={width}>
      <Form name="request" method="POST" netlify width={width}>
        <Input name="name" placeholder="Name"></Input>
        <Input name="E-mail" placeholder="E-mail"></Input>
        <Input name="Company" placeholder="Company"></Input>
        <Input name="Subject" placeholder="Subject"></Input>
        <TextArea name="Description" placeholder="Description"></TextArea>
        <Send type="submit">Send</Send>
      </Form>
      // </Flex>
    )
  }
}
