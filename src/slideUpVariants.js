export const slideUpVariants = {
  hidden: {
    // opacity: 0,
    // x: "100vw",
    scaleY: 0,
  },
  visible: {
    // opacity: 1,
    // x: 0,
    // transition: { type: "spring", delay: 0.5 },
    scaleY: 1,
    transition: { duration: 1, type: "spring", ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    // x: "-100vh",
    // transition: { ease: "easeInOut" },
    scaleY: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};
