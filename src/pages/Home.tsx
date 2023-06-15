import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/common/Main";
import styled from "styled-components";
import Sidebar from "../components/common/SideBar";

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
`;

const Home = () => {
  return (
    <BaseLayout>
      <Navbar />
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </BaseLayout>
  );
};

export default Home;
