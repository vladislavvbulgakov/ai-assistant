import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdsListPage from "@/pages/adsList/adsListPage";
import AdViewPage from "@/pages/adView";
import AdEditPage from "@/pages/adEdit";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ads" element={<AdsListPage />} />
                <Route path="/ads/:id" element={<AdViewPage />} />
                <Route path="/ads/:id/edit" element={<AdEditPage />} />
                <Route path="/" element={<Navigate to="/ads" />} />
            </Routes>
        </BrowserRouter>
    );
};
