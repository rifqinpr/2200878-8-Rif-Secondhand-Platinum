$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Update Status Berhasil Terjual.feature");
formatter.feature({
  "name": "Update Status Terjual",
  "description": "  Seller update status to berhasil terjual",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UpdateStatus"
    }
  ]
});
formatter.scenario({
  "name": "Seller wants to update status to berhasil terjual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UpdateStatus"
    },
    {
      "name": "@UPD01"
    }
  ]
});
formatter.step({
  "name": "Precondition update",
  "keyword": "Given "
});
formatter.match({
  "location": "BerhasilTerjual.precondition_update()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already login and has product and approved",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_already_login_and_has_product_and_approved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click all notification",
  "keyword": "When "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_all_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click all notifications",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_all_notifications()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click first notification and already bid and accepted",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_first_notification_and_already_bid_and_accepted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Status",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click radio button Berhasil terjual",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_radio_button_Berhasil_terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "BerhasilTerjual.seller_click_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify text Berhasil terjual",
  "keyword": "Then "
});
formatter.match({
  "location": "BerhasilTerjual.verify_text_Berhasil_terjual()"
});
formatter.result({
  "status": "passed"
});
});