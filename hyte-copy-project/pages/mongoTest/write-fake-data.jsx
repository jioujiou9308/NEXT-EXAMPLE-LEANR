import React from 'react'

const WriteFakeData = () => {
    const body = {
        title: 'fakefsfasd',
        name: 'Wddei'
    }
    async function handleClick() {
        try {
            const response = await fetch('/api/testProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }); // 
            const result = await response.json();
            console.log('result', result)

        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div><button onClick={handleClick}> click me to add data</button></div>
    )
}

export default WriteFakeData