import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import DetailForm from "@/components/features/DetailForm";
import { SidebarProvider } from "@/store/SidebarContext";
import { UserProvider } from "@/store/UserContext";

const Details = () => {
  return (
    <BaseLayout>
      <UserProvider>
        <SidebarProvider>
          <Navbar />
          <DetailForm />
        </SidebarProvider>
      </UserProvider>
    </BaseLayout>
  );
};

export default Details;
