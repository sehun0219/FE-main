import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import { useState } from "react";
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BaseLayout>
      <header>
        <Navbar onToggleButtonClick={handleToggleButtonClick} />
      </header>
      <Sidebar isOpen={isSidebarOpen} />
    </BaseLayout>
  );
};

export default Home;
