import generateQuote from "./generateQuote";
import "./styles/main.scss"

const motivateBtn = document.getElementById('motivate')
motivateBtn.addEventListener('click', generateQuote)

generateQuote()