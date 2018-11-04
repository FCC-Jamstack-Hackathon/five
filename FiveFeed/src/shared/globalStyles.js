import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'

const textColor = '#D6DEEB'
const first = '#ADDB67'
const second = '#011627'
const third = '#122D42'
const fourth = '#32374C'


export default createGlobalStyle`
  @font-face {
    font-family: "Dank-Mono";
    font-style: normal;
    font-weight: normal;
    src: local("Dank Mono"), local("Dank-Mono"), url(${fonts.DankMonoRegular}) format("woff");
  }

  @font-face {
    font-family: "Dank-Mono";
    font-style: italic;
    font-weight: normal;
    src: local("Dank Mono"), local("Dank-Mono"), url(${fonts.DankMonoItalic}) format("woff");
  }

  body {
    color: ${props => (props.dark ? second : first)};
    background-color: ${props => (props.dark ? first : second)};
  }
`