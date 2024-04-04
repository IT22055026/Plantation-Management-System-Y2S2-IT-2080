import React, { useEffect, useState } from 'react';
import tomato from '../WholeSale_Management/pictuers/tomato.jpeg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useSnackbar } from "notistack";

const OrderPlacingForm = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams(); // Extracting id from route parameters
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/productRecords/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            }).catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
            console.log(error);
        });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center">
                    <div className="space-y-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900 mt-4">{product.productName}</h2>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center">
                    <div className="space-y-12">
                        <img className="h-auto max-w-lg rounded-lg mt-8" src={tomato} alt="tomato" />
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-40">
                        <div className="mt-8">
                            <p>{product.productDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Availabe Kilos(Kg) - {product.productQuantity}
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Price for Kilo(Rs) - {product.productPrice}
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Include Delivery Charges
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Tracking
                        </li>
                    </ul>
                </div>
                <div className="mx-auto max-w-7xl px-10 lg:px-8 justify-center">
                    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li className="flex gap-x-3">
                            {/* Your form inputs */}
                        </li>
                    </ul>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Order Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default OrderPlacingForm;
