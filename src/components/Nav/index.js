import React from "react";

function Navigation() {
    return (
        <>
            <header>Mike Levy</header>
            <div className="">
                <ul>
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