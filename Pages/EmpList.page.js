class empList {
    constructor(page){
        this.page = page;

        this.OtherIdTF = page.locator("//label[text()='Other Id']/following :: input[@class='oxd-input oxd-input--active'][1]");
        this.DriverLicenceNoTF = page.locator(`//label[text()="Driver's License Number"]/following::input[1]`);
        this.LicenceExpDate = page.locator('//label[text()="License Expiry Date"]/following::input[@class="oxd-input oxd-input--active"][1]');

        // FIXED — correct dropdown locator
        this.nationalityDropdown = page.locator("//label[text()='Nationality']/following::div[contains(@class,'oxd-select-text-input')][1]");
        this.nationalityOption = (value) => page.getByRole('option', { name: value });

        this.MaritalStatusdrpDwn = page.locator("//label[text()='Marital Status']/following::div[contains(@class,'oxd-select-text-input')][1]");
        this.MaritalStatusOption = (value) => page.getByRole('option', { name: value });

        this.DOBDrpDwn = page.locator("//label[text()='Date of Birth']/following::input[1]");

        this.genderFemale = page.locator('//label[text()="Female"]/ancestor::div[contains(@class,"oxd-radio-wrapper")]')
        this.genderMale = page.getByLabel('//label[text()="Male"]/ancestor::div[contains(@class,"oxd-radio-wrapper")]');

        //this.militaryTF = page.getByLabel('Military Service');
        //this.SmokeCheckBox = page.getByLabel('Yes');
        this.SaveBtn1 = page.locator('//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]//button[@type="submit"]');

        this.BloodTypeDrpDwn = page.locator("//label[text()='Blood Type']/following::div[contains(@class,'oxd-select-text-input')][1]");
        this.BloodTypeOption = (value) => page.getByRole('option', { name: value });

        this.TestFieldTF = page.locator('//label[text()="Test_Field"]/following::input[@class="oxd-input oxd-input--active"]')
        //this.TestCustomTF = page.getByLabel('Test Custom Field');
        this.SaveBtn2 = page.locator("//div[@class='orangehrm-custom-fields']//button[@type='submit'][normalize-space()='Save']");
        this.attachmentsAdd = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--text"]');
        this.browseFile = page.locator("//input[@type='file']");
        this.CommentTF = page.getByPlaceholder('Type comment here');
        this.SaveBtn3 = page.locator('//div[@class="orangehrm-attachment"]//button[@type="submit"]');
    }

    async selectNationality(value){
        await this.nationalityDropdown.click();
        await this.nationalityOption(value).click();
    }

    async selectMaritalStatus(value){
        await this.MaritalStatusdrpDwn.click();
        await this.MaritalStatusOption(value).click();
    }

    async selectGender(value){
        await this.page.locator(`//label[text()='${value}']/ancestor::div[contains(@class,'oxd-radio-wrapper')]`).click()
    }


    async selectBloodType(value){
        await this.BloodTypeDrpDwn.click();
        await this.BloodTypeOption(value).click();
    }

    async uploadFile(filePath){
        await this.browseFile.setInputFiles(filePath);
        await this.CommentTF.fill('Uploading File');
        await this.SaveBtn3.click();
    }

    async waitForLoader() {
    await this.page.waitForSelector('.oxd-form-loader', { state: 'detached' });
}

}

export default empList;
