package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import cucumber.api.java.en.When
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.And
import internal.GlobalVariable

public class DeleteProduct {
	@When("User tap button trash")
	public void user_tap_button_trash() {
		WebUI.callTestCase(findTestCase('Pages/Delete Product/Tap button Trash'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("User tap Hapus")
	public void user_tap_Hapus() {
		WebUI.callTestCase(findTestCase('Pages/Delete Product/Tap Hapus in Prompt'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User will see success delete message")
	public void user_will_see_success_delete_message() {
		WebUI.callTestCase(findTestCase('Pages/Delete Product/Verify Success Message'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}