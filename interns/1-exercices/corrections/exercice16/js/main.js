import {
  diam,
  circum,
  area
} from './circle'

document.addEventListener('click', function () {
  const radius = document.querySelector('#radius').value
  const diameter = diam(radius)
  const circumference = circum(radius)
  const circleArea = area(radius)

  document.querySelector('#diam').value = diameter
  document.querySelector('#circumference').value = circumference
  document.querySelector('#area').value = circleArea
})
