const React = require('react');

module.exports = {
  navLinks: [
    {
      name: 'WORK',
      url: '#work'
    },
    {
      name: 'PROJECTS',
      url: '#projects'
    },
    {
      name: 'CONTACT',
      url: '#contact'
    }
  ],
  about: {
    header: 'Carlos Canonizado',
    subHeader: 'Software Engineer',
    intro:
      'Kumusta! I am a developer from the Philippines, and I am a tech enthusiast who is always hungry for learning. I graduated as a Cum Laude from the University of the Philippines with a degree in Computer Science.',
    resume: 'See my Resumé'
  },
  work: {
    header: 'MY WORK EXPERIENCE',
    content: [
      {
        title: 'Samsung R&D Philippines',
        subTitle: 'React Developer (August 2019 - Present)',
        description: [
          '\tCurrently, I am a front-end developer who delivers high-quality output and works well under pressure especially when there is a tight deadline.\n\n\tAside from projects, there are also algorithm exams to gauge and improve our problem-solving abilities where I earned the title of ',
          <strong key="pro">Algorithm Professional</strong>,
          '.'
        ]
      },
      {
        title: 'Futurity Learning',
        subTitle: 'Developer Specialist (March 2019 - June 2019)',
        description: [
          '\tThis is a part-time remote work that I did when I was a senior in college. This is where I discovered ',
          <strong key="flutter">Flutter</strong>,
          ' and its many amazing capabilities.\n\n\tDuring this time, I was able to express my creative freedom in developing a mobile application.'
        ]
      },
      {
        title: 'Amihan Global Strategies (AGSX)',
        subTitle: 'Software Engineer Intern (June 2018 – August 2018)',
        description: [
          '\tI worked for AGSX for my internship where I experienced what it is like to work in a start-up corporate setting.\n\n\tThis is where I first learned the industry practices, where I got to create a ',
          <strong key="chatbot">financial chatbot</strong>,
          ' using Angular 5, Dialogflow, and Basic Scala Backend.'
        ]
      }
    ]
  },
  projects: {
    header: 'MY PROJECTS',
    info:
      'Note: At Samsung, I developed high-quality modules using React. However, I cannot disclose any details due to a signed non-disclosure agreement.',
    content: [
      {
        title: 'Komunidad (under development)',
        description:
          '\tKomunidad is a mobile application meant to monitor and check the status (like weather) of different communities. It collects images and data from hundreds to thousands of cameras around the Philippines that users can eventually see.\n\n\tAdministrators of the application can post announcements and alerts; users can add their own locations as well. Since the application is made with Flutter, this application is compatible with both Android and iOS devices.',
        dependencies: ['Flutter', 'Firebase', 'Java'],
        github: null
      },
      {
        title: 'Sign Me Up',
        description:
          '\tSign Me Up is the undergraduate research output that I presented which is equivalent to a thesis project. It is a sign language translator that captures still images of hand signs and then translates them into letter/words. It also has a database of hand signals that people can refer to if they want to communicate with a deaf person.\n\n\tConvolutional Neural Network was used to train the data with the help of TensorFlow. This project won best in research for the Computer Science category during the 2nd ICS Mini-Symposium held at the University of the Philippines, Los Baños, Laguna.',
        dependencies: ['Android Studio', 'TensorFlow'],
        github: 'https://github.com/ccanonizado/sign-language-translator'
      },
      {
        title: 'Super Smash Bros',
        description:
          '\tSuper Smash Bros is a Python and Protobuf implementation of the classic Super Smash Bros arcade game. This game is multiplayer and can accommodate up to 6 players. It also has chat functionality among its players.\n\n\tThis is the first multiplayer game that I created which also got featured in the Institute of Computer Science exhibit last 2019.',
        dependencies: ['Python', 'Pygame', 'Protobuf'],
        github: 'https://github.com/ccanonizado/super-smash-bros'
      }
    ]
  },
  contact: {
    header: 'CONTACT ME',
    content: [
      'I am currently looking for remote opportunities.\n\nIf you are looking for someone to add to your team, I might be the right guy!\nOr if you just want to talk, share ideas, or just connect, feel free to send me an email at ',
      <a key="email" href="mailto:canonizadocarlos@gmail.com">
        canonizadocarlos@gmail.com
      </a>,
      '.\n\nYou can also take a look at my LinkedIn and other projects at GitHub.'
    ],
    linkedin: 'https://www.linkedin.com/in/ccanonizado/',
    github: 'https://github.com/ccanonizado'
  },
  footer: 'Design by Carlos Canonizado'
};
