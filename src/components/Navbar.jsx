import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full shadow-md">
            <div className="px-10 navbar bg-base-100">
                {/* logo */}
                <div className="navbar-start">
                    <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
                </div>

                {/* Menu */}
                <div className="navbar-end">
                    {/* menu lists */}
                    <div>
                        <div className="flex">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href={'/'}>Home</Link></li>
                                    <li><Link href={'/api/redirect'}>Redirect</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden navbar-center lg:flex">
                            <ul className="px-1 menu menu-horizontal">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/api/redirect'}>Redirect</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* menu lists end */}
                </div>                
                {/* Menu end */}
            </div>
        </div>
    );
};

export default Navbar;