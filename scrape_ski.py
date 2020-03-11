from splinter import Browser
from bs4 import BeautifulSoup


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=False)


def scrape():
    browser = init_browser()
    teams = {}

    url = "https://usskiandsnowboard.org/teams"
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    

