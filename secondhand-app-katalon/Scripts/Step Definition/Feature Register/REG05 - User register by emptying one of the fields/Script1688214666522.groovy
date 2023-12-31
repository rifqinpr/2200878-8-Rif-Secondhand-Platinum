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

WebUI.callTestCase(findTestCase('Pages/Navbar/Tap Akun'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Akun/Tap Masuk from Akun Page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Tap Daftar from login page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Nama with test data'), [('nama') : nama], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Email with test data'), [('email') : email], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Nomor Hp'), [('nomor_hp') : nomor_hp], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Scroll to Text Sudah Punya Akun'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Input Alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Tap Button Daftar'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Register/Verify Register with if else'), [('status') : status], FailureHandling.STOP_ON_FAILURE)
