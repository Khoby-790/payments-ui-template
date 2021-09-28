import Content from "../components/Content";
import MobileNav from "../components/MobileNav";
import Sidebar from "../components/Sidebar";

interface Props {}

const Admin = (props: Props) => {
  return (
    <div>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <MobileNav />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Admin;
