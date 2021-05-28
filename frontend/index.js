socket = io()

const logo = document.getElementById('logo')
const href = window.location.href

logo.href = href

const info = document.getElementById('info')
const infoButton = document.getElementById('infoButton')

infoButton.addEventListener('click', e => {
    info.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

const header = document.getElementById('nav')
