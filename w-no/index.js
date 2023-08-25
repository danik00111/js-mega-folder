const musicLibrary = {
  count: 2,
  artists: [
    {
      name: 'The Beatles',
      albums: [
        {
          title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          year: 1967,
          tracks: [
            { title: 'With a Little Help from My Friends', duration: '2: 44' },
            { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
            { title: 'A Day in the Life', duration: '5:33' }
          ]
        },
        {
          title: 'Abbey Road',
          year: 1969,
          tracks: [
            { title: 'Come Together', duration: '4: 19' },
            { title: 'Something', duration: '3:01' },
            { title: 'Here Comes the Sun', duration: '3:06' }
          ]
        }
      ]
    },
    {
      name: 'Pink Floyd',
      albums: [
        {
          title: 'The Wall',
          year: 1979,
          tracks: [
            { title: 'Another Brick in the Wall', duration: '4:19' },
            { title: 'Comfortably Numb', duration: '3:01' },
            { title: 'Here Comes the Sun', duration: '3:06' }
          ]
        },
        {
          title: 'Dark Side of the Moon',
          year: 1973,
          tracks: [
            { title: 'Speak to Me/Breathe', duration: '3:58' },
            { title: 'Time', duration: '7:06' },
            { title: 'Money', duration: '6:22' }
          ]
        }
      ]
    }
  ]
}

const {
  count,
  artists: [
    {
      nameQ,
      albums: [
        {
          titleQQ, yearQQ, tracks: [
            { titleQQQ, durationQQQ },
            { titleQQW, durationQQW },
            { titleQQE, durationQQE }
          ]
        },
        {
          titleQW, yearQW, tracks: [
            { titleQWQ, durationQWQ },
            { titleQWW, durationQWW },
            { titleQWE, durationQWE }
          ]
        }
      ]
    },
    {
      nameW,
      albums: [
        {
          titleWQ, yearWQ, tracks: [
            { titleWQQ, durationWQQ },
            { titleWQW, durationWQW },
            { titleWQE, durationWQE }
          ]
        },
        {
          titleWW, yearWW, tracks: [
            { titleWWQ, durationWWQ },
            { titleWWW, durationWWW },
            { titleWWE, durationWWE }
          ]
        }
      ]
    },
  ]
} = musicLibrary;

console.log(artists[1]);