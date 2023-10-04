import React from 'react';
import ListItem from '../ListItem/ListItem';


function List({ items }) {
    return (
    <table>
        <tbody>
            {
                items.map((item, i) => {
                    return(<ListItem key = {i} item= {item} />)
                })
            }
        </tbody>
        
    </table>
    );
}

export default List;