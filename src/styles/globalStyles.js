import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}

@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, main {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	box-sizing:border-box;
	font-family: 'Cafe24Oneprettynight';
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

button {
    background: none;
    border:none;
    cursor: pointer;
    border-radius:5px;
}

section {
    width:100%;
    height:100vh;
    display: flex;
    flex-direction :column;
    justify-content: center;
    align-items: center;
}

hr {
    border:1px solid #fff;
    width:90%;
}
`

export default GlobalStyle;