import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
response = requests.get(
    'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd=20210501',
    headers=headers
)

soup = BeautifulSoup(response.text, 'html.parser')

songs = soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for song in songs:
    a_tag = song.select_one('td.info > a')
    if a_tag:
        rank = song.select_one('td.number').text[0:2].strip()
        title = a_tag.text.strip()
        artist = song.select_one('a.artist.ellipsis').text.strip()
        print(rank, title, artist)

