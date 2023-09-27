describe('텍스트 관리자 입니다.',()=>{

    const textManager = new TextManager();

    it('텍스트 값을 가져 옵니다',() => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })
    it('텍스트 값을 변경 합니다.',() => {
        const textValue = '정말 변경되나요?'
        textManager.setValue(textValue);
        expect(textManager.getValue()).toBe(textValue);
    })

})