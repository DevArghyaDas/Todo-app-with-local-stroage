"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="border-t py-3">
                <p>
                    &copy; {new Date().getFullYear()} Todo App. All rights
                    reserved.
                </p>

                <a href="https://github.com/DevArghyaDas">
                    <Image
                        height={100}
                        width={100}
                        src="/github.svg"
                        alt="github"
                    />
                </a>
            </footer>
        </>
    );
};

export default Footer;
