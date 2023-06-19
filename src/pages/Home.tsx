import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/common/Main";
import styled from "styled-components";
import Sidebar from "@/components/common/SideBar";
import { SidebarProvider } from "@/store/SidebarContext";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const Home = () => {
  return (
    <BaseLayout>
      <Container>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <Main />
        </SidebarProvider>
      </Container>
    </BaseLayout>
  );
};

export default Home;
