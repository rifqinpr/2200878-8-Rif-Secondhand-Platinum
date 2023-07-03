$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PesananSaya.feature");
formatter.feature({
  "name": "Pesanan Saya",
  "description": "  As a User, I want to see Pesanan Saya Page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PesananSaya"
    }
  ]
});
formatter.scenario({
  "name": "PSN01 - See Pesanan Saya",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PesananSaya"
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
  "name": "User already logged in and have order",
  "keyword": "And "
});
formatter.match({
  "location": "PesananSaya.user_login_have_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Pesanan Saya",
  "keyword": "And "
});
formatter.match({
  "location": "PesananSaya.tap_pesanan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify card list exists",
  "keyword": "Then "
});
formatter.match({
  "location": "PesananSaya.verify_card_list_exists()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Pesanan Saya/Verify Pesanan Card\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.PesananSaya.verify_card_list_exists(PesananSaya.groovy:81)\r\n\tat ✽.Verify card list exists(Include/features/PesananSaya.feature:11)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to wait for object \u0027Object Repository/Pesanan Saya/androidx.cardview.widget.CardView - Pesanan and Transaksi Card\u0027 to have attribute \u0027clickable\u0027 with value \u0027true\u0027 (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.clazz: androidx.cardview.widget.CardView\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ASUS-RN911\u0027, ip: \u0027192.168.1.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: E:\\GitRepo\\Katalon\\binarqa-..., appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitforLaunch: false, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 56253, databaseEnabled: false, desired: {app: E:\\GitRepo\\Katalon\\binarqa-..., appWaitActivity: *, appWaitforLaunch: false, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 56253, deviceId: , deviceName: realme RMX1921 (Android 11), fullReset: false, ignoreHiddenApiPolicyError: true, newCommandTimeout: 1800, noReset: true, platform: ANDROID, platformName: android, platformVersion: 11, systemPort: 56770, udid: fd03a52e}, deviceApiLevel: 30, deviceId: , deviceManufacturer: realme, deviceModel: RMX1921, deviceName: fd03a52e, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: fd03a52e, fullReset: false, ignoreHiddenApiPolicyError: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: true, pixelRatio: 3, platform: ANDROID, platformName: Android, platformVersion: 11, statBarHeight: 96, systemPort: 56770, takesScreenshot: true, udid: fd03a52e, viewportRect: {height: 2168, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 2215afc9-6570-4da3-af20-9de372d8224c\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:134)\r\n\tat com.kms.katalon.core.mobile.helper.MobileCommonHelper.getAttributeValue(MobileCommonHelper.java:155)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$1.apply(WaitForElementAttributeValueKeyword.groovy:89)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$1.apply(WaitForElementAttributeValueKeyword.groovy)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$_waitForElementAttributeValue_closure1.doCall(WaitForElementAttributeValueKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$_waitForElementAttributeValue_closure1.call(WaitForElementAttributeValueKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword.waitForElementAttributeValue(WaitForElementAttributeValueKeyword.groovy:100)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword.execute(WaitForElementAttributeValueKeyword.groovy:66)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementAttributeValue(MobileBuiltInKeywords.groovy:2316)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementAttributeValue$5.call(Unknown Source)\r\n\tat Verify Pesanan Card.run(Verify Pesanan Card:23)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.PesananSaya.verify_card_list_exists(PesananSaya.groovy:81)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:36)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688402984810.run(TempTestCase1688402984810.groovy:25)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword.waitForElementAttributeValue(WaitForElementAttributeValueKeyword.groovy:100)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword.execute(WaitForElementAttributeValueKeyword.groovy:66)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementAttributeValue(MobileBuiltInKeywords.groovy:2316)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementAttributeValue$5.call(Unknown Source)\r\n\tat Verify Pesanan Card.run(Verify Pesanan Card:23)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.PesananSaya.verify_card_list_exists(PesananSaya.groovy:81)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:36)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688402984810.run(TempTestCase1688402984810.groovy:25)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.clazz: androidx.cardview.widget.CardView\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ASUS-RN911\u0027, ip: \u0027192.168.1.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: E:\\GitRepo\\Katalon\\binarqa-..., appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitforLaunch: false, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 56253, databaseEnabled: false, desired: {app: E:\\GitRepo\\Katalon\\binarqa-..., appWaitActivity: *, appWaitforLaunch: false, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 56253, deviceId: , deviceName: realme RMX1921 (Android 11), fullReset: false, ignoreHiddenApiPolicyError: true, newCommandTimeout: 1800, noReset: true, platform: ANDROID, platformName: android, platformVersion: 11, systemPort: 56770, udid: fd03a52e}, deviceApiLevel: 30, deviceId: , deviceManufacturer: realme, deviceModel: RMX1921, deviceName: fd03a52e, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: fd03a52e, fullReset: false, ignoreHiddenApiPolicyError: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: true, pixelRatio: 3, platform: ANDROID, platformName: Android, platformVersion: 11, statBarHeight: 96, systemPort: 56770, takesScreenshot: true, udid: fd03a52e, viewportRect: {height: 2168, left: 0, top: 96, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 2215afc9-6570-4da3-af20-9de372d8224c\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:134)\r\n\tat com.kms.katalon.core.mobile.helper.MobileCommonHelper.getAttributeValue(MobileCommonHelper.java:155)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$1.apply(WaitForElementAttributeValueKeyword.groovy:89)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$1.apply(WaitForElementAttributeValueKeyword.groovy)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$_waitForElementAttributeValue_closure1.doCall(WaitForElementAttributeValueKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementAttributeValueKeyword$_waitForElementAttributeValue_closure1.call(WaitForElementAttributeValueKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "PSN02 - See Pesanan Saya While No Bid Made",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PesananSaya"
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
  "name": "User already logged in and have no order",
  "keyword": "And "
});
formatter.match({
  "location": "PesananSaya.user_login_no_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Akun navbar",
  "keyword": "When "
});
formatter.match({
  "location": "DaftarJualSaya.tap_akun_navbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Pesanan Saya",
  "keyword": "And "
});
formatter.match({
  "location": "PesananSaya.tap_pesanan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify no Pesanan exists",
  "keyword": "Then "
});
formatter.match({
  "location": "PesananSaya.verify_no_pesanan_exists()"
});
formatter.result({
  "status": "passed"
});
});