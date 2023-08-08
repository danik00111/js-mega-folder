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
  document.querySelector(`.movie:nth-child(${i+1}) .banner`).src = movies[i].BannerPath;
  document.querySelector(`.movie:nth-child(${i+1}) .title`).innerHTML = movies[i].Title;
  document.querySelector(`.movie:nth-child(${i+1}) .director`).innerHTML = movies[i].Director.Name;
  document.querySelector(`.movie:nth-child(${i+1}) .director`).href = movies[i].Director.WikiLink;
  document.querySelector(`.movie:nth-child(${i+1}) .year`).innerHTML = movies[i].Year;
  document.querySelector(`.movie:nth-child(${i+1}) .percend`).innerHTML = Math.round((movies[i].Rating) * 100);
  document.querySelector(`.movie:nth-child(${i+1}) .rating`).classList.add((movies[i].FreshnessCheck()) ? 'fresh' : 'rotten');
  document.querySelector(`.movie:nth-child(${i+1}) .tomatometer`).src = `./img/tomatometer-${(movies[i].FreshnessCheck()) ? 'fresh' : 'rotten'}.svg`;
}