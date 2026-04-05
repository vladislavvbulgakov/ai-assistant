import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdsListPage from "@/pages/adsList/adsListPage/adsListPage";
import AdsViewPage from "@/pages/adView/adsViewPage/adsViewPage";
import AdEditPage from "@/pages/adEdit/adsEditPage/adsEditPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ads" element={<AdsListPage />} />
                <Route path="/ads/:id" element={<AdsViewPage />} />
                <Route path="/ads/:id/edit" element={<AdEditPage />} />
                <Route path="/" element={<Navigate to="/ads" />} />
            </Routes>
        </BrowserRouter>
    );
};
