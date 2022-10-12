import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="text-center footer">
                <p>
                    <br></br>
                    <hr />
                    <p className='mb-2'>My Portfolio - a React site by <strong>Mike Levy</strong></p>
                    <a className='footer-link' href="https://github.com/rva-mike" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-2x fa-github"></i>
                    </a>
                    <a className='footer-link' href="https://www.linkedin.com/in/mike-levy-url/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-2x fa-linkedin"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/19123991/rva-mike" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-2x fa-stack-overflow"></i>
                    </a>
                </p>
            </div>
        </footer>
    );
}
