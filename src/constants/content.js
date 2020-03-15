module.exports = {
  navLinks: [
    {
      name: 'Work',
      url: '#work'
    },
    {
      name: 'Projects',
      url: '#projects'
    },
    {
      name: 'Contact',
      url: '#contact'
    }
  ],
  about: {
    header: 'Carlos Canonizado',
    subHeader: 'Software Engineer',
    intro:
      'Kamusta! I am a developer from the Philippines, and I am a tech enthusiast who is always hungry for learning. I graduated as a Cum Laude from the University of the Philippines with a degree in Computer Science.'
  },
  work: {
    header: 'MY WORK EXPERIENCE',
    content: [
      {
        title: 'Samsung Research and Development Institute Philippines',
        subTitle: 'React Developer (August 2019 - Present)',
        description:
          '\tCurrently, I am working in Samsung R&D Philippines. I am a front-end developer who delivers high-quality output and works well under pressure especially when there is a tight deadline.\n\n\tWe also have algorithm exams to gauge and improve our problem-solving abilities where I earned the title Algorithm Professional.'
      },
      {
        title: 'Futurity Learning',
        subTitle: 'Developer Specialist (March 2019 - June 2019)',
        description:
          '\tThis is a part-time remote work that I did when I was a senior in college. This is where I discovered Flutter and its many amazing capabilities.\n\n\tDuring this time, I was able to express my creative freedom in developing a mobile application.'
      },
      {
        title: 'Amihan Global Strategies (AGSX)',
        subTitle: 'Software Engineer Intern (Jun 2018 – Aug 2018)',
        description:
          '\tI worked for AGSX for my internship where I experienced what it is like to work in a start-up corporate setting.\n\n\tThis is where I first learned the industry practices, where I got to create a financial chat-bot using Angular 5 and Basic Scala Backend.'
      }
    ]
  },
  projects: {
    header: 'MY PROJECTS',
    info:
      'Note: At Samsung, I developed high quality modules using React. However, I cannot disclose any details to a signed non-disclosure agreement.',
    content: [
      {
        title: 'Komunidad',
        description:
          '\tKomunidad is a mobile application meant to monitor and check on the status of communities. It collects images and data from hundreds to thousands of cameras around the Philippines that users will then see.\n\n\tAdministrators of the application can post announcements and alerts; users can add their own locations as well. Since the application is made with Flutter, this application is compatible with both Android and iOS devices.',
        dependencies: ['Flutter', 'Firebase', 'Java']
      },
      {
        title: 'Sign Me Up',
        description:
          '\tSign Me Up is the research output that I came up with (equivalent to a thesis project). It is a sign language translator that captures still images of hand signs and then translates them into letter/words. It also has a database of hand signals that people can refer to if they want to communicate with a deaf person.\n\n\tConvolutional Neural Network was used to train the data with the help of Tensorflow. This project won best in research for the Computer Science category during the 2nd ICS Mini-Symposium held at the University of the Philippines, Los Banos, Laguna.',
        dependencies: ['Android Studio', 'Tensorflow']
      },
      {
        title: 'Super Smash Bros',
        description:
          '\tSuper Smash Bros is a Python and Protobuf implementation of the classic super smash bros arcade game. This game is multiplayer and can have up to 6 players. It also has chat functionality among its players.\n\n\tThis is the first multiplayer game that I created which also got featured in the Institute of Computer Science exhibit last 2019.',
        dependencies: ['Python', 'Pygame', 'Protobuf']
      }
    ]
  },
  contact: {
    header: 'CONTACT ME',
    content:
      'If you are looking for someone to add to your remote team, I might be the person for you! Or even if you just want to talk, share ideas, feel free to send me an email.'
  },
  footer: 'Design by Carlos Canonizado'
};
