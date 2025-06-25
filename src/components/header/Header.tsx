import ThemeButton from "../theme/ThemeButton";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b">
                <div className="mx-auto grid max-w-5xl grid-cols-2 px-2 py-3">
                    <div className="font-mono text-2xl font-semibold md:text-3xl">
                        Todo-app
                    </div>
                    <nav className="flex justify-end">
                        <ThemeButton />
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
