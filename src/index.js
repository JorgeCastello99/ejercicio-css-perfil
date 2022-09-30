const BUTTON_THEMES = document.getElementsByClassName('button-themes')

let debounc = false
function changeThemes (color) {
  if (debounc) {
    document.documentElement.style.setProperty('--card-color', '#ffffff')
    document.documentElement.style.setProperty('--font-color', '#000000')
    document.documentElement.style.setProperty('--image-change', 'url("img/modo-oscuro-white.png")')
    document.documentElement.style.setProperty('--color-change', '#181820')
    debounc = false
  } else {
    document.documentElement.style.setProperty('--card-color', '#181820')
    document.documentElement.style.setProperty('--font-color', '#ffffff')
    document.documentElement.style.setProperty('--image-change', 'url("img/modo-oscuro.png")')
    document.documentElement.style.setProperty('--color-change', '#ffffff')
    debounc = true
  }
  // console.log()
}

BUTTON_THEMES[0].addEventListener('click', function () { changeThemes() })
