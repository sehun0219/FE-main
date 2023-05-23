import { SidebarContainer } from "./styled";

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <a href="#section1">Home</a>
      <a href="#section2">Favorite</a>
      <a href="#section4">History</a>
      <a href="#section3">Login</a>
    </SidebarContainer>
  );
}

export default Sidebar;
