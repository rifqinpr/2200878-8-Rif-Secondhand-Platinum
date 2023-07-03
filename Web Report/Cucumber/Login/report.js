$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Web User Login",
  "description": "  As a user, I want to login the Secondhand Store Website",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "global",
        "global",
        "success"
      ]
    },
    {
      "cells": [
        "satugroup@gmail.com",
        "abc!12345",
        "success"
      ]
    },
    {
      "cells": [
        "namakusilmi@gmail.com",
        "12345678",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email global",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password global",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step success",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email satugroup@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step success",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email namakusilmi@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step success",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login with invalid email: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "unregistered@gmail.com",
        "12345678",
        "invalid",
        "unregistered"
      ]
    },
    {
      "cells": [
        "inimisal.typo@gmail.com",
        "12345678",
        "invalid",
        "wrong email"
      ]
    },
    {
      "cells": [
        "empty",
        "12345678",
        "required email",
        "empty email"
      ]
    },
    {
      "cells": [
        "groupsatu@gm",
        "12345678",
        "required email",
        "non-tld"
      ]
    },
    {
      "cells": [
        "aa@ss",
        "12345678",
        "required email",
        "non-tld registered"
      ]
    },
    {
      "cells": [
        "namaku1357.com",
        "abc!12345",
        "required email",
        "without @"
      ]
    },
    {
      "cells": [
        "namaku1357gmail",
        "abc!12345",
        "required email",
        "without @ and non-tld"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login with invalid email: unregistered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email unregistered@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: wrong email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email inimisal.typo@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: empty email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email empty",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: non-tld",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email groupsatu@gm",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: non-tld registered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email aa@ss",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Login/Verify Required Email\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Login.i_should_see_the_nextstep(Login.groovy:91)\r\n\tat ✽.I should see the next step required email(Include/features/Login.feature:25)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify if object \u0027Object Repository/Login/input_Email\u0027 has attribute \u0027required\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementHasAttributeKeyword.verifyElementHasAttribute(VerifyElementHasAttributeKeyword.groovy:100)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementHasAttributeKeyword.execute(VerifyElementHasAttributeKeyword.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementHasAttribute(WebUiBuiltInKeywords.groovy:4252)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementHasAttribute$11.call(Unknown Source)\r\n\tat Verify Required Email.run(Verify Required Email:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.Login.i_should_see_the_nextstep(Login.groovy:91)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688377974591.run(TempTestCase1688377974591.groovy:25)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Object \u0027Object Repository/Login/input_Email\u0027 does not have attribute \u0027required\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementHasAttributeKeyword$_verifyElementHasAttribute_closure1.doCall(VerifyElementHasAttributeKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementHasAttributeKeyword$_verifyElementHasAttribute_closure1.call(VerifyElementHasAttributeKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: without @",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email namaku1357.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid email: without @ and non-tld",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email namaku1357gmail",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login with invalid password: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "abc!",
        "invalid",
        "wrong password"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "empty",
        "required pass",
        "empty password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login with invalid password: wrong password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password abc!",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with invalid password: empty password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password empty",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required pass",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "empty",
        "required email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already registered an account and go to Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_registered_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email empty",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password empty",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step required email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_nextstep(String)"
});
formatter.result({
  "status": "passed"
});
});