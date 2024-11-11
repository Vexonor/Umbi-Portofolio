"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavbar() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Project",
            link: "#project",
        },
        {
            name: "Member",
            link: "#member",
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
