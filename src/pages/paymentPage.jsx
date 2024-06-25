import Navbar from "../components/Navbar"
import HeaderPayment from "../components/headerPayment";
import SelectDate from "../components/DatePicker";

function PaymentPage() {

    return (
      <>
        <HeaderPayment/>
        <div className="h-24"></div>
        <SelectDate/>
        <div className="h-20 w-full"></div>
        <Navbar />
      </>
    );
}

export default PaymentPage
