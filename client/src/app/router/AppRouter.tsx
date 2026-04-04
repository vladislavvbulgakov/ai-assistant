import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdsListPage from "@/pages/adsListPage";
import AdViewPage from "@/pages/adView";
import AdEditPage from "@/pages/adEdit";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdsListPage />} />
                <Route path="/ads/:id" element={<AdViewPage />} />
                <Route path="/ads/:id/edit" element={<AdEditPage />} />
            </Routes>
        </BrowserRouter>
    );
};
