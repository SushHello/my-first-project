import {test} from "@playwright/test";
import path from 'node:path'

import OrangeLogin from '../Pages/OrangeLogin.page.js'
import clickPIM from '../Pages/clickPIM.page.js'
import PIMAddEmpLink from '../Pages/PIMAddEmpLink.page.js'
import addEmpPg from '../Pages/addEmpPg.page.js'
import EmpDetailsPage from '../Pages/EmpDetailsPage.page.js'

import EmpDetails from '../TestData/EmpDetails.json'

test("Orange Hrm",async ({page}) => { 

    //! dialog
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message);
        await dialog.accept()
    })

    //! Data
    let OrangeURL = EmpDetails.url
    let OrangeLoginD = EmpDetails.usrname
    let OrangePW = EmpDetails.passwrd
    let OrangeFname = EmpDetails.EmpFullName
    let OrangeMname = EmpDetails.MiddleName
    let OrangeLname = EmpDetails.LastName
    let OrangeempID = EmpDetails.empID
    let OrangeOtherID = EmpDetails.otherID
    let OrangeDriverLicense = EmpDetails.DriverLicenseNo
    let OrangeLicenseExDate = EmpDetails.LicenseExpDate
    let OrangeMilitary = EmpDetails.MilitaryService
    let OrangeTextCustom = EmpDetails.TextCustomField
    let OrangeTextField = EmpDetails.TextField
    let OrangeCmnt = EmpDetails.Cmnt

    //!---Page
    let LoginDetailsPage = new OrangeLogin(page)
    let PIMClickPage = new clickPIM(page)
    let addrsLinkPage = new PIMAddEmpLink(page)
    let addEmpPage = new addEmpPg(page)
    let EmpDetailsPage = new EmpDetailsPage(page)

    await page.goto(OrangeURL)
    await LoginDetailsPage.LoginTF.fill(OrangeLoginD)
    await LoginDetailsPage.passwordTF.fill(OrangePW)
    await LoginDetailsPage.loginBTN.click()

    await PIMClickPage.clickBTN.click()

    await addrsLinkPage.addEmployee.click()

    await addEmpPage.addName.fill(EmpFullName)
    await addEmpPage.addMiddleName.fill(MiddleName)
    await addEmpPage.lastName.fill(LastName)
    await addEmpPage.EmpId.fill(empID)
    await addEmpPage.saveBTN.click()

    await EmpDetailsPage.OtherIdTF.fill(otherID)
    await EmpDetailsPage.DriverLicenseNoTF.fill(DriverLicenseNo)
    await EmpDetailsPage.LicenseExpDate.fill(LicenseExpDt)
    await EmpDetailsPage.NationalityDrpDwn.fill("Indian")
    await EmpDetailsPage.MaritalStatusdrpDwn.fill("Married")
    await EmpDetailsPage.DOBDrpDwn.fill(DOBDt)
    await EmpDetailsPage.GenderDrpDwn.fill("Female")
    await EmpDetailsPage.militaryTF.fill("No")
    await EmpDetailsPage.SmokeCheckBox.fill("No")
    await EmpDetailsPage.SaveBtn1.click()
    await EmpDetailsPage.BloodTypeDrpDwn.fill("A+")
    await EmpDetailsPage.TestFieldTF.fill(TextField)
    await EmpDetailsPage.TestCustomTF.fill(TextCustomField)
    await EmpDetailsPage.SaveBtn2.click()
    await EmpDetailsPage.attachmentsAdd.click()
    await EmpDetailsPage.uploadFile('my-first-project/DownloadFiles/sample.pdf')
  
})