import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { Container } from "@/components/layout/Container";


const LOGO =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/Logo_FincaMJ.svg";


const mainLinks = [
  {
    label:"Nosotros",
    href:"#nosotros"
  },
  {
    label:"Lo que Hacemos",
    href:"#hacemos"
  },
  {
    label:"Contacto",
    href:"#contacto"
  },
];



export function Navbar(){

const [scrolled,setScrolled] = useState(false);
const [menuOpen,setMenuOpen] = useState(false);

const location = useLocation();
const navigate = useNavigate();

const isGaleria = location.pathname === "/galeria";


useEffect(()=>{

const handleScroll = () =>
setScrolled(window.scrollY > 60);


window.addEventListener(
"scroll",
handleScroll
);

return () =>
window.removeEventListener(
"scroll",
handleScroll
);

},[]);



const showBg = scrolled || isGaleria;



const goTo = (href:string)=>{

setMenuOpen(false);


if(isGaleria){

navigate("/");

setTimeout(()=>{

document
.querySelector(href)
?.scrollIntoView({
behavior:"smooth"
});

},300);


return;

}


document
.querySelector(href)
?.scrollIntoView({
behavior:"smooth"
});

};



const textColor =
showBg
? "text-[#1a1208]"
: "text-white/90";



return (

<motion.header

initial={{
y:-70,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.7,
ease:[0.22,1,0.36,1]
}}

className={`
fixed top-0 inset-x-0 z-50
transition-all duration-500
${
showBg
?
"bg-[#f6f1e8]/95 backdrop-blur-md border-b border-black/10 shadow-sm"
:
"bg-transparent"
}
`}

>


<Container
className="
h-16
flex
items-center
justify-between
"
>



{/* Logo */}

<Link
to="/"
className="
flex
items-center
gap-3
"
>

<img

src={LOGO}

alt="Hacienda Maria Jose"

className={`
h-9
w-9
object-contain
rounded-full
p-1
${
showBg
?
"bg-[#1a1208]/5"
:
"bg-white/15"
}
`}

/>


<div

className={`
hidden sm:block
transition-colors
${textColor}
`}

style={{
fontFamily:"Georgia, serif"
}}

>

<span className="font-bold text-[.95rem]">
Hacienda
</span>

<span className="ml-1 text-[.95rem]">
Maria Jose
</span>


</div>


</Link>





{/* Desktop */}

<nav
className="
hidden md:flex
items-center
gap-7
"
>


{
mainLinks.map(link=>(

<button

key={link.href}

onClick={()=>goTo(link.href)}

className={`
text-sm
tracking-wide
transition-opacity
hover:opacity-60
${textColor}
`}

>

{link.label}

</button>

))

}



<Link

to="/galeria"

className={`
text-sm
tracking-wide
transition-opacity
hover:opacity-60
${textColor}

${
isGaleria
?
"opacity-40 pointer-events-none"
:
""
}

`}

>

Galería

</Link>




<button

onClick={()=>goTo("#contacto")}

className={`
rounded-full
border
px-5
py-2
text-sm
transition-opacity
hover:opacity-70

${
showBg
?
"border-[#1a1208] text-[#1a1208]"
:
"border-white/60 text-white"
}

`}

>

Escríbenos

</button>


</nav>





{/* Mobile */}

<button

onClick={()=>
setMenuOpen(value=>!value)
}

className={`
md:hidden
transition-colors
${textColor}
`}

>

{
menuOpen
?
<X size={22}/>
:
<Menu size={22}/>
}

</button>


</Container>





{/* Mobile Menu */}

{
menuOpen && (

<div
className="
md:hidden
bg-[#f6f1e8]
border-t
border-black/10
"
>

<nav
className="
px-6
py-4
flex
flex-col
"
>


{
mainLinks.map(link=>(

<button

key={link.href}

onClick={()=>goTo(link.href)}

className="
text-left
py-3.5
text-[#1a1208]
border-b
border-black/10
text-base
"

style={{
fontFamily:"Georgia, serif"
}}

>

{link.label}

</button>

))

}



<Link

to="/galeria"

onClick={()=>setMenuOpen(false)}

className="
py-3.5
text-[#1a1208]
border-b
border-black/10
text-base
"

style={{
fontFamily:"Georgia, serif"
}}

>

Galería

</Link>




<button

onClick={()=>goTo("#contacto")}

className="
mt-3
py-3
rounded-full
bg-[#1a1208]
text-[#f6f1e8]
text-center
text-sm
"

>

Escríbenos

</button>


</nav>


</div>

)

}


</motion.header>


);

}