import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UsecallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div>
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
