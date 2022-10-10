import React from "react";

function Navigation() {
    return (
        <>
            <header className="text-center">Mike Levy</header>
            <div className="">
                <ul className="nav nav-tabs justify-content-center">
                    <li className="is-active">
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Resume</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;