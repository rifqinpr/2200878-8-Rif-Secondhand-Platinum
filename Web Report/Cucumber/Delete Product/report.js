$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Delete Product.feature");
formatter.feature({
  "name": "Delete Product",
  "description": "  I want to delete product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DP"
    }
  ]
});
formatter.scenario({
  "name": "DP01 - Delete product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DP"
    }
  ]
});
formatter.step({
  "name": "I Login",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteProduct.i_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Product",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteProduct.i_click_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Product Detail",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteProduct.i_click_Product_Detail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Delete",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteProduct.i_click_button_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I success delete product",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteProduct.i_success_delete_product()"
});
formatter.result({
  "status": "passed"
});
});