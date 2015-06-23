$(function(){


			var tmd_api_key = 'a3f94f4eef2cf4c60fdea3d5a76d1da4';
				genre_list_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+tmd_api_key;
		//GET the list of all genres
			$.getJSON(genre_list_url, function(response){
				//console.log(response);

				$.each(response.genres, function(i, genre){

					var genre_button = '<button class="genre" data-id=" '+genre.id+'">'+genre.name+'</button>';
					$('#genres').append(genre_button);

				}); // end of each function

				$('#genres button').click(function(){

				$('#movies').empty();
				$('#movie-detail').empty();

					var genre_id = $(this).data('id');
						movie_list_url = 'https://api.themoviedb.org/3/genre/'+genre_id+'/movies?api_key='+tmd_api_key;


					// GET all movies within particular genre

				$.getJSON(movie_list_url, function(response){
					//console.log(response);

					$.each(response.results, function(i, movie){
						var movie_button = '<button class="movie" data-id=" '+movie.id+'">'+movie.title+'</button>';
						$('#movies').append(movie_button);

					}); // end of movie_list_url

				$('#movies button').click(function(){
					$('#movie-detail').empty();

					var movie_id = $(this).data('id'),
						movie_detail_url = 'https://api.themoviedb.org/3/movie/'+movie_id+'?api_key='+tmd_api_key;
						movie_images_url = 'https://api.themoviedb.org/3/movie/'+movie_id+'/images?api_key='+tmd_api_key;

					$.getJSON(movie_images_url, function(){
							


					});


					$.getJSON(movie_detail_url, function(movie){
						//console.log(response);

						var movie_detail = '<div class="movie-detail">'+
											'<p><h3>'+movie.title+'</h3><br>"'+movie.tagline+'"<br>Runtime: '+movie.runtime+'</p>'+
											'</div>';

					$('#movie-detail').append(movie_detail);

					}); // end get movie detail

				});

			}); // end of movie_list

		}); // end of click

	}); // end of get genre_list

}); //end JS function