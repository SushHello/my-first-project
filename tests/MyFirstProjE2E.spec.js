import {test} from "@playwright/test";
import path from 'node:path'

import OrangeLogin from '../Pages/OrangeLogin.page.js'
import clickPIM from '../Pages/clickPIM.page.js'
import PIMAddEmpLink from '../Pages/PIMAddEmpLink.page.js'
import addEmpPg from '../Pages/addEmpPg.page.js'
import EmpList from '../Pages/EmpList.page.js'

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
    let EmpDetailsPage = new EmpList(page)

    await page.goto(OrangeURL)
    await LoginDetailsPage.LoginTF.fill(OrangeLoginD)
    await LoginDetailsPage.passwordTF.fill(OrangePW)
    await LoginDetailsPage.loginBTN.click()

    await PIMClickPage.clickBTN.click()

    await addrsLinkPage.addEmployee.click()

    await addEmpPage.addName.fill(EmpFullName)
    await addEmpPg.addMiddleName.fill(MiddleName)
    await addEmpPg.lastName.fill(LastName)
    await addEmpPg.EmpId.fill(empID)
    await addEmpPg.saveBTN.click()

    await EmpList.OtherIdTF.fill(otherID)
    await EmpList.DriverLicenseNoTF.fill(DriverLicenseNo)
    await EmpList.LicenseExpDate.fill(LicenseExpDt)
    await EmpList.NationalityDrpDwn.fill("Indian")
    await EmpList.MaritalStatusdrpDwn.fill("Married")
    await EmpList.DOBDrpDwn.fill(DOBDt)
    await EmpList.GenderDrpDwn.fill("Female")
    await EmpList.militaryTF.fill("No")
    await EmpList.SmokeCheckBox.fill("No")
    await EmpList.SaveBtn1.click()
    await EmpList.BloodTypeDrpDwn("A+")
    await EmpList.TestFieldTF.fill(TextField)
    await EmpList.TestCustomTF.fill(TextCustomField)
    await EmpList.SaveBtn2.click()
    await EmpList.attachmentsAdd.click()
    await EmpList.uploadFile('my-first-project/DownloadFiles/sample.pdf')
  
})