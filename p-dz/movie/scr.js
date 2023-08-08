let movies = [{
  Title: 'Barbie',
  Year: 2023,
  Director: {
    Name: 'Greta Gerwig',
    WikiLink: 'https://en.wikipedia.org/wiki/Greta_Gerwig'
  },
  Rating: 0.88, // 0 - 1, rotten - fresh
  BannerPath: './img/barbie-banner.jpeg',
  FreshnessCheck: function(){
    return this.Rating > 0.8;
  }
},{
  Title: 'Meg 2: The Trench',
  Year: 2023,
  Director: {
    Name: 'Ben Wheatley',
    WikiLink: 'https://en.wikipedia.org/wiki/Ben_Wheatley'
  },
  Rating: 0.28, // 0 - 1, rotten - fresh
  BannerPath: './img/meg-2-the-trench-banner.jpeg',
  FreshnessCheck: function(){
    return this.Rating > 0.8;
  }
}]

for(let i=0;i<movies.length;i++) { // loop thorugh all movies objects
  let currentMovie = document.querySelector(`.movie:nth-child(${i+1})`);
  currentMovie.querySelector('.banner').src = movies[i].BannerPath;
  currentMovie.querySelector('.title').innerHTML = movies[i].Title;
  currentMovie.querySelector('.director').innerHTML = movies[i].Director.Name;
  currentMovie.querySelector('.director').href = movies[i].Director.WikiLink;
  currentMovie.querySelector('.year').innerHTML = movies[i].Year;
  currentMovie.querySelector('.percend').innerHTML = Math.round((movies[i].Rating) * 100);
  currentMovie.querySelector('.rating').classList.add((movies[i].FreshnessCheck()) ? 'fresh' : 'rotten');
  currentMovie.querySelector('.tomatometer').src = `./img/tomatometer-${(movies[i].FreshnessCheck()) ? 'fresh' : 'rotten'}.svg`;
}