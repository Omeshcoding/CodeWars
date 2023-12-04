// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  // Ensure values are within the valid range (0-255)
  const clamp = (value) => Math.min(255, Math.max(0, value));

  // Convert decimal values to hexadecimal and pad with zeros
  const toHex = (value) => {
    const hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
  };

  // Calculate and return the hexadecimal representation
  const hexR = toHex(clamp(r));
  const hexG = toHex(clamp(g));
  const hexB = toHex(clamp(b));

  return hexR + hexG + hexB;
}

// Example usage:
console.log(rgb(255, 255, 255)); // Output: "FFFFFF"
console.log(rgb(255, 255, 300)); // Output: "FFFFFF"
console.log(rgb(0, 0, 0)); // Output: "000000"
console.log(rgb(148, 0, 211)); // Output: "9400D3"
