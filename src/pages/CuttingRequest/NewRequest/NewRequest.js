import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NewRequest = ({ onAdd }) => {
    const { id } = useParams();
    const [request, setRequest] = useState({
        CuttingRequestID: '',
        JobID: id,
        ProductName: '',
        sheets: [{
            brand: '',
            material: '',
            GSM: '',
            packets: '',
            cuttingSize: ''
        }]
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const sheetKey = name.split('.')[1];

        setRequest(prevState => {
            const sheets = [...prevState.sheets];
            sheets[index] = {
                ...sheets[index],
                [sheetKey]: value
            };
            return { ...prevState, sheets };
        });
    };

    const handleAddSheet = () => {
        setRequest(prevState => ({
            ...prevState,
            sheets: [...prevState.sheets, {
                brand: '',
                material: '',
                GSM: '',
                packets: '',
                cuttingSize: ''
            }]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(request);
        setRequest({
            CuttingRequestID: '',
            JobID: '',
            ProductName: '',
            sheets: [{
                brand: '',
                material: '',
                GSM: '',
                packets: '',
                cuttingSize: ''
            }]
        });
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">New Cutting Request</h2>
            <div className='flex'>
                <div className="p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="JobID">Job ID</label>
                    <input
                        type="text"
                        id="JobID"
                        name="JobID"
                        disabled
                        value={request.JobID}
                        onChange={(e) => setRequest({ ...request, JobID: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CuttingRequestID">Cutting Request ID</label>
                    <input
                        type="text"
                        id="CuttingRequestID"
                        name="CuttingRequestID"
                        disabled
                        value={request.CuttingRequestID}
                        onChange={(e) => setRequest({ ...request, CuttingRequestID: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ProductName">Product Name</label>
                    <input
                        type="text"
                        id="ProductName"
                        name="ProductName"
                        value={request.ProductName}
                        onChange={(e) => setRequest({ ...request, ProductName: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Sheet Details</h3>
            {request.sheets.map((sheet, index) => (
                <div className='flex mb-4' key={index}>
                    <div className='p-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sheet.brand.${index}`}>Brand</label>
                        <input
                            type="text"
                            id={`sheet.brand.${index}`}
                            name="sheet.brand"
                            value={sheet.brand}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sheet.material.${index}`}>Material</label>
                        <input
                            type="text"
                            id={`sheet.material.${index}`}
                            name="sheet.material"
                            value={sheet.material}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sheet.GSM.${index}`}>GSM</label>
                        <input
                            type="text"
                            id={`sheet.GSM.${index}`}
                            name="sheet.GSM"
                            value={sheet.GSM}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sheet.packets.${index}`}>Packets/Sheets</label>
                        <input
                            type="text"
                            id={`sheet.packets.${index}`}
                            name="sheet.packets"
                            value={sheet.packets}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sheet.cuttingSize.${index}`}>Cutting Size</label>
                        <input
                            type="text"
                            id={`sheet.cuttingSize.${index}`}
                            name="sheet.cuttingSize"
                            value={sheet.cuttingSize}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
            ))}
            <div className="mb-4">
                <button
                    type="button"
                    onClick={handleAddSheet}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Another Sheet
                </button>
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Request
                </button>
            </div>
        </form>
    );
};

export default NewRequest;
