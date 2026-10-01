import { Routes, Route } from "react-router-dom";

import Wellcome from "./Component/Wellcome";

import ThankYouPage from "./Component/ThankYouPage";
import ComplaintForm from "./Component/Complaintform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/ComplaintForm" element={<ComplaintForm />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;