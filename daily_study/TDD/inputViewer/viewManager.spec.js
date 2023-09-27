describe('화면에 값을 표시합니다',() => {
    it('viewManager에 TextManager의 인스턴스가 잘 전달 됐는지 확인 합니다',() => {
        const btnEl = document.createElement('button');
        const inpTxt = document.createElement('input');
        const viewerEl = document.createElement('strong');
        const textManager = null;
        //유닛 테스트에서의 actual은 테스트 중인 함수 혹은 코드의 반환값을 의미하는 용어
        const actual = () => new ViewManager(textManager, {viewerEl, inpTxt, btnEl});

        //toThrowError: 코드에서 실제로 에러가 발생하고 있는지 검증
        expect(actual).toThrowError
    });
    it('viewManager에 option들이 제대로 전달 되었는지 확인 합니다',() => {
        const btnEl = null
        const inpTxt = null
        const viewerEl = null
        const textManager = new TextManager();
        //유닛 테스트에서의 actual은 테스트 중인 함수 혹은 코드의 반환값을 의미하는 용어
        const actual = () => new ViewManager(textManager, {viewerEl, inpTxt, btnEl});

        //toThrowError: 코드에서 실제로 에러가 발생하고 있는지 검증
        expect(actual).toThrowError
    });

    const btnEl = document.createElement('button');
    const inpTxt = document.createElement('input');
    const viewerEl = document.createElement('strong');
    const textManager = new TextManager();

    const viewManager = new ViewManager(textManager, {viewerEl, inpTxt, btnEl});

    it('click이벤트가 발생했을 경우 changeValue함수가 동작하는지 확인 합니다', () => {
        //spyOn(객체명, '함수명'): 특정한 객체의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        //toHaveBeenCalled: 특정함수의 호출 여부를 확인/spyOn함수에 등록된 함수만 사용가능, 
        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it('updateView함수가 실행됐는지 확인합니다.', () => {
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();

    })
})