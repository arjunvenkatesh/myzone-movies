import axios from 'axios';

export async function getPageData(pageNumber) {
	if(!pageNumber) {
		pageNumber = 1;
	}
	return await axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${pageNumber}&r=json&s=terminator`, { headers: { "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com", "X-RapidAPI-Key": "e13a00de79msh3bcbabd893d3febp1921a2jsn19d8243535d8" } })
		.then(function(response) {
			return response;
		})
		.catch(function(error) {
			return error;
		})
		.finally(function() {
		});
}