import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';
import Loader from "../Loader/Loader";
const ProfileInfo = lazy(() => import("../ProfileInfo/ProfileInfo"));
const ReviewsList = lazy(() => import("../ReviewsList/ReviewsList"));
const PropertyList = lazy(() => import("../PropertyList/PropertyList"))

export default function ProfileBody() {
    return (
        <>
            <Tabs isLazy mt={"3rem"} variant='enclosed'>
                <TabList >
                    <Tab color={"brand.100"}>Datos</Tab>
                    <Tab color={"brand.100"}>Reviews</Tab>
                    <Tab color={"brand.100"}>Inmuebles</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Suspense fallback={<Loader />}>
                            <ProfileInfo />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<Loader />}>
                            <ReviewsList target="user" id="3"/>
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<Loader />}>
                            <PropertyList filters={{homeOwnerId: "u1"}}/>
                        </Suspense>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}