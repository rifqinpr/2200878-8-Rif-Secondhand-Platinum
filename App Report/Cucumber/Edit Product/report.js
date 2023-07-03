$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/EditProduct.feature");
formatter.feature({
  "name": "Edit Product",
  "description": "  As a User, I want to edit product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - Edit Product with \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.step({
  "name": "User edit Nama Produk with \u003cnamaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User edit Harga Produk with \u003chargaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User edit Kategori with \u003ckategoriProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User edit Lokasi with \u003clokasiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User edit Deskripsi with \u003cdeskripsiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.step({
  "name": "User will see \u003cstatus\u003e message",
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
        "namaProduk",
        "hargaProduk",
        "kategoriProduk",
        "lokasiProduk",
        "deskripsiProduk",
        "status"
      ]
    },
    {
      "cells": [
        "EPD01",
        "Input Valid Data",
        "Produk Kelompok",
        "100000",
        "Kesehatan",
        "Serang",
        "Deskripsi Produk 1",
        "success"
      ]
    },
    {
      "cells": [
        "EPD02",
        "Empty Nama Produk",
        "empty",
        "200000",
        "Elektronik",
        "Jakarta",
        "Deskripsi Produk 2",
        "error nama"
      ]
    },
    {
      "cells": [
        "EPD03",
        "Empty Harga Produk",
        "Produk Kelompok 1",
        "empty",
        "Voucher",
        "Subang",
        "Deskripsi Produk 3",
        "error harga"
      ]
    },
    {
      "cells": [
        "EPD04",
        "Empty Kategori Produk",
        "Produk Kelompok 1",
        "400000",
        "empty",
        "Subang",
        "Deskripsi Produk 3",
        "error kategori"
      ]
    },
    {
      "cells": [
        "EPD05",
        "Empty Lokasi Produk",
        "Produk Kelompok 1",
        "500000",
        "Fotografi",
        "empty",
        "Deskripsi Produk 4",
        "error lokasi"
      ]
    },
    {
      "cells": [
        "EPD06",
        "Empty Deskripsi Produk",
        "Produk Kelompok 1",
        "600000",
        "Kesehatan",
        "Bandung",
        "empty",
        "error deskripsi"
      ]
    }
  ]
});
formatter.scenario({
  "name": "EPD01 - Edit Product with Input Valid Data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with Produk Kelompok",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with 100000",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with Kesehatan",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with Serang",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with Deskripsi Produk 1",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EPD02 - Edit Product with Empty Nama Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with empty",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with 200000",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with Elektronik",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with Jakarta",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with Deskripsi Produk 2",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see error nama message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EPD03 - Edit Product with Empty Harga Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with Produk Kelompok 1",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with empty",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with Voucher",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with Subang",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with Deskripsi Produk 3",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see error harga message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EPD04 - Edit Product with Empty Kategori Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with Produk Kelompok 1",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with 400000",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with empty",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with Subang",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with Deskripsi Produk 3",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see error kategori message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EPD05 - Edit Product with Empty Lokasi Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with Produk Kelompok 1",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with 500000",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with Fotografi",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with empty",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with Deskripsi Produk 4",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see error lokasi message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EPD06 - Edit Product with Empty Deskripsi Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProduct"
    }
  ]
});
formatter.step({
  "name": "User login as seller",
  "keyword": "Given "
});
formatter.match({
  "location": "EditProduct.user_login_as_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab akun",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_akun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tab Daftar Jual",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_tab_daftar_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct.user_tap_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Nama Produk with Produk Kelompok 1",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Harga Produk with 600000",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Kategori with Kesehatan",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Lokasi with Bandung",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit Deskripsi with empty",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_input_product_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.click_publish_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see error deskripsi message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_will_see_message(String)"
});
formatter.result({
  "status": "passed"
});
});