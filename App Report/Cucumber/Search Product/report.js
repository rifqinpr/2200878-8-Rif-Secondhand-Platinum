$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/SearchProduct.feature");
formatter.feature({
  "name": "Search Product",
  "description": "  As a User, I want to search product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "SRC01 - Search Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SRC01"
    }
  ]
});
formatter.step({
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User tap search field",
  "keyword": "When "
});
formatter.step({
  "name": "User input \u003csearchText\u003e in search field",
  "keyword": "And "
});
formatter.step({
  "name": "Verify search \u003csearchText\u003e result appeared",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchText"
      ]
    },
    {
      "cells": [
        "key"
      ]
    },
    {
      "cells": [
        "tesla"
      ]
    },
    {
      "cells": [
        "meja"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SRC01 - Search Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProduct"
    },
    {
      "name": "@SRC01"
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
  "name": "User tap search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.tap_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input key in search field",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.input_text_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify search key result appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.search_result_appeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SRC01 - Search Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProduct"
    },
    {
      "name": "@SRC01"
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
  "name": "User tap search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.tap_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input tesla in search field",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.input_text_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify search tesla result appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.search_result_appeared(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SRC01 - Search Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProduct"
    },
    {
      "name": "@SRC01"
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
  "name": "User tap search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.tap_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input meja in search field",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.input_text_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify search meja result appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.search_result_appeared(String)"
});
formatter.result({
  "status": "passed"
});
});