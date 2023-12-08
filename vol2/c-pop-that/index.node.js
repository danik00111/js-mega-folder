import evaluate from "./eval.js";
class Game {
  field = [];
  on = false;
  turn = true;
  get snap() { return `< board: ${this.field}, p${this.turn?1:2} to play, game running: ${this.on}\n` }
  mainMenu(x) {
    switch(true){
      case x.startsWith('newgame '):
        this.field=x;
        if(this.field==='newgame square'){this.field=[6,6,6,6,6,6];}
        else if(this.field==='newgame octagon'){this.field=[3,5,6,6,5,3];}
        else this.form(this.field.split(' '));
        if(this.field.length>0)this.on=true;
      break; case x.startsWith('eval '):
        if(x == 'eval ' || x == 'eval') { console.log('where value') } else {
          console.log(`The ${(evaluate(x.split(' ').slice(1).map(y=>parseInt(y))))?'player to move':'waiting player'} can force a win.`)}
    }
  }
  play(x) {
    if(x=='abort'){
      console.log('Allat for this...');
      this.on=false;turn=true;field=[];
      return;
    }
    let np = x.split(' ');
    np.shift();
    np = np.map(x=>parseInt(x));
    if(inRange(np[0],0,this.field.length) && inRange(np[1],1,this.field[np[0]])) {
      this.field[np[0]] -= np[1];
      this.turn = !this.turn
    };
    this.form(this.field);
    if(this.field.length===0){
      console.log(`P${turn?1:2} wins!`);
      this.on=false; turn = true;
    }
  }
  form(x) {this.field = x.map(Number).filter(n=>Number.isInteger(n)&&n>0)}
}
const inRange=(x,min,max)=>((x>=min)&&(x<=max)); // edge values inclusive
let game;
let inp;
game=new Game;
const helpCmds = `
< [newgame [board]] -
<   if no game is currently ran,
<   start a new game with the board state you choose
<   (either [square], [octagon], or a custom one).
< [eval [board]] -
<   run a script to analyse a custom board with minimax,
<   and see who has a forced win in the position.
<   (i dont actually know if ill be able to code a minimax)
< [pop [i] [n]] - 
<   play a move, popping [n] bubbles in the [i]th row (0-indexed).
< [abort] - stop the game midway.
< [advhelp [cmd]] - get some more info on a command's syntax
`
const advHelp = {
  "advhelp newgame": `< For a custom board, put any amount of numbers, separated by spaces.
< Square preset is 6 rows of 6, and octagon preset is 3-5-6-6-5-3.`,
  "advhelp eval": `< For a custom board, put any amount of numbers, separated by spaces.
< Square preset is 6 rows of 6, and octagon preset is 3-5-6-6-5-3.`,
  "advhelp pop": `< In the argument, put 2 numbers,
< the first one pointing to a number in a zero-indexed array (0 = first number),
< and the second one being how much bubbles you want to pop
< (both numbers must be integers).`,
  "advhelp advhelp": 'bruhhhghghh',
  "advhelp abort": 'bruhhhghghh',
  "advhelp help": 'bruhhhghghh',
}
//..'....|....'....|....'....|....'....|....'....|....'....|....'....|....'....| 80 chars ruler
const help = `
< 2 players take turns on a board of pop it (usually 6 rows of 6 bubbles).
< on your turn, you pop one or more bubbles
< (all bubbles you pop must be on one row).
< whoever has to pop the last bubble loses, and their opponent wins.
< [help cmds] - get the commands to play the game
`
console.log('\n< idek run [help]\n');
process.stdin.on('data',h=>{
  inp = String(h).toLowerCase();
  if(inp.endsWith('\n'))inp=inp.slice(0,-1);
  switch(true){
    case(inp==='exit'):                      process.exit();
    break; case(inp==='[help]'):             console.log('< without the brackets\n', help);
    break; case(inp==='help'):               console.log(help);
    break; case(inp==='help cmds'):          console.log(helpCmds);
    break; case(inp.startsWith('advhelp ')): console.log(advHelp[inp]);
    break; case(!game.on):                   game.mainMenu(inp);
    break; case(game.on):                    game.play(inp);
    break; }
  console.log(game.snap);
});