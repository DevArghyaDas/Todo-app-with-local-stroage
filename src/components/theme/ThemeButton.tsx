"use client";
import { Switch } from "@/components/ui/switch";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [theme]);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="flex items-center gap-2">
            <span>
                <Sun />
            </span>
            <Switch
                checked={isDark}
                onCheckedChange={(checked: boolean) =>
                    setTheme(checked ? "dark" : "light")
                }
                aria-label="Toggle theme"
                className="cursor-pointer"
            />
            <span>
                <MoonStar />
            </span>
        </div>
    );
};

export default ThemeButton;
