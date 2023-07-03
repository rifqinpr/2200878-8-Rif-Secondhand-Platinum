$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Register.feature");
formatter.feature({
  "name": "Web User Register",
  "description": "  As a user, I want to register in Secondhand Store Website",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify to register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I register with input Nama \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I register with input Email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I register with input Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the result for register \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "random",
        "random",
        "abc!12345",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama random",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email random",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register success",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register with invalid email: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I register with input Nama \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I register with input Email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I register with input Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the result for register \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "registered",
        "groupsatu@gmail.com",
        "abc!12345",
        "invalid email",
        "already registered"
      ]
    },
    {
      "cells": [
        "without @",
        "groupsatugm.com",
        "abc!12345",
        "required email",
        "without @"
      ]
    },
    {
      "cells": [
        "without @",
        "groupsatugmail",
        "abc!12345",
        "required email",
        "without @ and non-tld"
      ]
    },
    {
      "cells": [
        "kosong aja",
        "empty",
        "abc!12345",
        "required email",
        "empty email"
      ]
    },
    {
      "cells": [
        "incomplete",
        "@gmail.com",
        "abc!12345",
        "required email",
        "incomplete email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register with invalid email: already registered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama registered",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email groupsatu@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register invalid email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register with invalid email: without @",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama without @",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email groupsatugm.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register with invalid email: without @ and non-tld",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama without @",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email groupsatugmail",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register with invalid email: empty email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama kosong aja",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register with invalid email: incomplete email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama incomplete",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email @gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register with non-TLD email format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I register with input Nama \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I register with input Email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I register with input Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the result for register \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "non-tld",
        "non-tld",
        "abc!12345",
        "required email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register with non-TLD email format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama non-tld",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email non-tld",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Register/Verify with if-else\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Register.see_the_result_register(Register.groovy:104)\r\n\tat ✽.I should see the result for register required email(Include/features/Register.feature:43)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Register/h2_Daftar\u0027 is visible\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:97)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementVisible(WebUiBuiltInKeywords.groovy:362)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementVisible$7.call(Unknown Source)\r\n\tat Verify with if-else.run(Verify with if-else:23)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Register.see_the_result_register(Register.groovy:104)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:21)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Web element with id: \u0027Object Repository/Register/h2_Daftar\u0027 located by \u0027//h2[@class \u003d \u0027fw-bold mb-5\u0027 and (text() \u003d \u0027Daftar\u0027 or . \u003d \u0027Daftar\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify to register without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I register with input Nama \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I register with input Email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I register with input Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the result for register \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "empty",
        "empty",
        "required nama"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama empty",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required nama",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register with invalid password: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I register with input Nama \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I register with input Email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I register with input Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the result for register \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "less than eight",
        "random",
        "aq12",
        "invalid password",
        "\u003c8 char"
      ]
    },
    {
      "cells": [
        "kosoong",
        "random",
        "empty",
        "required password",
        "empty password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register with invalid password: \u003c8 char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama less than eight",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email random",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password aq12",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register invalid password",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Register/Verify with if-else\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Register.see_the_result_register(Register.groovy:104)\r\n\tat ✽.I should see the result for register invalid password(Include/features/Register.feature:69)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Register/Read Error Msg - Password less than 8\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat Verify with if-else.run(Verify with if-else:35)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Register.see_the_result_register(Register.groovy:104)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:21)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Register/input_Password\u0027 is visible\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:97)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementVisible(WebUiBuiltInKeywords.groovy:376)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementVisible$4.call(Unknown Source)\r\n\tat Read Error Msg - Password less than 8.run(Read Error Msg - Password less than 8:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\t... 87 more\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Web element with id: \u0027Object Repository/Register/input_Password\u0027 located by \u0027//input[@id\u003d\u0027user_password\u0027]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 102 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify to register with invalid password: empty password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already access the website and user on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_access_the_website_and_user_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Nama kosoong",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_register_with_input_Nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Email random",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register with input Password empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_register_with_input_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_Daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the result for register required password",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.see_the_result_register(String)"
});
formatter.result({
  "status": "passed"
});
});