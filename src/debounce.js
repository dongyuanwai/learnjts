function debounce(funName, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(funName.id)
        funName.id = setTimeout(function () {
            funName.call(that, _args)
        }, delay)
    }
}

export default debounce