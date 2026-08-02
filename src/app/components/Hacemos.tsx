import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";


const IMG_LECHE =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0047.jpg";

const IMG_QUESO =
"https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0053.jpg";



const products = [
{
number:"01",
title:"Leche Fresca",
image:IMG_LECHE,
description:
"Recogida cada mañana directamente de nuestro ganado. Sin pasteurizar industrialmente ni almacenar días. Fresca de origen, del mismo día."
},
{
number:"02",
title:"Queso Artesanal",
image:IMG_QUESO,
description:
"Elaborado a mano con recetas propias. Queso blanco fresco, firme y de sabor genuino de finca. Sin aditivos, solo leche, sal y cuajo natural."
}
];


const values = [
{
label:"Sin Aditivos",
desc:"Solo leche, sal y cuajo natural."
},
{
label:"Sin Conservantes",
desc:"Ningún proceso industrial altera el sabor."
},
{
label:"Directo de la Finca",
desc:"Sin intermediarios. Trazabilidad total."
},
{
label:"Producción Familiar",
desc:"Todo sale de nuestras manos, del mismo lugar."
}
];



export function Hacemos(){

const ref = useRef(null);

const inView = useInView(ref,{
once:true,
margin:"-80px"
});


return (

<Section
id="hacemos"
background="#1A1208"
>


<div ref={ref}>


{/* Header */}

<Container
className="
pt-[clamp(60px,8vh,80px)]
pb-[clamp(40px,6vh,56px)]
"
>


<motion.div

initial={{
opacity:0,
y:24
}}

animate={
inView
?
{
opacity:1,
y:0
}
:{}
}

transition={{
duration:.7
}}

className="
flex
flex-col
gap-6
md:flex-row
md:items-end
md:justify-between
"

>


<div>

<span
className="
uppercase
tracking-[.3em]
text-xs
text-[#B87C2A]
"
>
Producción
</span>


<h2

className="
mt-3
text-[#F6F1E8]
text-[clamp(1.8rem,4vw,3rem)]
leading-[1.15]
"

style={{
fontFamily:"Georgia, serif"
}}

>
Lo que Hacemos
</h2>


</div>



<p

className="
max-w-sm
text-sm
text-[#6B5840]
leading-[1.8]
"

>
En Hacienda Maria Jose nos dedicamos a dos cosas
y las hacemos bien: producir leche fresca y elaborar
queso artesanal.
</p>


</motion.div>


</Container>





{/* Productos */}

<div
className="
grid
md:grid-cols-2
"
>


{
products.map((product,index)=>(

<motion.div

key={product.title}

initial={{
opacity:0
}}

animate={
inView
?
{
opacity:1
}
:{}
}

transition={{
duration:.8,
delay:.15 + index*.15
}}

className="
relative
overflow-hidden
group
h-[clamp(420px,55vh,520px)]
"

>


<img

src={product.image}

alt={product.title}

className="
absolute
inset-0
h-full
w-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"

/>



<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-black/20
to-transparent
"
/>



<div

className="
absolute
bottom-0
left-0
right-0
p-8
md:p-12
"

>


<span
className="
uppercase
tracking-[.3em]
text-xs
text-[#B87C2A]
"
>
{product.number}
</span>



<h3

className="
mt-2
mb-4
text-white
text-[clamp(1.6rem,3vw,2.2rem)]
"

style={{
fontFamily:"Georgia, serif"
}}

>
{product.title}
</h3>



<p

className="
max-w-xs
text-sm
text-white/70
leading-[1.85]
"

>
{product.description}
</p>


</div>


</motion.div>


))

}


</div>






{/* Valores */}

<Container
className="
py-[clamp(48px,7vh,64px)]
border-t
border-white/10
"
>


<div
className="
grid
gap-8
sm:grid-cols-2
md:grid-cols-4
"
>


{
values.map((item,index)=>(


<motion.div

key={item.label}

initial={{
opacity:0,
y:20
}}

animate={
inView
?
{
opacity:1,
y:0
}
:{}
}

transition={{
duration:.5,
delay:.5+index*.08
}}

className="
border-l
border-white/10
pl-5
"

>


<p

className="
mb-1.5
text-[#F6F1E8]
text-[.95rem]
"

style={{
fontFamily:"Georgia, serif"
}}

>
{item.label}
</p>


<p

className="
text-xs
text-[#6B5840]
leading-[1.7]
"

>
{item.desc}
</p>


</motion.div>


))

}


</div>


</Container>



</div>


</Section>


);

}