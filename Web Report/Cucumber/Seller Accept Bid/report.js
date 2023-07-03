$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Seller Accept Buyer Bid.feature");
formatter.feature({
  "name": "Seller Accept Bid",
  "description": "  Seller wants to accept buyer bid offer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Accept"
    }
  ]
});
formatter.scenario({
  "name": "Seller wants to accept buyer bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Accept"
    },
    {
      "name": "@ACC01"
    }
  ]
});
formatter.step({
  "name": "Precondition success",
  "keyword": "Given "
});
formatter.match({
  "location": "Accept.precondition_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "And "
});
formatter.match({
  "location": "Accept.seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click notification",
  "keyword": "When "
});
formatter.match({
  "location": "Accept.seller_click_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept click all notification",
  "keyword": "And "
});
formatter.match({
  "location": "Accept.seller_accept_click_all_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click first notification",
  "keyword": "And "
});
formatter.match({
  "location": "Accept.seller_click_first_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Terima",
  "keyword": "And "
});
formatter.match({
  "location": "Accept.seller_click_Terima()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "button hubungi buyer di whatsapp akan muncul",
  "keyword": "Then "
});
formatter.match({
  "location": "Accept.button_hubungi_buyer_di_whatsapp_akan_muncul()"
});
formatter.result({
  "status": "passed"
});
});