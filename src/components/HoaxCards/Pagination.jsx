import React from 'react'
import "./Pagination.css"

const Pagination = ({infoPerPage,totalInfo,paginate}) => {

    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(totalInfo/infoPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className="pagination-hoax">
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a href="#!" onClick={()=>paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
