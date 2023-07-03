$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Add Product.feature");
formatter.feature({
  "name": "Add Product Feature",
  "description": "  As a Seller, I want to add product to sell in Secondhand",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - Add Product with \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I login as \u003cuser\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.step({
  "name": "I fill nama product \u003cnama_product\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I fill harga product \u003charga_product\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I fill kategori \u003ckategori\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I fill deskripsi \u003cdeskripsi\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I upload image product \u003cimg\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.step({
  "name": "I \u003cstatus\u003e add product",
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
        "img",
        "status",
        "user"
      ]
    },
    {
      "cells": [
        "ADDP01",
        "valid data",
        "correct",
        "correct",
        "correct",
        "correct",
        "correct",
        "success",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP02",
        "multiple image",
        "correct",
        "correct",
        "correct",
        "correct",
        "multiple",
        "success",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP03",
        "empty field Nama Produk",
        "incorrect",
        "correct",
        "correct",
        "correct",
        "correct",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP04",
        "empty field Harga Produk",
        "correct",
        "incorrect",
        "correct",
        "correct",
        "correct",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP05",
        "empty field Kategori",
        "correct",
        "correct",
        "incorrect",
        "correct",
        "correct",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP06",
        "empty field Deskripsi",
        "correct",
        "correct",
        "correct",
        "incorrect",
        "correct",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP07",
        "no upload image",
        "correct",
        "correct",
        "correct",
        "correct",
        "empty",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP08",
        "harga negative",
        "correct",
        "negative",
        "correct",
        "correct",
        "correct",
        "failed",
        "user1"
      ]
    },
    {
      "cells": [
        "ADDP09",
        "upload invalid image filetype",
        "correct",
        "correct",
        "correct",
        "correct",
        "incorrect",
        "failed",
        "user2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "ADDP01 - Add Product with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I success add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP02 - Add Product with multiple image",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product multiple",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I success add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP03 - Add Product with empty field Nama Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP04 - Add Product with empty field Harga Produk",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP05 - Add Product with empty field Kategori",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP06 - Add Product with empty field Deskripsi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADDP07 - Add Product with no upload image",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product empty",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat ✽.I failed add product(Include/features/Add Product.feature:14)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 located by \u0027//label[@class \u003d \u0027btn btn-primary w-50 rounded-4 p-3\u0027 and @for \u003d \u0027product_status_published\u0027 and (text() \u003d \u0027Terbitkan\u0027 or . \u003d \u0027Terbitkan\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:24)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "ADDP08 - Add Product with harga negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product negative",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat ✽.I failed add product(Include/features/Add Product.feature:14)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 located by \u0027//label[@class \u003d \u0027btn btn-primary w-50 rounded-4 p-3\u0027 and @for \u003d \u0027product_status_published\u0027 and (text() \u003d \u0027Terbitkan\u0027 or . \u003d \u0027Terbitkan\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:24)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "ADDP09 - Add Product with upload invalid image filetype",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDP"
    }
  ]
});
formatter.step({
  "name": "I login as user2",
  "keyword": "Given "
});
formatter.match({
  "location": "AddProduct.login_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click jual button",
  "keyword": "When "
});
formatter.match({
  "location": "AddProduct.i_click_jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill nama product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_fill_nama_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill harga product correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_harga_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill kategori correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill deskripsi correct",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload image product incorrect",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.I_fill_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "AddProduct.i_click_button_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I failed add product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProduct.i_add_product(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat ✽.I failed add product(Include/features/Add Product.feature:14)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Products/Add Product Page/label_Button Terbitkan\u0027 located by \u0027//label[@class \u003d \u0027btn btn-primary w-50 rounded-4 p-3\u0027 and @for \u003d \u0027product_status_published\u0027 and (text() \u003d \u0027Terbitkan\u0027 or . \u003d \u0027Terbitkan\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$13.call(Unknown Source)\r\n\tat stepDefinition.AddProduct.i_add_product(AddProduct.groovy:149)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:24)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\n",
  "status": "failed"
});
});