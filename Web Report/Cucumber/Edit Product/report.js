$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Edit Product.feature");
formatter.feature({
  "name": "Edit Product",
  "description": "  I want to edit product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EDP"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - Edit Product with \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I login",
  "keyword": "Given "
});
formatter.step({
  "name": "I click Product saya",
  "keyword": "And "
});
formatter.step({
  "name": "I click Detail Product",
  "keyword": "And "
});
formatter.step({
  "name": "I click button Edit",
  "keyword": "When "
});
formatter.step({
  "name": "I edit nama product \u003cnama_product\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I edit harga product \u003charga_product\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I edit kategori \u003ckategori\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I edit deskripsi \u003cdeskripsi\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click button terbitkan",
  "keyword": "When "
});
formatter.step({
  "name": "I \u003cstatus\u003e edit product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case",
        "condition",
        "nama_product",
        "harga_product",
        "kategori",
        "deskripsi",
        "status"
      ]
    },
    {
      "cells": [
        "EDP01",
        "valid data",
        "correct",
        "correct",
        "correct",
        "correct",
        "success"
      ]
    },
    {
      "cells": [
        "EDP02",
        "empty field",
        "incorrect",
        "correct",
        "correct",
        "correct",
        "failed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "EDP01 - Edit Product with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EDP"
    }
  ]
});
formatter.step({
  "name": "I login",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.i_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Product saya",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_click_Product_saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Detail Product",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_click_Detail_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Edit",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.i_click_button_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button terbitkan",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.i_click_button_terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I success edit product",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.i_edit_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EDP02 - Edit Product with empty field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EDP"
    }
  ]
});
formatter.step({
  "name": "I login",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.i_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Product saya",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_click_Product_saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Detail Product",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_click_Detail_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Edit",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.i_click_button_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit nama product incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.i_edit_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button terbitkan",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.i_click_button_terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed edit product",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.i_edit_product(String)"
});
formatter.result({
  "status": "passed"
});
});