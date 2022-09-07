var getWidth_Height = document.querySelector('#Checked')

var title = document.querySelector('#Title')

var display = () => {
    var setWidth = document.documentElement.clientWidth
    var setHeight = document.documentElement.clientHeight
    title.textContent = `Width is ${setWidth} , Height is ${setHeight}`
}
