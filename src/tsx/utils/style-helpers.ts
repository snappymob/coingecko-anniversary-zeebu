export const getActiveBreakpoint = () => {
  if (window.matchMedia('(min-width: 1536px)').matches) {
    return 5; // 2xl
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    return 4; // xl
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    return 3; // lg
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 2; // md
  } else if (window.matchMedia('(min-width: 640px)').matches) {
    return 1; // sm
  } else {
    return 0; // default
  }
};
