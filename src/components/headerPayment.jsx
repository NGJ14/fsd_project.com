import paymentLogo from "../components/images/payment.svg";

const HeaderPayment = () => {
    return (
        <>
            <div className="text-white text-6xl px-4 h-24 font-extrabold flex justify-between items-center fixed bg-black w-full">
                <div className="content-center">Expenz.</div>
                <div>
                    <img className="h-16" src={paymentLogo} alt="payment" />
                </div>
            </div>
        </>
    );
};

export default HeaderPayment;
