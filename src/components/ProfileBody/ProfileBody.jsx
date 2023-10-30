import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';
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
                        <Suspense fallback="Cargando...">
                            <ProfileInfo />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback="Cargando...">
                            <ReviewsList />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback="Cargando...">
                            <PropertyList />
                        </Suspense>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}