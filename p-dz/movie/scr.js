let movies = [{
  Title: 'Barbie',
  Year: 2023,
  Director: {
    Name: 'Greta Gerwig',
    WikiLink: 'https://en.wikipedia.org/wiki/Greta_Gerwig'
  },
  Rating: 0.88, // 0 - 1, rotten - fresh
  BannerPath: './img/barbie-banner.jpeg',
  RatingCheck: function(){
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
  RatingCheck: function(){
    return this.Rating > 0.8;
  }
}]