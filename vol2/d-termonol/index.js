import {t} from '../../snippets/index.js';
/* console.log(`\
speed/max: ${t.x.b}50${t.r}${t.x.d}/200${t.r}, \
is ${Math.random()>0.5 ? `${t.f.b}on${t.r}` : `${t.f.r}off${t.r}`}, \
rode ${t.x.u}100${t.r}km, \
costs $${t.b.s}46999${t.r}\
`) */
console.log(`\
${t.b.s}    ${t.b.r}  ${t.b.s}    ${t.r}
${t.b.s}        ${t.b.b}  ${t.r}
${t.b.s}    ${t.b.c}  ${t.b.b}    ${t.r}
${t.b.s}          ${t.r}
${t.b.s}          ${t.r}`);
process.stdin.on('data',h=>{
  if(String(h)=='exit\n'||String(h)=='exit')process.exit();
})