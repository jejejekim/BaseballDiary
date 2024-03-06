# selenium의 webdriver를 사용하기 위한 import
from selenium import webdriver

from selenium.webdriver.chrome.options import Options

# selenium으로 키를 조작하기 위한 import
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# 페이지 로딩을 기다리는데에 사용할 time 모듈 import
import time

#json
import json

# 브라우저 꺼짐 방지 옵션
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# 크롬드라이버 실행
driver = webdriver.Chrome(options=chrome_options)

#크롬 드라이버에 url 주소 넣고 실행
driver.get('https://www.koreabaseball.com/Schedule/GameCenter/Main.aspx')

# 페이지가 완전히 로딩되도록 3초동안 기다림
time.sleep(5)

#캘린더 버튼 클릭
driver.find_element(By.XPATH, '//*[@id="contents"]/div[2]/div/img').click()
#년도 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/div/div/select[2]/option[23]').click()
#달 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/div/div/select[1]/option[4]').click()
#날짜 선택
driver.find_element(By.XPATH, '//*[@id="ui-datepicker-div"]/table/tbody/tr[1]/td[7]/a').click()
time.sleep(3)

#팀 선택
driver.find_element(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[1]').click()
#리뷰 탭 선택
driver.find_element(By.XPATH, '//*[@id="tabDepth2"]/li[2]/a').click()
time.sleep(5)
# driver.find_element(By.XPATH, '//*[@id="tabDepth2"]/li[2]/a').click()

#구장
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[1]/ul/li[1]'):
    stadium = value.text
    # print(stadium)

#시작 시간
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[1]/ul/li[2]'):
    start_time = value.text

#토탈 점수
for value in driver.find_elements(By.XPATH, '//*[@id="tblScordboard3"]/tbody/tr[1]/td[1]'):
    away_total_score = value.text

for value in driver.find_elements(By.XPATH, '//*[@id="tblScordboard3"]/tbody/tr[2]/td[1]'):
    home_total_score = value.text

#이닝 점수
away_score = []
away_score_rows = driver.find_element(By.XPATH, '//*[@id="tblScordboard2"]/tbody/tr[1]')
away_score_body= away_score_rows.find_elements(By.TAG_NAME, "td")
for index, value in enumerate(away_score_body):
    away_score.append(value.text)    

home_score = []
home_score_rows = driver.find_element(By.XPATH, '//*[@id="tblScordboard2"]/tbody/tr[2]')
home_score_body= home_score_rows.find_elements(By.TAG_NAME, "td")
for index, value in enumerate(home_score_body):
    home_score.append(value.text)

#원정팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[1]/div[2]/div[2]/div[1]/div[1]/img'):
    away_team = value.get_attribute('alt')

#홈팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[1]/div[2]/div[2]/div[3]/div[1]/img'):
    home_team = value.get_attribute('alt')

#야수라인업
hitter = []
hitter_table = driver.find_element(By.ID, 'tblAwayHitter1')
hitter_tbody = hitter_table.find_element(By.TAG_NAME, "tbody")
hitter_rows = hitter_tbody.find_elements(By.TAG_NAME, "tr")
for index, value in enumerate(hitter_rows):
    hitter_num = value.find_elements(By.TAG_NAME, "th")[0].text
    position = value.find_elements(By.TAG_NAME, "th")[1].text[0]
    hitter_name = value.find_elements(By.TAG_NAME, "td")[0].text[0:3]
    hitter.append({"num": hitter_num, "position": position, "name": hitter_name})

#투수라인업
pitcher = []
pitcher_table = driver.find_element(By.XPATH, '//*[@id="tblAwayPitcher"]')
pitcher_tbody = pitcher_table.find_element(By.TAG_NAME, "tbody")
pitcher_rows = pitcher_tbody.find_elements(By.TAG_NAME, "tr")
for index, value in enumerate(pitcher_rows):
    pitcher_record = value.find_elements(By.TAG_NAME, "td")[2].text[0]
    pitcher_name = value.find_elements(By.TAG_NAME, "td")[0].text[0:3]
    pitcher.append({"record": pitcher_record, "name": pitcher_name})

#모든 정보를 저장하는 KBOData 객체
KBOData ={
          "startTime": start_time,
          "score": {"away": away_score, "home": home_score, "awayTotal": away_total_score, "homeTotal": home_total_score },
          "team": {"away": away_team, "home": home_team},
          "hitter": hitter,
          "pitcher": pitcher,
        }

#KBOData.json 파일 생성
with open("KBOData.json", "w", encoding="utf-8") as f:
    json.dump(KBOData, f, ensure_ascii=False, indent="\t")
