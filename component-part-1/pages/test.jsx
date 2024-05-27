import React from 'react'
import List from '../component/List'

const Test = () => {
    const source = [1, 2, 3]
    return (
        <>
        <List items={source} />
        <List items={source} />
        <List items={source} />
        </>
    )
}

export default Test


