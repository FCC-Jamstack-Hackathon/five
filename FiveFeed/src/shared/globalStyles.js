import { createGlobalStyle } from 'styled-components'
import DankMonoRegular from '../fonts/dankmono-regular.woff'
import DankMonoItalic from '../fonts/dankmono-italic.woff'

const textColor = '#D6DEEB'
const first = '#ADDB67'
const second = '#011627'
// const third = '#122D42'
// const fourth = '#32374C'

export default createGlobalStyle`
  @font-face {
    font-family: "Dank Mono";
    font-style: normal;
    font-weight: normal;
    src: local("Dank Mono"), url(${DankMonoRegular}) format("woff");
  }

  @font-face {
    font-family: "Dank-Mono";
    font-style: italic;
    font-weight: normal;
    src: local("Dank Mono"), url(${DankMonoItalic}) format("woff");
  }

  body {
    color: ${props => (props.dark ? second : first)};
    background-color: ${props => (props.dark ? first : second)};
  }

  a {
    color: ${textColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`