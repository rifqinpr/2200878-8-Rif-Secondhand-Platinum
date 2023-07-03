$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Feature Bid/Bid With Invalid Price.feature");
formatter.feature({
  "name": "Buyer Bid Invalid",
  "description": "  Buyer want to bid with Invalid Price",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Buyer - Bid with Invalid Price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BidInvalid"
    }
  ]
});
formatter.step({
  "name": "buyer1 sudah login",
  "keyword": "Given "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_sudah_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 berada di halaman produk",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_berada_di_halaman_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 click search",
  "keyword": "When "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 input \"barang dijual\"",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_input(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 click first product",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_click_first_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 click Saya tertarik dan ingin nego button",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 memasukan harga tawaran \"999999999\"",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_memasukan_harga_tawaran(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 click di tombol Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_click_di_tombol_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer1 menunggu respon penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "BidWithInvalidPrice.buyer1_menunggu_respon_penjual()"
});
formatter.result({
  "status": "passed"
});
});