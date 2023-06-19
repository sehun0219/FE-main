import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import DetailForm from "@/components/features/DetailForm";
import { SidebarProvider } from "@/store/SidebarContext";
import { UserProvider } from "@/store/UserContext";

const Details = () => {
  return (
    <BaseLayout>
      <SidebarProvider>
        <UserProvider>
          <Navbar />
          <DetailForm />
        </UserProvider>
      </SidebarProvider>
    </BaseLayout>
  );
};

export default Details;
