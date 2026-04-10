class addEmpDetails {
    constructor(page){
        this.addName = page.getByPlaceholder('First Name')
        this.addMiddleName = page.locator("//input[@name='middleName']")
        this.lastName = page.locator("//input[@name='lastName']")
        this.EmpId = page.locator("//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[2]")
        this.saveBTN = page.locator("//button[@type='submit']")
    }
}