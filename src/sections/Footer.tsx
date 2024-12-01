const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div
                    className="flex flex-col md:flex-row md:justify-between items-center ga-6
                "
                >
                    <div>
                        <Image alt="Layers Logo" src={logoImage} />
                    </div>
                    <div>
                        <nav className="flex  gap-6">
                            {footerLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    className="text-white/50 text-sm"
                                    key={index}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
