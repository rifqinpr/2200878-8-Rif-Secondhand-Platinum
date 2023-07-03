$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Product Category Filter.feature");
formatter.feature({
  "name": "Product Category Filter",
  "description": "  As a User, I want to see product based on category filter",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase\u003e - See \u003ccategory\u003e Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.step({
  "name": "User click \u003ccategory\u003e button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify List of products that match \u003ccategory\u003e will be shown",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "case"
      ]
    },
    {
      "cells": [
        "Semua",
        "CAT01"
      ]
    },
    {
      "cells": [
        "Hobi",
        "CAT02"
      ]
    },
    {
      "cells": [
        "Kendaraan",
        "CAT03"
      ]
    },
    {
      "cells": [
        "Baju",
        "CAT04"
      ]
    },
    {
      "cells": [
        "Elektronik",
        "CAT05"
      ]
    },
    {
      "cells": [
        "Kesehatan",
        "CAT06"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CAT01 - See Semua Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Semua button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Semua will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CAT02 - See Hobi Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Hobi button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Hobi will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CAT03 - See Kendaraan Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Kendaraan button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Kendaraan will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CAT04 - See Baju Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Baju button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Baju will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CAT05 - See Elektronik Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Elektronik button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Elektronik will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CAT06 - See Kesehatan Product Category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductCategoryFilter"
    },
    {
      "name": "@CAT"
    }
  ]
});
formatter.step({
  "name": "User is in homepage and see product category filter button",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategoryFilter.user_see_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Kesehatan button",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCategoryFilter.user_click_category_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify List of products that match Kesehatan will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategoryFilter.verify_products_category_shown(String)"
});
formatter.result({
  "status": "passed"
});
});