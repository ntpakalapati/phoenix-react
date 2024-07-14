import './App.css';
import { useState } from 'react';
import { AdminFooter } from './components/admin/AdminFooter';
import { AdminHeader } from './components/admin/AdminHeader';
import { AdminNavBar } from './components/admin/AdminNavBar';
import { AdminCollapseSideBar } from './components/admin/AdminCollapseSideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes Pages Imports
import { ECommerce } from './components/navbar/ECommerce';
import { ProjectManagement } from './components/navbar/ProjectManagement';
import { CRM } from './components/navbar/CRM';
import { Default } from './components/navbar/Default';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen text-black">
        <header>
          <AdminHeader />
        </header>
        <section className="flex flex-grow overflow-hidden lg:flex-row pt-[65px]">
          <nav className={`relative transition-width duration-300 ease-in-out ${isCollapsed ? 'hidden lg:flex lg:w-20' : 'hidden lg:flex lg:w-64'}`}>
            {isCollapsed ? (
              <AdminCollapseSideBar toggleSidebar={toggleSidebar} />
            ) : (
              <AdminNavBar toggleSidebar={toggleSidebar} />
            )}
          </nav>
          <main className="flex-grow overflow-y-auto bg-[#F5F7FA]">
            <Routes>
              <Route path='/' element={<Default />} />
              <Route path='/eComm' element={<ECommerce />} />
              <Route path='/projMgmt' element={<ProjectManagement />} />
              <Route path='/crm' element={<CRM />} />
            </Routes>
            <AdminFooter />
          </main>
        </section>
      </div>
    </BrowserRouter>

  );
}

export default App;
