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

#원정팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[2]/div[2]/div[1]/div[1]/img'):
    away_team = value.get_attribute('alt')
    print(away_team)

#홈팀
for value in driver.find_elements(By.XPATH, '//*[@id="contents"]/div[3]/div/div[1]/ul/li[2]/div[2]/div[2]/div[3]/div[1]/img'):
    home_team = value.get_attribute('alt')
    print(home_team)
