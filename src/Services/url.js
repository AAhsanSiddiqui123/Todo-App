const MainMovieUrl = 'https://api.themoviedb.org/3/movie';
const MainTvUrl = 'https://api.themoviedb.org/3/tv';
const MainPeopleUrl = "https://api.themoviedb.org/3/person";
const SearchUrl = "https://api.themoviedb.org/3/search/multi";
const discoverUrl = "https://api.themoviedb.org/3/discover";



// Movies
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
// Tv Detail 
exports.Get_TvDetail_url = `${MainTvUrl}`;
// Cast 
exports.Get_TvCast_url =  `${MainTvUrl}`;
// Review 
exports.Get_TvReview_url =  `${MainTvUrl}`;


//People 
exports.Get_People_url =  `${MainPeopleUrl}`;


//search
exports.Search_url =  `${SearchUrl}`;


//discover
exports.Discover_url =  `${discoverUrl}`;

//countries list
exports.Countries_url =  `https://api.themoviedb.org/3/configuration/countries?api_key=a501016df75ba02be8137f4996f56d90`;
