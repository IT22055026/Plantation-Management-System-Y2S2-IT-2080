import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";
import DiseaseList from "../../../components/diseaseManagement_home/DiseaseList";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import {SnackbarProvider} from "notistack";

export default function ViewAllDiseases() {

    const breadcrumbItems = [
        { name: 'Records', href: '/disease/records' },

    ];

    return (
        <SnackbarProvider

            style={{
                backgroundColor: 'red',
            }}
        >
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <DiseaseTrackingNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div>
                            <DiseaseList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SnackbarProvider>
    );
}
