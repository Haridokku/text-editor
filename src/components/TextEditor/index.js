import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ContentContainer,
  StaticContainer,
  HeadingElement,
  ImageElement,
  DynamicContainer,
  UnorderedList,
  ListItem,
  ButtonElement,
  ButtonElementItalic,
  ButtonElementDecorate,
  BreakElement,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {boldIcon: false, italicIcon: false, textDecorateIcon: false}

  onChangeBoldValue = () => {
    this.setState(prevState => ({boldIcon: !prevState.boldIcon}))
  }

  onChangeItalicValue = () => {
    this.setState(prevState => ({italicIcon: !prevState.italicIcon}))
  }

  onChangeTextDecorateValue = () => {
    this.setState(prevState => ({
      textDecorateIcon: !prevState.textDecorateIcon,
    }))
  }

  render() {
    const {boldIcon, italicIcon, textDecorateIcon} = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <StaticContainer>
            <HeadingElement>Text Editor</HeadingElement>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </StaticContainer>
          <DynamicContainer>
            <UnorderedList>
              <ListItem>
                <ButtonElement
                  type="button"
                  data-testid="bold"
                  onClick={this.onChangeBoldValue}
                  boldIcon={boldIcon}
                >
                  <VscBold size={20} />
                </ButtonElement>
              </ListItem>
              <ListItem>
                <ButtonElementItalic
                  type="button"
                  data-testid="italic"
                  onClick={this.onChangeItalicValue}
                  italicIcon={italicIcon}
                >
                  <GoItalic size={20} />
                </ButtonElementItalic>
              </ListItem>
              <ListItem>
                <ButtonElementDecorate
                  type="button"
                  data-testid="underline"
                  onClick={this.onChangeTextDecorateValue}
                  textDecorateIcon={textDecorateIcon}
                >
                  <AiOutlineUnderline size={20} />
                </ButtonElementDecorate>
              </ListItem>
            </UnorderedList>
            <BreakElement />
            <TextAreaElement
              boldIcon={boldIcon}
              italicIcon={italicIcon}
              textDecorateIcon={textDecorateIcon}
            >
              Hi
            </TextAreaElement>
          </DynamicContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
