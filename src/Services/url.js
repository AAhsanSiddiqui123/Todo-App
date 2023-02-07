const MainUrl = 'https://api.themoviedb.org/3/movie';
// https://api.themoviedb.org/3/movie/popular?api_key=a501016df75ba02be8137f4996f56d90&language=en-US&page=1
// https://api.themoviedb.org/3/trending/all/day

//Movies
exports.Get_AllPopular_url = `${MainUrl}`;
exports.Get_NowPlayingMovie_url = `${MainUrl}`;
exports.Get_UpCommingMovie_url = `${MainUrl}`;
exports.Get_TopRatedMovie_url = `${MainUrl}`;
