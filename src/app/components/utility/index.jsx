"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { AcmeLogo } from "./logo";
import { SearchIcon } from "./searchLogo";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Home", "Popular", "Now Playing", "Top Rated", "Upcoming"];

    const [query, setQuery] = React.useState("");
    const router = useRouter();

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            // Redirect ke halaman pencarian dengan query sebagai parameter
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="dark h-20">
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">NontonIN</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/" className="text-white mx-3">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/popular" aria-current="page" className="text-white mx-3">
                        Popular
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/now_playing" className="text-white mx-3">
                        Now Playing
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/top_rated" className="text-white mx-3">
                        Top rated
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/upcoming" className="text-white mx-3">
                        Upcoming
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="mt-4">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link color={index === 0 ? "primary" : "foreground"} className="w-full" href={index === 0 ? "/" : `/${item.toLowerCase().replace(/\s+/g, "_")}`} size="lg">
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
