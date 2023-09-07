import React from "react";

const items = [
    { id: 1, name: '🍎 Apple', desc: '빨간건 사과' },
    { id: 2, name: '🍌 Banana', desc: '바나나는 길어' },
    { id: 3, name: '🍒 Cherry', desc: '체리는 비싸' }
];

function FruitList(){
    const myArr = items.map((item,index) => {
        return(
            <React.Fragment key={item.id}>
                <dt style={{"padding":"10px", "borderBottom":"1px dashed #999"}}>{item.name}</dt>
                <dd style={{"padding":"10px", "color":"#777"}}>{item.desc}</dd>
            </React.Fragment>
        );
    });
    return(
        <dl>
            {myArr}
        </dl>
    );
}

export default FruitList;