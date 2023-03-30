import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const atomicStyles = defineProperties({
  properties: {
    backgroundColor: ["red", "blue", "green"],
    color: ["white", "black", "red"],
    padding: ["0", "8px", "16px", "24px"],
    borderRadius: ["4px", "8px"],
  },
});

export const atoms = createSprinkles(atomicStyles);
