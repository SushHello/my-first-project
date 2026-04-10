class empList{
    constructor(page){
        this.OtherIdTF = page.getByRole('textbox',{name:'Other Id'})
        this.DriverLicenceNoTF = page.getByRole('textbox',{name:`Driver's License Number`})
        this.LicenceExpDate = page.getByPlaceholder('yyyy-dd-mm')
        this.NationalityDrpDwn = page.getByRole('option',{name:"Indian"})
        this.MaritalStatusdrpDwn = page.getByRole('option',{name:'Married'})
        this.DOBDrpDwn = page.getByLabel('Date of Birth')
        this.GenderDrpDwn = page.locator('//input[@type="radio" and @value = "2"]')
        this.militaryTF = page.getByLabel('Military Service')
        this.SmokeCheckBox = page.getByLabel('Yes')
        this.SaveBtn1 = page.locator('//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]//button[@type="submit"]')
        this.BloodTypeDrpDwn = page.getByRole('option',{name:'A+'})
        this.TestFieldTF = page.getByRole('textbox',{name:'Test_Field'})
        this.TestCustomTF = page.getByLabel('Test Custom Field')
        this.SaveBtn2 = page.locator("//div[@class='orangehrm-custom-fields']//button[@type='submit'][normalize-space()='Save']")
        this.attachmentsAdd = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--text"]')
        this.browseFile = page.locator("//input[@type='file']")
        this.CommentTF = page.getByPlaceholder('Type comment here')
        this.SaveBtn3 = page.locator('//div[@class="orangehrm-attachment"]//button[@type="submit"]')
    }
    async uploadFile(filePath){
        await this.browseFile.setInputFiles(filePath);

        await this.CommentTF.fill('Uploading File');
        await this.SaveBtn3.click()
    }
}

export default empList