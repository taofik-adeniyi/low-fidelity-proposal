import React from 'react'
import TableData from '../TableData/TableData'
import TableHead from '../TableHead/TableHead'

const TableHolder = () => {
    return (
        <>
        <h4>Recent Activities</h4>
        <table style={{border: '1px solid #000'}}>
            <TableHead />
            <TableData />
        </table>
        </>
    )
}
export default TableHolder