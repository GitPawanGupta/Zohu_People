import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header'; //  Added Header

function App() {
  const [mobileOpen, setMobileOpen] = useState(false); //  Sidebar toggle for mobile

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen); //  Toggles sidebar open/close
  };

  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        {/*  Header with menu toggle */}
        <Header onSidebarToggle={handleSidebarToggle} />

        {/*  Responsive Sidebar with props */}
        <Sidebar open={mobileOpen} onClose={handleSidebarToggle} />

        {/*  Main Content */}
        <div style={{ flexGrow: 1 }}>
          <MainRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
