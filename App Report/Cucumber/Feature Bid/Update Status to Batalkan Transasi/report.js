$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Feature Bid/Update Status to Batalkan Transaksi.feature");
formatter.feature({
  "name": "Update Berhasil Terjual",
  "description": "  Seller wants to update sell status to Berhasil Terjual",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Seller wants to update sell status to Berhasil Terjual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UpdateStatusValid"
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
  "name": "seller click Back",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateBerhasilTerjual.seller_click_Back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Status",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateBerhasilTerjual.seller_click_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Batalkan Transaksi radio button",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateBatalkanTransaksi.seller_click_Batalkan_Transaksi_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click Simpan",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateBerhasilTerjual.seller_click_Simpan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller verify Batalkan Transaksi",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateBatalkanTransaksi.seller_verify_Batalkan_Transaksi()"
});
