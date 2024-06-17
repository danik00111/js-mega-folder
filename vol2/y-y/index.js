function raceTimeout(promises, timeout) {
  return Promise.race([
    ...promises,
    new Promise((_,e)=>{
      setTimeout(()=>{e("Nothing ran in time!")},timeout)
    })
  ])
};

const tf =(t)=> new Promise((y,n)=> { setTimeout(() => { return y(t) }, t) });

raceTimeout([tf(3e3),tf(5e3)],4e3).then(x=>console.log("ran:",x)).catch(console.log);