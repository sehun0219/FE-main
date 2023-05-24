import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";

const Home = () => {
  return (
    <BaseLayout>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Home</h1>
      </main>
    </BaseLayout>
  );
};

export default Home;
