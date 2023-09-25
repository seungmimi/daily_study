import { useEffect, useState } from "react";
import ImageList from "./component/ImageList";
import useScroll from "./Hooks/useScroll";
import Loading from "./component/Loading";

function App2() {
    const [imageList, setImageList] = useState([]);
    const [pageToFetch, setpageToFetch] = useState(1);
    const isBottom = useScroll();

    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        if(isBottom){
            setpageToFetch((prevPage)=>{
                return prevPage + 1
            })
        }
    },[isBottom])

    async function fetchImagesByPage(){
        setIsLoading(true);
        try{
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);
            if(!response.ok){
                throw new Error('네트워크에 문제가 발생했습니다')
            }
            //.json()도 비동기로 실행 되기 때문에 await필요
            const data = await response.json();
            setImageList([...imageList, ...data]);
            setIsLoading(false);
        }catch(error){
            console.error(error)
        }

    }
    
    useEffect(()=>{
        fetchImagesByPage()
    },[pageToFetch]);

    return(
        <>
            <ImageList imageList={imageList}/>
            {isLoading && <Loading />}
        </>

    )
}
export default App2;