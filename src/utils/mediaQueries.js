import facepaint from 'facepaint';

const mq = facepaint([
  '@media(max-width: 2000px)',
  '@media(max-width: 1690px)',
  '@media(max-width: 1280px)',
  '@media(max-width: 980px)',
  '@media(max-width: 736px)',
  '@media(max-width: 480px)',
  '@media(max-width: 320px)'
]);

const techWidth = [452, 425, 400, 372, 345, 320, 282, 245];
const techHeight = [425, 400, 375, 350, 325, 300, 265, 230];
const techViewBox = techWidth.map(
  (width, i) => `0 0 ${width} ${techHeight[i]}`
);

const config = {
  navMq: {
    link: [
      '1.5rem',
      '1.4rem',
      '1.3rem',
      '1.2rem',
      '1.1rem',
      '1rem',
      '0.9rem',
      '0.8rem'
    ],
    divider: [
      '1.5rem',
      '1.4rem',
      '1.3rem',
      '1.2rem',
      '1.1rem',
      '1rem',
      '0.9rem',
      '0.8rem'
    ],
    container: [
      'flex-end',
      'flex-end',
      'flex-end',
      'flex-end',
      'flex-end',
      'center'
    ]
  },
  footerMq: ['1.2rem', '1.1rem', '1rem', '0.9rem', '0.8rem'],
  textMq: {
    h3: ['2.6rem', '2.4rem', '2.2rem', '2rem'],
    h4Nunito: ['1.7rem', '1.6rem', '1.5rem', '1.4rem'],
    h4FiraCode: ['1.3rem', '1.2rem', '1.1rem', '1rem'],
    p: ['1.3rem', '1.2rem', '1.1rem', '1rem']
  },
  aboutMq: {
    content: ['60%', '60%', '70%', '75%', '80%', '100%'],
    header: [
      '3.8rem',
      '3.6rem',
      '3.4rem',
      '3.2rem` ',
      '3rem',
      '2.8rem',
      '2.6rem',
      '2.4rem'
    ],
    subHeader: [
      '3.6rem',
      '3.4rem',
      '3.2rem',
      '3rem',
      '2.8rem',
      '2.6rem',
      '2.4rem',
      '2.2rem'
    ],
    intro: [
      '1.8rem',
      '1.7rem',
      '1.6rem',
      '1.5rem',
      '1.4rem',
      '1.3rem',
      '1.2rem',
      '1.1rem'
    ],
    techContainer: [
      'flex-end',
      'flex-end',
      'flex-end',
      'flex-end',
      'flex-end',
      'center'
    ],
    techWidth,
    techHeight,
    techViewBox
  },
  workMq: {
    containerJustify: [
      'space-between',
      'space-between',
      'space-between',
      'space-between',
      'start'
    ],
    containerDirection: ['row', 'row', 'row', 'row', 'column'],
    itemWidth: ['30%', '30%', '30%', '30%', '100%'],
    itemMargin: [0, 0, 0, 0, '6em 0']
  },
  projectsMq: {
    info: ['30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    descriptionWidth: [
      'calc(100% - 6em)',
      'calc(100% - 6em)',
      'calc(100% - 6em)',
      'calc(100% - 6em)',
      'calc(100% - 6em)',
      'calc(100% - 3em)'
    ],
    descriptionPadding: [
      '3em',
      '3em',
      '3em',
      '3em',
      '3em',
      '3em',
      '1.5em',
      '1.5em'
    ],
    contentJustify: [
      'space-between',
      'space-between',
      'space-between',
      'space-between',
      'start'
    ],
    contentDirection: ['row', 'row', 'row', 'row', 'column'],
    contentDetail: ['45%', '45%', '40%', '32.5%', '100%'],
    contentImage: ['50%', '50%', '55%', '65%', '100%']
  }
};

mq.config = config;

export default mq;
