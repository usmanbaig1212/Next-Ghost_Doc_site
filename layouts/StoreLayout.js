import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StoreLayout = ({children}) => {
    return ( 
        <div className="container">
            <Header />
            <div className="flex  justify-between">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
}
 
export default StoreLayout;