#-*- encoding: utf-8 -*-

import media
import fresh_tomatoes

# 定义了一个嵌套列表，存储所有电影信息
movie_info_list = [
    [
        "Jumanji: Welcome to the Jungle (2017)",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", 
        "https://www.youtube.com/watch?v=leE10vdvkho"
    ],
    [
        "The Foreigner (2017)",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BM2RlMjcyMGQtZTU3OC00NGRlLWExMGEtYjU3ZjUyMDc0NWZmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "https://www.youtube.com/watch?v=33iuQu3UtjI"
    ],
    [
        "Justice League (2017)",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNjMwNjM1OV5BMl5BanBnXkFtZTgwNjA2Njk5MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "https://www.youtube.com/watch?v=DblEwHkde8U"
    ],
    [
         "The Emoji Movie (2017)",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMzM3OTM2Ml5BMl5BanBnXkFtZTgwMDM0NDU3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "https://www.youtube.com/watch?v=o_nfdzMhmrA"
    ]
]

def get_movies(movie_list):
    # 把电影信息转换为Movie对象列表
    # 输入为电影信息嵌套列表，输出为对应的Movie对象列表
    result = []
    for title, poster_image_url, trailer_youtube_url in movie_list:
        result.append(media.Movie(title, poster_image_url, trailer_youtube_url))
    return result

if __name__ == "__main__":
    movies = get_movies(movie_info_list)
    fresh_tomatoes.open_movies_page(movies)
