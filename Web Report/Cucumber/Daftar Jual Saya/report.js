$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Daftar Jual Saya.feature");
formatter.feature({
  "name": "Daftar Jual Saya",
  "description": "  As a user i want to see Daftar Jual",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.scenario({
  "name": "DJS01 - See Daftar Jual Saya",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have product added",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_have_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Semua Produk",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_semua_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of products added will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_product_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DJS02 - See Daftar Jual Saya No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have no product",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_have_no_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Semua Produk",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_semua_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Daftar Jual Saya show Tambah Produk only",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_tambak_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DJS03 - See Diminati",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have product being bid",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_product_in_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Diminati",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of product being bid will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_product_in_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DJS04 - See Diminati No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have product added but not yet bidded",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_no_product_in_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Diminati",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "No product message will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_no_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DJS05 - See Terjual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have product already sold",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_product_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terjual",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of product that already sold will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_product_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DJS06 - See Terjual No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DJS"
    }
  ]
});
formatter.step({
  "name": "User already logged in and have product added but not yet sold",
  "keyword": "Given "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_no_product_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.in_daftarjualsaya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terjual",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.click_terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "No product message will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_no_product()"
});
formatter.result({
  "status": "passed"
});
});