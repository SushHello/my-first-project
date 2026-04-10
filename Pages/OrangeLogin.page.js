class LoginDetails{
    constructor(page) {
        this.LoginTF = page.locator('//input[@name="username"]')
        this.passwordTF = page.locator('//input[@type="password"]')
        this.loginBTN = page.locator('//button[@type="submit"]')
    }
}
export default LoginDetails