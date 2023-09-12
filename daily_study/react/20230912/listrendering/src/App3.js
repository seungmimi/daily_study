import { useState } from "react";


function UserItem({user}){

    const [showInfo, setShowInfo] = useState(false);

    return (
    //이벤트 헨들러는 함수 자체가 들어가야지 함수 실행문이 들어가면 안됨 -> 그래서 화살표함수(익명함수)로 작성
    <li onClick={() => {setShowInfo(!showInfo)}}>
        {user.name}
        {showInfo ? (<div>
            <p>email: {user.email}</p>
            <p>job: {user.job}</p>
        </div>) : null}
    </li>
    )
}

function UserList({users}){
    return(
        <ul>
            {users.map((item)=>{
                    return(<UserItem key={item.id} user={item}/>)
                })
            }
        </ul>
    )
}

function App3(){
    const users =[
            { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
            { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
            { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
        ];
    return(
        <>
            <h1>User List</h1>
            <UserList users = {users}/>
        </>

    )
}

export default App3;