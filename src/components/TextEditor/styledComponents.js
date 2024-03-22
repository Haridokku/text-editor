import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #1b1c22;
  border-radius: 10px;
  height: 80vh;
`
export const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: transparent;
`
export const HeadingElement = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ImageElement = styled.img`
  width: 400px;
  height: 400px;
`
export const DynamicContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  background-color: #1b1c22;
  border-radius: 10px;
  border: 2px solid #334155;
  padding: 20px;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin: 5px;
`
export const ButtonElement = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;

  color: ${props => (props.textDecorateIcon ? '#faff00' : '#f1f5f9')};
  color: ${props => (props.boldIcon ? '#faff00' : '#f1f5f9')};
`
export const ButtonElementItalic = styled(ButtonElement)`
  color: ${props => (props.italicIcon ? '#faff00' : '#f1f5f9')};
`
export const ButtonElementDecorate = styled(ButtonElement)`
  color: ${props => props.textDecorateIcon && '#faff00'};
`
export const BreakElement = styled.br`
  width: 100%;
  border: 2px solid #334155;
`
export const TextAreaElement = styled.textarea`
  color: #f1f5f9;
  font-size: 20px;
  background-color: transparent;
  font-weight: ${props => (props.boldIcon ? 'bold' : 'normal')};
  font-style: ${props => (props.italicIcon ? 'italic' : 'normal')};
  text-decoration: ${props => (props.textDecorateIcon ? 'underline' : 'none')};
`
