const a = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..f-uinmOnvQzY96BN.RJcnwBaxgr88aBFsKk_DCBob_uzmH2bNMgmLKfMx1xTjLR4o0RY_6DT7sLaRgNHp4Bp-qvL9pjT9bDlKQrhKuJEsyNcjdQNJ7bp_4lMxalnoChl1D6s9yaWV26Cs0FZQ9_CIAgLRFLKcomKduS_2co7q8JXWw6U3Nx1CX4hF8qgBzz0.UwLLlEcD3q48RhxWb6ElIA"

const b = a.split('.')
const info = b[1]
console.log("info", info)

const obj = {a: 1, b: 2};

// Convert the object to a JSON string
const jsonString = JSON.stringify(obj);

// Encode the string to base64
const base64String = btoa(jsonString);

console.log(base64String); // Outputs the base64 encoded string
