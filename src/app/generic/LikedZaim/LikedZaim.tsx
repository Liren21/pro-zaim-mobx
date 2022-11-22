import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './LikedZaim.scss'


interface ISearchBtn {
    data: string
}

export default observer(({data}: ISearchBtn) => {
    const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
    const [value, setValue] = useState(data);
    const [heart, setHeart] = useState(false)
    useEffect(() => {
        setValue(data)
    }, [])
    console.log(value)
    console.log(arr)
    return (
        <>
            {heart ? (
                <i
                    style={{
                        float: 'right',
                        marginLeft: '1rem',
                        borderColor: 'rgba(255,255,255,0)',
                        borderRadius: '150px',
                    }}
                    className="fa fa-heart"
                    aria-hidden="true"
                    onClick={() => setHeart(false)}
                />
            ) : <i
                style={{
                    float: 'right',
                    marginLeft: '1rem',
                    borderColor: 'rgba(255,255,255,0)',
                    borderRadius: '150px',
                }}
                className="fa fa-heart-o"
                aria-hidden="true"
                onClick={(event) => {
                    setHeart(true)
                    setArr([...arr, `${value}`])
                }}
            />
            }
        </>
    )
})
