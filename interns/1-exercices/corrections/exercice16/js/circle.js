export function diam (radius) {
  radius = Number(radius)
  const res = 2 * radius
  return res.toFixed(2)
}

export function circum (radius) {
  radius = Number(radius)
  const res = 2 * Math.PI * radius
  return res.toFixed(2)
}

export function area (radius) {
  radius = Number(radius)
  const res = Math.PI * radius * radius
  return res.toFixed(2)
}
