# selenium의 webdriver를 사용하기 위한 import
from selenium import webdriver

from selenium.webdriver.chrome.options import Options

# selenium으로 키를 조작하기 위한 import
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# 페이지 로딩을 기다리는데에 사용할 time 모듈 import
import time

# 브라우저 꺼짐 방지 옵션
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# 크롬드라이버 실행
driver = webdriver.Chrome(options=chrome_options)

#크롬 드라이버에 url 주소 넣고 실행
driver.get('https://www.koreabaseball.com/Schedule/GameCenter/Main.aspx')

# 페이지가 완전히 로딩되도록 3초동안 기다림
time.sleep(3)

#캘린더 버튼 클릭
driver.find_element(By.XPATH, '//*[@id="contents"]/div[2]/div/img').click()
#년도 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/div/div/select[2]/option[22]').click()
#달 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/div/div/select[1]/option[5]').click()
#날짜 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]/a').click()
time.sleep(2)

#팀 선택
driver.find_element(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]').click()
#리뷰 탭 선택
driver.find_element(By.XPATH, '//*[@id="tabDepth2"]/li[2]/a').click()
time.sleep(2)

#구장
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[1]/ul/li[1]'):
    stadium = value.text
    print(stadium)

#시작 시간
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[1]/ul/li[2]'):
    start_time = value.text
    print(start_time)

#이닝점수
away_score =[]
home_score=[]

score_rows = driver.find_elements(By.XPATH, '//*[@id="tblScordboard2"]/tbody/tr')
away_score_body= score_rows[0].find_elements(By.TAG_NAME, "td")
for index, value in enumerate(away_score_body):
    away_score.append(value.text)

home_score_body= score_rows[1].find_elements(By.TAG_NAME, "td")
for index, value in enumerate(home_score_body):
    home_score.append(value.text)

print("awayScore: ", away_score, "homeScore: ", home_score)

#원정팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[2]/div[2]/div[1]/div[1]/img'):
    away_team = value.get_attribute('alt')
    print(away_team)

#홈팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[2]/div[2]/div[3]/div[1]/img'):
    home_team = value.get_attribute('alt')
    print(home_team)

#야수라인업
batter =[]
batter_table = driver.find_element(By.ID, 'tblHomeHitter1')
batter_tbody = batter_table.find_element(By.TAG_NAME, "tbody")
batter_rows = batter_tbody.find_elements(By.TAG_NAME, "tr")
for index, value in enumerate(batter_rows):
    batter_num = value.find_elements(By.TAG_NAME, "th")[0].text
    position = value.find_elements(By.TAG_NAME, "th")[1].text
    batter_name = value.find_elements(By.TAG_NAME, "td")[0].text
    batter.append({"num": batter_num, "position": position, "name": batter_name})

#투수라인업
pitcher = []
pitcher_table = driver.find_element(By.XPATH, '//*[@id="tblHomePitcher"]')
pitcher_tbody = pitcher_table.find_element(By.TAG_NAME, "tbody")
pitcher_rows = pitcher_tbody.find_elements(By.TAG_NAME, "tr")
for index, value in enumerate(pitcher_rows):
    pitcher_record = value.find_elements(By.TAG_NAME, "td")[2].text
    pitcher_name = value.find_elements(By.TAG_NAME, "td")[0].text
    pitcher.append({"record": pitcher_record, "name": pitcher_name})

print(batter)
print(pitcher)
