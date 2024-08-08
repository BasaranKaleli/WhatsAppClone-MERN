import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Chatdetail from "./pages/Chatdetail";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import PageContainer from "./containers/PageContainer";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <PageContainer>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="chat/:id" element={<Chatdetail />} />
            </Routes>
          </PageContainer>
        </Router>
      )}
    </>
  );
}

export default App;
