class BlackJackGame {
  #deck = []; gamestate; userStood;
  user = {
    "h": [],
    hand() { let e = [...this.h].map(x => isNaN(x)?(x=='A'?11:10):parseInt(x));
      while(e.includes(11)) {
        if(e.reduce((a,v)=>a+v,0) > 21) { e[e.indexOf(11)] = 1; } else break }
      return e;
    },
    sum() { let e = [...this.h].map(x => isNaN(x)?(x=='A'?11:10):parseInt(x));
      while(e.includes(11)) {
        if(e.reduce((a,v)=>a+v,0) > 21) { e[e.indexOf(11)] = 1; } else break }
      return e.reduce((a,v)=>a+v,0);
    },
  };
  dealer = {
    "h": [],
    hand() { let e = [...this.h].map(x => isNaN(x)?(x=='A'?11:10):parseInt(x));
      while(e.includes(11)) {
        if(e.reduce((a,v)=>a+v,0) > 21) { e[e.indexOf(11)] = 1; } else break }
      return e;
    },
    sum() { let e = [...this.h].map(x => isNaN(x)?(x=='A'?11:10):parseInt(x));
      while(e.includes(11)) {
        if(e.reduce((a,v)=>a+v,0) > 21) { e[e.indexOf(11)] = 1; } else break }
      return e.reduce((a,v)=>a+v,0);
    },
  };
  /** Returns a string, containing the sums and hands of the user and the dealer.*/
  state() { return `${this.userStood?`[${this.user.sum()<=21?'STOOD':'BUST'}] `:''}your hand [${this.user.sum()}]: ${this.user.h}\n${this.dealer.sum() >= 17?`[${this.dealer.sum()<=21?'STOOD':'BUST'}] `:''}dealer's hand [${this.dealer.sum()}]: ${this.dealer.h}` }
  #userhit() {this.user.h.push(this.#deck.shift())};
  #dealerhit() {this.dealer.h.push(this.#deck.shift())};
  constructor() {
    let a = ['A','2','3','4','5','6','7','8','9','10','J','Q','K',
  ].map(x=>Array(4*6).fill(x)).flat();
    while(a.length) this.#deck.push(a.splice(Math.floor(Math.random()*a.length),1));
    this.user.h.push(this.#deck.shift());
    this.gamestate = 'on';
    this.userStood = false;
    this.move(true);
  }
  #gameEnd() {
    while(this.dealer.sum() < 17) this.#dealerhit();
    if(this.user.sum() <= 21) {
      if(this.dealer.sum() > 21) {
        this.gamestate = 'You won!'; // user stood, dealer bust
      } else if(this.dealer.sum() > this.user.sum()) {
        this.gamestate = 'Dealer won!'; // both stood, dealer has more
      } else if(this.dealer.sum() < this.user.sum()) {
        this.gamestate = 'You won!'; // both stood, user has more
      } else this.gamestate = 'It\'s a tie!';
    } else {
      if(this.dealer.sum() <= 21) {
        this.gamestate = 'Dealer won!'; // user bust, dealer stood
      } else {
        this.gamestate = 'It\'s a tie!'; // both bust
      }
    }
  }
  /** Play your move.
   * @param {boolean} b Whether to hit (true) or stand (false).*/
  move(b) {
    if(this.gamestate != 'on' || this.userStood) return;
    if(b) {
      this.#userhit();
      if(this.dealer.sum() < 17) this.#dealerhit();
      if(this.user.sum() >= 21) {this.userStood = true; this.#gameEnd()}
    } else {
      this.userStood = true; this.#gameEnd()
    }
  }
}

let game = new BlackJackGame;
console.log('[help] to get the help message');
let retryscreen = false;
const scores = {
  "You won!": 0,
  "Dealer won!": 0,
  "It's a tie!": 0,
}
const scorelog = x => {console.log(`\
${x == 'You won!' ? '\x1b[32m':''}${scores[ "You won!" ] } win${ scores[ "You won!" ] == 1?'':'s'}${x=='You won!'?'\x1b[0m':''} | \
${x=='It\'s a tie!'?'\x1b[33m':''}${scores["It's a tie!"]} tie${ scores["It's a tie!"] ==1?'':'s'}${x=='It\'s a tie!'?'\x1b[0m':''} | \
${x =='Dealer won!'?'\x1b[31m':''}${scores["Dealer won!"]} loss${scores["Dealer won!"]==1?'':'es'}${x=='Dealer won!'?'\x1b[0m':''}`)
}
console.log(game.state());
process.stdin.on('data',h=>{
  let input = String(h).toLowerCase();
  if(input.endsWith('\n')) input = input.substring(0,input.length-1);
  if(retryscreen) {
    if(['y','h','w'].includes(input)) {
      game = new BlackJackGame;
      retryscreen = 'fresh';
    } else {process.exit()};
  }
  if(['exit','e'].includes(input)) process.exit();
  if(['hit','draw','more','h','w'].includes(input)&&retryscreen!='fresh')game.move(true);
  else if(['stand','stop','s','q'].includes(input))game.move(false);
  else if(['scores','score','c'].includes(input))scorelog();
  else if(['help'].includes(input)) console.log('[hit, draw, more, h, w] to hit,\n[stand, stop, s, q] to stand,\n[exit, e] to exit,\n[scores, score, c] to see the score');
  else if(retryscreen != 'fresh') return;
  console.log(game.state());
  retryscreen = false;
  if(game.gamestate!='on'){
    scores[game.gamestate]++;
    scorelog(game.gamestate);
    console.log(game.gamestate, 'Want another one? [y, h, w], [n, e, q]');
    retryscreen = true;
  };
})

const t = {
  r: "\x1b[0m", // reset
  x: {
    b: "\x1b[1m", // bright
    d: "\x1b[2m", // dim
    u: "\x1b[4m", // underscore
    l: "\x1b[5m", // blink
    i: "\x1b[7m", // invert bg and fg
    h: "\x1b[8m", // hidden
  }, f: {
    k: "\x1b[30m", // black
    r: "\x1b[31m", // red
    g: "\x1b[32m", // green
    y: "\x1b[33m", // yellow
    b: "\x1b[34m", // blue
    m: "\x1b[35m", // magenta
    c: "\x1b[36m", // cyan
    w: "\x1b[37m", // white
    s: "\x1b[90m", // gray
  }, b: {
    k: "\x1b[40m", // black
    r: "\x1b[41m", // red
    g: "\x1b[42m", // green
    y: "\x1b[43m", // yellow
    b: "\x1b[44m", // blue
    m: "\x1b[45m", // magenta
    c: "\x1b[46m", // cyan
    w: "\x1b[47m", // white
    s: "\x1b[100m", //gray
  },
} // https://stackoverflow.com/a/41407246