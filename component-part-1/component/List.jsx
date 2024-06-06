import React from 'react'

export default function List({ items }) {
    console.log('-------------start render list----------')
    items.forEach((item) => { console.log(item) })

    let itemss = items.map((item) => item * 2)

    itemss.push('偷家的資料')
    const element = (
        <ul>{itemss.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    )


    return element
}

