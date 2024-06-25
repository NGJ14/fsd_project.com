import calendarLogo from './images/calendar.svg'
import paymentLogo from './images/payment.svg'

const Navbar = () => {
    const path = window.location.pathname
    return (
      <nav className="text-white bottom-0 w-full bg-black h-20 flex justify-around fixed">
        <CustomLink href="/">
          <img className='opacity-20' src={paymentLogo} alt="paymentPage" />
        </CustomLink>
        <CustomLink href="/calendar">
          <img className='opacity-20' src={calendarLogo} alt="calendar" />
        </CustomLink>
      </nav>
    );
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <div className="bg-zinc-900 m-1 rounded-lg w-1/2 flex justify-around py-2">
            <a className={path === href ? "[&>img]:opacity-100" : ""} href={href} {...props}>
                {children}
            </a>
        </div>
    );
}

export default Navbar