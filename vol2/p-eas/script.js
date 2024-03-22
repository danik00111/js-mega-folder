document.querySelectorAll('.fruits-list li').forEach(listImg => {(
  new IntersectionObserver((is, _observer) => {
    console.log('called function');
    is.forEach(i => {
      // isIntersecting це властвисть обэкта яка вказуе чи перетинаэться елемент з облостью що спостерегаэться.
      if (i.isIntersecting) {
        i.target.querySelector('img').classList.replace('inactive', 'active');
        i.target.querySelector('h3').classList.replace('inactive', 'active');
      } else {
        i.target.querySelector('img').classList.replace('active', 'inactive');
        i.target.querySelector('h3').classList.replace('active', 'inactive'); 
      }
    })
  },{
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })
).observe(listImg)});