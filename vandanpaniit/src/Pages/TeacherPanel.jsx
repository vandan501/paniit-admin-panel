import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import '../TeacherPanel.css';

const Table = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:4000/teacher/')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Data:', data); // Log the fetched data
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleEntriesChange = (event) => {
        setEntriesPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1); // Reset to the first page when changing entries per page
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        setCurrentPage(1); // Reset to the first page when performing a search
    };

    // Apply search filter to the data
    const filteredData = data.filter(item => {
        const isMatch = (
            item.srNo.toString().toLowerCase().includes(searchText.toLowerCase()) ||
            item.programName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.batchName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.coTeacher.toLowerCase().includes(searchText.toLowerCase())
        );
        return isMatch;
    });

    console.log('Filtered Data:', filteredData); // Log the filtered data

    // Paginate the filtered data
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(filteredData.length / entriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginationWindow = 1; // Number of pages to show around the current page

    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(currentPage - paginationWindow, 1);
        const endPage = Math.min(currentPage + paginationWindow, totalPages);

        // Add the first page and ellipsis if needed
        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        // Add pages within the window
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add the last page and ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Sr.No', accessor: 'srNo' },
            { Header: 'Program Name', accessor: 'programName' },
            { Header: 'Batch Name', accessor: 'batchName' },
            { Header: 'Co-Teacher', accessor: 'coTeacher' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        { columns, data: currentEntries },
    );

    return (
        <div className="table-container2">
            <div className="table-heading">
                <h2>Teacher Batch Management</h2>
            </div>
            <div className="search-bar">
                <label>
                    Show 
                    <select value={entriesPerPage} onChange={handleEntriesChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    entries
                </label>

                <label>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={searchText} 
                        onChange={handleSearchChange}
                    />
                </label>
            </div>
            <div className="table-widget-container">
            <table {...getTableProps()} className="react-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td key={cell.column.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
            

            <div className="pagination">
                <div className='pagination-text'>
                    <span>
                         {`Showing ${indexOfFirstEntry + 1} to ${
                              indexOfLastEntry > filteredData.length ? filteredData.length : indexOfLastEntry
                        } of ${filteredData.length} entries`}
                    </span>
              </div>

                 <div className='pagination-number'>
                    <button className='prev'
                         onClick={() => handlePageChange(currentPage - 1)}
                         disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {getPageNumbers().map((page, index) => (
                        <button
                        key={index}
                        onClick={() => page !== '...' && handlePageChange(page)}
                        className={`number ${currentPage === page ? 'active' : ''}`}
                        disabled={page === '...'}
                        >
                            {page}
                        </button>    
                    ))}
                    <button className='prev'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
          </div>
    );
};

export default Table;