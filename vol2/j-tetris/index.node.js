import { t } from '../../snippets/index.js';
console.log(
  [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', t.b.g+'  '+t.r, '  '],
    [t.b.c+'  '+t.r, '  ', '  ', '  ', '  ', '  ', '  ', '  ', t.b.g+'  ', '  '+t.r],
    [t.b.c+'  ', t.b.s+'  ', '  '+t.r, '  ', '  ', '  ', t.b.m+'  ', '  ', '  ', t.b.g+'  '+t.r],
    [t.b.c+'ha', t.b.s+'ha', t.b.b+' s', 'dp', 'c ', t.b.r+' g', 'o ', t.b.m+'br', t.b.y+'rr', 'rr'+t.r],
    [t.b.c+'  ', t.b.s+'  ', t.b.b+'  '+t.r, '  ', '  ', '  ', t.b.r+'  ', '  ', t.b.y+'  ', '  '+t.r],
  ]
  .map(x=>x.join('')).join('\n')
);