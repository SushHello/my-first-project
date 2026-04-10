class clickPIM{
    constructor(page){
        this.clickBTN = page.getByText('PIM',{exact: true})
    }
}