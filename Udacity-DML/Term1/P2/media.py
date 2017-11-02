#-*- encoding: utf-8 -*-

import webbrowser

class Movie():
    """
    本类存储电影相关的信息，存储的信息包括：电影名、海报地址、预告片Youtube地址
    """

    def __init__(self, title, poster_image_url, trailer_youtube_url):
        self.title = title
        self.poster_image_url = poster_image_url
        self.trailer_youtube_url = trailer_youtube_url
                