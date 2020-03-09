import facepaint from 'facepaint';

const mq = facepaint([
  '@media(max-width: 320px)',
  '@media(max-width: 480px)',
  '@media(max-width: 736px)',
  '@media(max-width: 980px)',
  '@media(max-width: 1280px)',
  '@media(max-width: 1690px)',
  '@media(max-width: 2000px)'
]);

export default mq;
