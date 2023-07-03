$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Seller Denied Buyer Bid.feature");
formatter.feature({
  "name": "Denied Bid",
  "description": "  Seller wants to denied buyer bid",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Denied"
    }
  ]
});
formatter.scenario({
  "name": "Seller wants to denied buyer bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Denied"
    },
    {
      "name": "@DND01"
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
  "name": "Seller Denied already login",
  "keyword": "And "
});
formatter.match({
  "location": "Denied.seller_Denied_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller denied click notification",
  "keyword": "When "
});
formatter.match({
  "location": "Denied.seller_denied_click_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller denied click all notification",
  "keyword": "And "
});
formatter.match({
  "location": "Denied.seller_denied_click_all_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller denied click first notification",
  "keyword": "And "
});
formatter.match({
  "location": "Denied.seller_denied_click_first_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Tolak",
  "keyword": "And "
});
formatter.match({
  "location": "Denied.seller_click_Tolak()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify text Penawaran produk ditolak",
  "keyword": "Then "
});
formatter.match({
  "location": "Denied.verify_text_Penawaran_produk_ditolak()"
});
formatter.result({
  "status": "passed"
});
});