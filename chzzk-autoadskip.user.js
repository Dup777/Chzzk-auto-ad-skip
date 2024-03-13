// ==UserScript==
// @name        Chzzk auto ad skip (치지직 광고 자동 스킵)
// @namespace   
// @description Chzzk auto ad skip (치지직 광고 자동 스킵)
// @version     0.1
// @match       https://chzzk.naver.com/*
// @author      Dup777
// @license     MIT
// ==/UserScript==

let skip_button = document.querySelector("button[class='btn_skip']");

function clickSkipButton() {
  if (skip_button) {
    skip_button.click();
  }
}

const observer = new MutationObserver(() => {
  skip_button = document.querySelector("button[class='btn_skip']");
  clickSkipButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
