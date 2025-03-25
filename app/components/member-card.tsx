import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function MemberCard() {
    const testimonials = [
        {
            quote:
                "Game developer menciptakan dunia baru, di mana setiap kode adalah petualangan, dan setiap grafik adalah pintu menuju pengalaman yang tak terlupakan.",
            name: "Aziz",
            designation: "< Game Developer />",
            role: "Jester",
            src: "/img/member-1.jpg",
        },
        {
            quote:
                "Seorang frontend developer bukan hanya membuat tampilan yang menarik, tetapi juga membangun pengalaman yang membuat setiap pengguna merasa terhubung dan nyaman dalam setiap interaksi.",
            name: "Shafiq",
            designation: "< FrontEnd Developer />",
            role: "Wizard",
            src: "/img/member-2.jpg",
        },
        {
            quote:
                "Seorang UI/UX designer tidak hanya merancang antarmuka, tetapi menciptakan perjalanan yang intuitif, membuat setiap langkah pengguna terasa mudah, menyenangkan, dan bermakna.",
            name: "Michael",
            designation: "< UI / UX Designer />",
            role: "Bishop",
            src: "/img/member-3.png",
        }
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}

export default MemberCard;
