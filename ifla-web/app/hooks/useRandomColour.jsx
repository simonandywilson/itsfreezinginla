export function useRandomColour(colours) {
  return colours[Math.floor(Math.random() * colours.length)];
}
