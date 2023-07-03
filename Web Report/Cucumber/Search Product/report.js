$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Search Product.feature");
formatter.feature({
  "name": "Search Product",
  "description": "  As a user i want to search product by input product name in search field",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "SRC01 - User want to search product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SRC01"
    }
  ]
});
formatter.step({
  "name": "User input \u003ctext\u003e of product name in search field",
  "keyword": "When "
});
formatter.step({
  "name": "User press Enter key",
  "keyword": "And "
});
formatter.step({
  "name": "List of products that match with \u003ctext\u003e inputted will be shown",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text"
      ]
    },
    {
      "cells": [
        "hrv"
      ]
    },
    {
      "cells": [
        "kemeja"
      ]
    },
    {
      "cells": [
        "zenbook"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is in Secondhand homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProduct.user_in_secondhand_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SRC01 - User want to search product",
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
  "name": "User input hrv of product name in search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.input_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press Enter key",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.press_Enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of products that match with hrv inputted will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.product_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is in Secondhand homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProduct.user_in_secondhand_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SRC01 - User want to search product",
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
  "name": "User input kemeja of product name in search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.input_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press Enter key",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.press_Enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of products that match with kemeja inputted will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.product_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is in Secondhand homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProduct.user_in_secondhand_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SRC01 - User want to search product",
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
  "name": "User input zenbook of product name in search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.input_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press Enter key",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.press_Enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of products that match with zenbook inputted will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.product_searched(String)"
});
formatter.result({
  "status": "passed"
});
});