const musicLibrary = {
  count: 2,
  artists: [
    {
      name: 'The Beatles',
      albums: [
        {
          title:'Sgt. Pepper\'s Lonely Hearts Club Band',
          year: 1967,
          tracks: [
            { title: 'With a Little Help from My Friends', duration: '2:44' },
            { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
            { title: 'A Day in the Life', duration: '5:33' }
          ]
        },
        {
          title: 'Abbey Road',
          year: 1969,
          tracks: [
            { title: 'Come Together', duration: '4:19' },
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
      name: nameQ,
      albums: [
        {
          title: titleQQ,
          year: yearQQ,
          tracks: [
            { title: titleQQQ, duration: durationQQQ },
            { title: titleQQW, duration: durationQQW },
            { title: titleQQE, duration: durationQQE }
          ]
        },
        {
          title: titleQW,
          year: yearQW,
          tracks: [
            { title: titleQWQ, duration: durationQWQ },
            { title: titleQWW, duration: durationQWW },
            { title: titleQWE, duration: durationQWE }
          ]
        }
      ]
    },
    {
      name: nameW,
      albums: [
        {
          title: titleWQ,
          year: yearWQ,
          tracks: [
            { title: titleWQQ, duration: durationWQQ },
            { title: titleWQW, duration: durationWQW },
            { title: titleWQE, duration: durationWQE }
          ]
        },
        {
          title: titleWW,
          year: yearWW,
          tracks: [
            { title: titleWWQ, duration: durationWWQ },
            { title: titleWWW, duration: durationWWW },
            { title: titleWWE, duration: durationWWE }
          ]
        }
      ]
    },
  ]
} = musicLibrary;

console.log(count);
console.log(nameQ);
console.log(titleWQ);
console.log(yearQQ);
console.log(titleWQW);
console.log(durationWWQ);