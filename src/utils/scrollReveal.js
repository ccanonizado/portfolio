import ScrollReveal from 'scrollreveal';

const hasSR = typeof window === 'undefined';

export const sr = hasSR ? null : ScrollReveal();
export const srOptions = (delay = 200) => ({
  delay,
  duration: 500,
  distance: '20px',
  origin: 'bottom',
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
