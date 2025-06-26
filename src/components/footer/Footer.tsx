const Footer = () => {
    return (
        <>
            <footer className="border-t py-3">
                <p>
                    &copy; {new Date().getFullYear()} Todo App. All rights
                    reserved.
                </p>
            </footer>
        </>
    );
};

export default Footer;
