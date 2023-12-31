import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.callTestCase(findTestCase('Pages/Homepage/Verify on Homepage'), [:], FailureHandling.STOP_ON_FAILURE)

try {
	WebUI.callTestCase(findTestCase('Pages/Homepage/Verify Already Logged In'), [:], FailureHandling.STOP_ON_FAILURE)
	try {
		Mobile.callTestCase(findTestCase('Pages/Daftar Jual Saya/Verify Account No Product'), [:], FailureHandling.STOP_ON_FAILURE)
	} catch (Exception e) {
		Mobile.callTestCase(findTestCase('Step Definition/Feature Logout/LGT01 - Logout'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Navbar/Tap Akun'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Akun/Tap Masuk from Akun Page'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'qatest@mytestmail.net'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'a1b2c3d4'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Tap Button Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}
} catch (Exception e) {
	Mobile.callTestCase(findTestCase('Pages/Navbar/Tap Akun'), [:], FailureHandling.STOP_ON_FAILURE)
	Mobile.callTestCase(findTestCase('Pages/Akun/Tap Masuk from Akun Page'), [:], FailureHandling.STOP_ON_FAILURE)
	Mobile.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'qatest@mytestmail.net'], FailureHandling.STOP_ON_FAILURE)
	Mobile.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'a1b2c3d4'], FailureHandling.STOP_ON_FAILURE)
	Mobile.callTestCase(findTestCase('Pages/Login/Tap Button Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
}

WebUI.callTestCase(findTestCase('Pages/Navbar/Tap Akun'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Akun/Tap Daftar Jual Saya'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Daftar Jual Saya/Verify In Daftar Jual Saya Page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Daftar Jual Saya/Tap Tab Produk'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Daftar Jual Saya/Verify No Product'), [:], FailureHandling.STOP_ON_FAILURE)