"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 flex w-full items-center justify-center gap-3 border-t py-3">
                <p>
                    &copy; {new Date().getFullYear()} Todo App. All rights are
                    reserved.
                </p>

                <a
                    href="https://github.com/DevArghyaDas"
                    target="_blank">
                    <Image
                        height={100}
                        width={100}
                        src="/github.svg"
                        alt="github"
                        className="h-10 w-10"
                    />
                </a>
            </footer>
        </>
    );
};

export default Footer;
