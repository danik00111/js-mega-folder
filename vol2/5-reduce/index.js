const posts = [{
  likes: 420,
  subs: 69,
  reposts: 111,
  totally: ['i', 'am', 'currently'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  not: ['held', 'hostage', 'forced'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  a: ['to', 'learn', 'this'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  message: ['method', 'send', 'help'],
}]
console.log(posts.reduce((a, v) => a + v.likes, 0));