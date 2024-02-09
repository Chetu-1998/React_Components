import React from 'react'

const TableCardComponent = () => {
    return (
        <div className='bg-black h-screen p-20'>
            <div className='borde mx-auto rounded-md h-full w-full bg-white p-5'>
                <div className='border shadow-lg h-full w-full bg-white rounded-lg p-16'>
                    <div className='border border-black-200  w-full'>
                        <table>
                            <thead className='bg-blue-700 w-full h-20 '>
                                <tr>
                                    <th className='w-96 text-cyan-50'>TLD</th>
                                    <th className='w-96 text-cyan-50'>Duration</th>
                                    <th className='w-96 text-cyan-50'>Registration</th>
                                    <th className='w-96 text-cyan-50'>Renewal</th>
                                    <th className='w-96 text-cyan-50'>Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-lg text-black text-center bg-blue-100'>.com</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>1 Year</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>$75.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>$5.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>$10.00</td>
                                    
                                </tr>
                                <tr>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>.net</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>1 Year</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>$75.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>$5.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>$10.00</td>
                                    
                                </tr>
                                <tr>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>.org</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>1 Year</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center  bg-blue-100'>$75.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center'>$5.00</td>
                                    <td className='border-b-2 border-white-200 h-24 w-20 shadow-sm text-black text-center bg-blue-100'>$10.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableCardComponent
