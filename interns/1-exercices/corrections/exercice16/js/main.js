import {
  diam,
  circum,
  area
} from './circle.js'

document.querySelector('input[type="button"]').addEventListener('click', computeValues)

function computeValues () {
  const radius = document.querySelector('#radius').value
  const diameter = diam(radius)
  const circumference = circum(radius)
  const circleArea = area(radius)

  document.querySelector('input[name=diameter]').value = diameter
  document.querySelector('#circumference').value = circumference
  document.querySelector('#area').value = circleArea
}
