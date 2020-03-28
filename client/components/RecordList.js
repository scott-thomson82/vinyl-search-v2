import React from 'react'
import RecordItem from './RecordItem'


const RecordList = ({ records }) => {
    const renderedList = records.map((record) => {
        return <RecordItem />
    })
   
    return  <div>{renderedList}</div>
}


export default RecordList