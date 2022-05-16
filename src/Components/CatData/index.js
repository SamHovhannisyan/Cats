import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cat_actions_get, cat_actions_post, cat_more_actions_post } from '../../Redux/Actions/catActions';
import CatItem from '../CatItem';
import css from './catdata.module.css'


const CatData = () => {

    const mainData = useSelector(state => state.catReducer.data);

    const catIamges = useSelector(state => state.catReducer.dataImages);

    const dispatch = useDispatch();

    const [limit, setLimit] = useState(10);

    const [limitBtn, setLimitbtn] = useState(20);

    const [btnId, setBtnId] = useState(1)

    useEffect(() => {
        dispatch(cat_actions_get())
        dispatch(cat_actions_post(limit, 1))
    }, [])

    const dataPost = (limit, id) => {
        dispatch(cat_actions_post(limit, id))
        setBtnId(id)
    }

    const btnLimitClick = (limitBtn, btnId) => {
        dispatch(cat_more_actions_post(limitBtn, btnId))
    }


    return (
        <div>

            <div className={css.mainDiv}>


                {
                    mainData?.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li onClick={() => dataPost(limit, item.id)}>{item.name.toUpperCase()}</li>
                            </ul>
                        )
                    })
                }

            </div>

            <div className={css.divImages}>
                {
                    catIamges?.map((item) => {
                        return (
                            <CatItem item={item} />
                        )
                    })
                }
            </div>

            <div className={css.moreBtn}>
                <button onClick={() => btnLimitClick(limitBtn, btnId)}>More</button>
            </div>

        </div>
    )
}

export default CatData;