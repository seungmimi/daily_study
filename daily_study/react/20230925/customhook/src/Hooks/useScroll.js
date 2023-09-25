import { useEffect, useState } from "react";

function useScroll(){
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            // innerHeight : 뷰포트의 높이
            // scrollTop : 타겟요소가 화면 상단으로부터 스크롤된 길이
            // offsetHeight : 여기서는 페이지의 전체 높이를 의미합니다.
            // 뷰포트의 높이 + 스크롤의 값이 화면 전체의 높이보다 크거나 같다면.
            setIsBottom(window.innerHeight + document.documentElement.scrollTop + 5 >= document.documentElement.offsetHeight);
        });
    }, []);
    return isBottom;
}

export default useScroll;