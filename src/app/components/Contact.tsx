import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Instagram,
  MessageCircle,
  MapPin,
  ExternalLink,
} from "lucide-react";

import { Section } from "@./ui/Section";
import { Container } from "@./ui/Container";


const LOGO =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/Logo_FincaMJ.svg";


const SENA =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";


const FONDO =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";





export function Contact(){


const ref = useRef(null);


const inView = useInView(ref,{
once:true,
margin:"-80px"
});



return (

<>


<Section

id="contacto"

background="#1A1208"

className="text-white"

>


<Container>


<div

ref={ref}

className="
grid
gap-[clamp(48px,7vw,100px)]
md:grid-cols-2
items-start
"

>



{/* Texto */}


<motion.div

initial={{
opacity:0,
y:28
}}

animate={
inView
?
{
opacity:1,
y:0
}
:
{}
}

transition={{
duration:.75
}}

>



<span

className="
uppercase
tracking-[.3em]
text-xs
text-[#B87C2A]
"

>

Contacto

</span>



<h2

className="
mt-4
mb-6
text-[#F6F1E8]
text-[clamp(1.8rem,4vw,3rem)]
leading-[1.2]
"

style={{
fontFamily:"Georgia, serif"
}}

>

Escríbenos
<br/>
Directamente

</h2>




<p

className="
mb-10
text-[#6B5840]
leading-[1.85]
"

style={{
fontFamily:"'DM Sans', sans-serif",
fontSize:"1.02rem"
}}

>

Para pedidos, consultas o simplemente para saludarnos,
estamos al otro lado del mensaje. Sin formularios,
sin esperas.

</p>






<a

href="https://www.google.com/maps/search/Campo+de+la+Cruz,+Atlántico,+Colombia"

target="_blank"

rel="noopener noreferrer"

className="
group
flex
items-center
gap-3
text-[#6B5840]
transition-colors
hover:text-[#B87C2A]
"

>


<MapPin size={16}/>



<span
className="text-sm"
>

Campo de la Cruz, Atlántico · Ver en Maps

</span>



<ExternalLink

size={12}

className="
opacity-0
transition-opacity
group-hover:opacity-100
"

/>


</a>



</motion.div>







{/* Botones contacto */}



<div

className="
flex
flex-col
gap-4
"

>



<ContactCard

icon={
<MessageCircle size={26} color="white"/>
}

title="WhatsApp"

text="+57 310 363 5071"

href="https://wa.me/573103635071"

delay={0.15}

inView={inView}

bg="#25d366"

/>





<ContactCard

icon={
<Instagram size={26} color="white"/>
}

title="Instagram"

text="@hdamariajose"

href="https://instagram.com/hdamariajose"

delay={0.28}

inView={inView}

bg="linear-gradient(135deg,#f09433,#dc2743,#bc1888)"

/>



</div>



</div>


</Container>


</Section>







{/* Footer */}

<footer

className="
bg-black
border-t
border-white/10
py-10
"

>


<Container>


<div

className="
flex
flex-col
gap-6
items-center
justify-between
md:flex-row
"

>



<div

className="
flex
items-center
gap-3
"

>


<img

src={LOGO}

alt="Logo"

className="
h-9
w-9
rounded-full
object-contain
bg-white/10
p-1
"

/>



<div>


<p

className="
text-white/70
text-sm
font-bold
"

style={{
fontFamily:"Georgia, serif"
}}

>

Hacienda Maria Jose

</p>


<p

className="
mt-0.5
text-xs
text-white/30
"

>

Campo de la Cruz · Atlántico

</p>



</div>



</div>





<span

className="
text-xs
text-white/25
"

>

© {new Date().getFullYear()} Todos los derechos reservados

</span>






<div

className="
flex
flex-col
items-center
gap-2
md:items-end
"

>


<p className="
text-xs
text-white/25
">

Con el apoyo de

</p>




<div className="
flex
items-center
gap-3
">


<img

src={SENA}

alt="SENA"

className="
h-6
object-contain
brightness-0
invert
opacity-30
"

/>


<div className="
h-4
w-px
bg-white/15
"/>



<img

src={FONDO}

alt="Fondo Emprender"

className="
h-6
object-contain
brightness-0
invert
opacity-30
"

/>



</div>


</div>




</div>


</Container>


</footer>



</>

);

}







function ContactCard({

icon,
title,
text,
href,
delay,
inView,
bg

}:{

icon:React.ReactNode;
title:string;
text:string;
href:string;
delay:number;
inView:boolean;
bg:string;

}){


return (

<motion.a

href={href}

target="_blank"

rel="noopener noreferrer"


initial={{
opacity:0,
x:20
}}

animate={
inView
?
{
opacity:1,
x:0
}
:
{}
}


transition={{
duration:.65,
delay
}}


whileHover={{
scale:1.02
}}

whileTap={{
scale:.98
}}


className="
flex
items-center
gap-5
rounded-2xl
border
border-white/10
bg-white/5
p-6
transition-colors
hover:bg-white/10
group
"

>



<div

className="
flex
h-14
w-14
items-center
justify-center
rounded-xl
shrink-0
"

style={{
background:bg
}}

>

{icon}

</div>




<div>


<p

className="
mb-0.5
text-[#F6F1E8]
"

style={{
fontFamily:"Georgia, serif",
fontSize:"1.1rem"
}}

>

{title}

</p>



<p

className="
text-sm
text-[#6B5840]
"

>

{text}

</p>


</div>




<span

className="
ml-auto
text-lg
text-[#6B5840]
transition-colors
group-hover:text-[#B87C2A]
"

>

→

</span>



</motion.a>

);

}