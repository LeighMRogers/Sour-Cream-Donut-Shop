import donutHTML from "./DonutHTML.js"

//responsible for putting our donuts on the DOM

const donutDOMBuilder = (donutObj) => {
    document.querySelector("#donut-results").innerHTML += donutHTML(donutObj)
}

export default donutDOMBuilder