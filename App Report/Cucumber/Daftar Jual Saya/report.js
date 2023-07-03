$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/DaftarJualSaya.feature");
formatter.feature({
  "name": "Daftar Jual Saya",
  "description": "  As a User, I want to see Daftar Jual Saya Page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    }
  ]
});
formatter.scenario({
  "name": "See Daftar Jual Saya Product List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS01"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_have_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify product card exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_product_card_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "See Daftar Jual Saya Product List - No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS02"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have no product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_no_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify no product exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_no_product_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "See Diminati List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS03"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_have_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Diminati tab",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify product diminati exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_diminati_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "See Diminati List - No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS04"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have no product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_no_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Diminati tab",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify no product exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_no_product_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "See Terjual List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS05"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_have_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terjual tab",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify product card exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_product_card_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "See Terjual List - No Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DaftarJualSaya"
    },
    {
      "name": "@DJS06"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.user_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already logged in and have no product",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.user_login_no_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Daftar Jual Saya",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_djs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terjual tab",
  "keyword": "And "
});
formatter.match({
  "location": "DaftarJualSaya.tap_terjual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify no product exists",
  "keyword": "Then "
});
formatter.match({
  "location": "DaftarJualSaya.verify_no_product_exists()"
});
formatter.result({
  "status": "passed"
});
});