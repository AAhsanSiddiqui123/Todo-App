const MainMovieUrl = 'https://api.themoviedb.org/3/movie';
const MainTvUrl = 'https://api.themoviedb.org/3/tv';



//Movies
exports.Get_AllPopular_url = `${MainMovieUrl}`;
exports.Get_NowPlayingMovie_url = `${MainMovieUrl}`;
exports.Get_UpCommingMovie_url = `${MainMovieUrl}`;
exports.Get_TopRatedMovie_url = `${MainMovieUrl}`;


// Movie Detail
exports.Get_MovieDetail_url =  `${MainMovieUrl}`;

// Cast 
exports.Get_MovieCast_url =  `${MainMovieUrl}`;

// Review 
exports.Get_MovieReview_url =  `${MainMovieUrl}`;

//Tv Shows
exports.Get_AllTvPopular_url = `${MainTvUrl}`;

