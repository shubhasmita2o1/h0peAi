export const Animations = {
  LeftToRight: {
    parent: {
      visible: {
        transition: { staggerChildren: 0.5 },
      },
    },
    child: {
      hidden: { x: -50, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      },
    },
  },
  BottomToTop: {
    parent: {
      visible: {
        transition: { staggerChildren: 3.2 },
      },
    },
    child: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.3 },
      },
    },
  },
};
