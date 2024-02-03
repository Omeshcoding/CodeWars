// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  const volume = width * height * depth;
  const totalSurfaceArea =
    2 * (depth * height + width * depth + width * height);

  return [totalSurfaceArea, volume];
}
