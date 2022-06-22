export function diam (radius) {
  radius = Number(radius)
  return 2 * radius
}

export function circum (radius) {
  radius = Number(radius)
  return 2 * Math.PI * radius
}

export function area (radius) {
  radius = Number(radius)
  return Math.PI * radius * radius
}
