import { Routes, Route } from "react-router-dom";
import Wellcome from "./Component/Wellcome";
import ComplaintForm from "./Component/Complaintform";
function App() {
    return (
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/ComplaintForm" element={<ComplaintForm />} />

    </Routes>
  );
}

export default App;