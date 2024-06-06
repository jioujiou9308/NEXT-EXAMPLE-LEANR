import React from 'react'


export async function getStaticProps(context) {
  console.log('context', context)
  return {
    props: {}
  }

}

const Path2 = () => {
  return (
    <div>Path2</div>
  )
}

export default Path2