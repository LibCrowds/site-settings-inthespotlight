// Basic configuration
const config = {
  name: 'In the Spotlight',
  tagline: 'Bring past performances from the British Library’s historic playbills collection to life.',
  description: 'Help rediscover popular entertainment from the past 300 years by transcribing names and performances on the playbills of Britain’s old theatres.',
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// Order of preference for project thumbnail types
config.thumbnailPreference = [
  'iiif',
  'custom',
  'gravatar'
]

// Order of preference for user avatar types
config.avatarPreference = [
  'custom',
  'gravatar'
]

// Link to the site forum
config.forumUrl = 'https://community.libcrowds.com/t/in-the-spotlight'

// Main background image for the site
config.bgImg = require(`./background.jpg`)

// Sections of markdown text for the about page
config.about = {
  intro: require(`./about/intro.md`),
  subsections: [
    {
      id: 'projects',
      title: 'Projects',
      markdown: require(`./about/projects.md`)
    },
    {
      id: 'technology',
      title: 'Technology',
      markdown: require(`./about/technology.md`)
    },
    {
      id: 'contact',
      title: 'Contact',
      markdown: require(`./about/contact.md`)
    }
  ]
}

module.exports = config
