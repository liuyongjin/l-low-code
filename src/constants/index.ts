export const ENTRY_PATH = "/src/pages";

export const VARIANTS = {
  bounceInDown: {
    initial: {},
    animate: {
      y: [-720, 24, -12, 4, 0],
      scaleY: [4, 0.9, 0.95, 0.985, 1],
      opacity: [0, 1, 1, 1, 1],
      transition: { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    exit: {
      y: [-12, 24, -720],
      scaleY: [0.985, 0.9, 3],
      opacity: [1, 1, 0],
      transition: { duration: 0.48, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};
