$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Feature Bid/Bid With Valid Price.feature");
formatter.feature({
  "name": "Buyer Bid Valid",
  "description": "  Buyer want to bid with Valid Price",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Buyer - Bid with Valid Price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BidValid"
    }
  ]
});
formatter.step({
  "name": "buyer sudah login",
  "keyword": "Given "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_sudah_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer berada di halaman produk",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_berada_di_halaman_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click search",
  "keyword": "When "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer input \"barang dijual\"",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_input(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click first product",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_click_first_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click Saya tertarik dan ingin nego button",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer memasukan harga tawaran \"2000\"",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_memasukan_harga_tawaran(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer click di tombol Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_click_di_tombol_Kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer menunggu respon penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "BidWithValidPrice.buyer_menunggu_respon_penjual()"
});
formatter.result({
  "status": "passed"
});
});