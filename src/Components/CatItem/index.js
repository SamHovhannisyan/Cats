import React from 'react';


const CatItem = ({ item }) => {


    return (
        <div>
            <img src={item.url} width='120' height={'80'} style={{
                paddingTop: "0.5rem"
            }} />
        </div>
    )
}

export default CatItem;