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
    //let OrangeLicenseExDate = EmpDetails.LicenseExpDate
    //let OrangeDOB = EmpDetails.DOBDt
    //let OrangeMilitary = EmpDetails.MilitaryService
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

    await addEmpPage.addName.fill(OrangeFname)
    await addEmpPage.addMiddleName.fill(OrangeMname)
    await addEmpPage.lastName.fill(OrangeLname)
    await addEmpPage.EmpId.fill(OrangeempID)
    await addEmpPage.saveBTN.click()
    await EmpDetailsPage.waitForLoader();


await EmpDetailsPage.OtherIdTF.fill(OrangeOtherID);
await EmpDetailsPage.DriverLicenceNoTF.fill("12365");
await EmpDetailsPage.LicenceExpDate.fill("2029-04-07");

await EmpDetailsPage.selectNationality("Indian");
await EmpDetailsPage.selectMaritalStatus("Married");

await EmpDetailsPage.DOBDrpDwn.fill("1988-07-04");

// await EmpDetailsPage.GenderDrpDwn.check();
await EmpDetailsPage.selectGender("Female");


// await EmpDetailsPage.militaryTF.fill("No");
// await EmpDetailsPage.SmokeCheckBox.check();

await EmpDetailsPage.SaveBtn1.click();
await EmpDetailsPage.waitForLoader();


await EmpDetailsPage.selectBloodType("A+");
await EmpDetailsPage.TestFieldTF.fill(OrangeTextField);
//await EmpDetailsPage.TestCustomTF.fill(OrangeTextCustom);
await EmpDetailsPage.SaveBtn2.click();
await EmpDetailsPage.waitForLoader();

})