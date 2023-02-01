export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        setTimeout(function () {
            AlertError.element.classList.remove('open')
        }, 3000)
    }
}

