import ThemeButton from "../theme/ThemeButton";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full border-b">
                <div className="mx-auto grid max-w-5xl grid-cols-2 px-2 py-3">
                    <div className="text-3xl">Todo-app</div>
                    <nav className="flex justify-end">
                        <ThemeButton />
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
