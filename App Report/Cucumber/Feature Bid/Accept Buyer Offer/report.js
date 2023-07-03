$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Feature Bid/Accept Buyer Offer.feature");
formatter.feature({
  "name": "Accept Offer",
  "description": "  Seller wants to accept buyer offer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Seller wants to accept buyer offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AcceptOffer"
    }
  ]
});
formatter.step({
  "name": "seller sudah melakukan login",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_sudah_melakukan_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Daftar Jual Saya",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_click_Daftar_Jual_Saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Diminati",
  "keyword": "And "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_click_Diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click first Diminati",
  "keyword": "And "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_click_first_Diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Terima",
  "keyword": "And "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_Terima()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller verify Hubungi via Whatsapp button",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptBuyerOffer.seller_verify_Hubungi_via_Whatsapp_button()"
});
formatter.result({
  "status": "passed"
});
});