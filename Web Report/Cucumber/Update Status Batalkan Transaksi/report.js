$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Update Status Batalkan Transaksi.feature");
formatter.feature({
  "name": "Update Status Batalkan Transaksi",
  "description": "  Seller update status to Batalkan Transaksi",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UpdateStatus"
    }
  ]
});
formatter.scenario({
  "name": "Seller wants to update status to batalkan transaksi",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UpdateStatus"
    },
    {
      "name": "@UPD02"
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
  "name": "seller has already login and has product and approved",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.seller_has_already_login_and_has_product_and_approved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click notification",
  "keyword": "When "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click all notification",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_all_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click first notification",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_first_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click Status",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click radio button Batalkan Transaksi",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_radio_button_Batalkan_Transaksi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "BatalkanTransaksi.sellers_click_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify text Penjualan dibatalkan",
  "keyword": "Then "
});
formatter.match({
  "location": "BatalkanTransaksi.verify_text_Penjualan_dibatalkan()"
});
formatter.result({
  "status": "passed"
});
});