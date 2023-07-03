$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/AddProduct.feature");
formatter.feature({
  "name": "Add Product",
  "description": "  As a User, I want to add product to sell in Secondhand App",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - Add Product With Input Valid Data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User already logged in",
  "keyword": "And "
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.step({
  "name": "User fill Nama Produk with \u003cnamaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Harga Produk with \u003chargaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Kategori with \u003ckategoriProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Lokasi with \u003clokasiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Deskripsi with \u003cdeskripsiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Foto Produk with \u003cfotoProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "namaProduk",
        "hargaProduk",
        "kategoriProduk",
        "lokasiProduk",
        "deskripsiProduk",
        "fotoProduk",
        "case"
      ]
    },
    {
      "cells": [
        "Produk A",
        "50000",
        "Kesehatan",
        "Kota",
        "Masih Bagus Banget",
        "image",
        "ADDP01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "ADDP01 - Add Product With Input Valid Data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Positive"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Produk A",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 50000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Kesehatan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Kota",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Masih Bagus Banget",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - Add Product without input \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User already logged in",
  "keyword": "And "
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.step({
  "name": "User fill Nama Produk with \u003cnamaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Harga Produk with \u003chargaProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Kategori with \u003ckategoriProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Lokasi with \u003clokasiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Deskripsi with \u003cdeskripsiProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill Foto Produk with \u003cfotoProduk\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Error \u003cerror\u003e message appeared",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "namaProduk",
        "hargaProduk",
        "kategoriProduk",
        "lokasiProduk",
        "deskripsiProduk",
        "fotoProduk",
        "error",
        "case",
        "condition"
      ]
    },
    {
      "cells": [
        "empty",
        "50000",
        "Otomotif",
        "Kota",
        "Masih bagus",
        "image",
        "namaEmpty",
        "ADDP02",
        "Nama Produk"
      ]
    },
    {
      "cells": [
        "Hotwheels",
        "empty",
        "Hobi dan Koleksi",
        "Semarang",
        "Masih segel",
        "image",
        "hargaEmpty",
        "ADDP03",
        "Harga Produk"
      ]
    },
    {
      "cells": [
        "Gelas Estetik",
        "75000",
        "empty",
        "Balikpapan",
        "Unik dan Estetik",
        "image",
        "kategoriEmpty",
        "ADDP04",
        "Kategori Produk"
      ]
    },
    {
      "cells": [
        "Speaker",
        "250000",
        "Elektronik",
        "empty",
        "Lecet pemakaian",
        "image",
        "lokasiEmpty",
        "ADDP05",
        "Lokasi Produk"
      ]
    },
    {
      "cells": [
        "Lemari Unik",
        "169000",
        "Perlengkapan Rumah",
        "Jaksel",
        "empty",
        "image",
        "deskripsiEmpty",
        "ADDP06",
        "Deskripsi Produk"
      ]
    },
    {
      "cells": [
        "Canon",
        "7500000",
        "Fotografi",
        "Surabaya",
        "Masih mulus",
        "empty",
        "fotoEmpty",
        "ADDP07",
        "Foto Produk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "ADDP02 - Add Product without input Nama Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 50000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Otomotif",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Kota",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Masih bagus",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error namaEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP03 - Add Product without input Harga Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Hotwheels",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Hobi dan Koleksi",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Semarang",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Masih segel",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error hargaEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP04 - Add Product without input Kategori Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Gelas Estetik",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 75000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Balikpapan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Unik dan Estetik",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error kategoriEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP05 - Add Product without input Lokasi Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Speaker",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 250000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Elektronik",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Lecet pemakaian",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error lokasiEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP06 - Add Product without input Deskripsi Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Lemari Unik",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 169000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Perlengkapan Rumah",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Jaksel",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with image",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error deskripsiEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP07 - Add Product without input Foto Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User already logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_already_loggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Nama Produk with Canon",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_nama_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Harga Produk with 7500000",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_harga_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Kategori with Fotografi",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_kategori_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Lokasi with Surabaya",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_lokasi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Deskripsi with Masih mulus",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_deskripsi_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill Foto Produk with empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.fill_foto_produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.tap_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error fotoEmpty message appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP08 - Add Product While Not Logged In",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@Negative"
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
  "name": "User not logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.user_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap FAB Jual",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.tap_fab_jual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify User prompted to login",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.verify_user_prompted_login()"
});
formatter.result({
  "status": "passed"
});
});