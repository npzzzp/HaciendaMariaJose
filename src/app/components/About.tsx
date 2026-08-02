import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";


const IMG_BIG =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0064.jpg";


const SENA =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";


const FONDO =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";


const pillars = [
  {
    title:"Trabajo Familiar",
    desc:"La finca la llevamos entre todos. El ordeño, el queso y la distribución los hacemos nosotros mismos, con dedicación diaria y el mismo cuidado que ha acompañado a nuestra familia durante años.",
  },
  {
    title:"Leche Fresca del Día",
    desc:"Cada mañana obtenemos la leche directamente de nuestro ganado. Sin intermediarios, sin largos tiempos de almacenamiento y conservando toda su frescura.",
  },
  {
    title:"Queso Artesanal",
    desc:"Nuestro queso se elabora a mano siguiendo un proceso tradicional, respetando el tiempo que cada pieza necesita para conservar su sabor y calidad.",
  },
];


export function About(){

const ref = useRef(null);

const inView = useInView(ref,{
  once:true,
  margin:"-100px"
});


return (

<Section
 id="nosotros"
 background="#F6F1E8"
>

<div ref={ref}>


{/* Imagen principal */}

<div
className="
relative
overflow-hidden
h-[clamp(380px,55vh,700px)]
"
>

<img
src={IMG_BIG}
alt="Hacienda Maria Jose"
className="
absolute inset-0
h-full w-full
object-cover
"
/>


<div className="
absolute inset-0
bg-gradient-to-r
from-black/65
via-black/35
to-transparent
"/>


<motion.div
initial={{
opacity:0,
x:-40
}}
animate={
inView
? {
opacity:1,
x:0
}
:{}
}
transition={{
duration:.8
}}
className="
relative z-10
flex
h-full
items-center
"
>

<Container>

<p
className="
max-w-[700px]
text-white
italic
text-[clamp(1.35rem,2.4vw,2.2rem)]
leading-[1.6]
"
style={{
fontFamily:"Lora, serif"
}}
>
“Aquí la jornada empieza antes del amanecer, con el ordeño,
el cuidado del ganado y el trabajo silencioso que hace posible
todo lo que ponemos en tus manos.”
</p>

</Container>

</motion.div>

</div>



{/* Contenido */}

<Container>

<div
className="
grid
items-start
gap-[clamp(48px,7vw,120px)]
lg:grid-cols-2
"
>


{/* Información */}

<motion.div
initial={{
opacity:0,
y:35
}}
animate={
inView
? {
opacity:1,
y:0
}
:{}
}
transition={{
duration:.75
}}
>


<span
className="
uppercase
text-[#B87C2A]
tracking-[.3em]
text-[clamp(.75rem,.8vw,.9rem)]
"
>
Quiénes Somos
</span>


<h2
className="
mt-5
max-w-[12ch]
text-[#1A1208]
font-bold
text-[clamp(2.2rem,3.6vw,3.8rem)]
leading-[1.12]
tracking-[-.02em]
"
style={{
fontFamily:"Lora, serif"
}}
>
Una familia que trabaja su tierra.
</h2>



<div
className="
mt-8
space-y-6
text-[#6B5840]
text-[clamp(1rem,1vw,1.1rem)]
leading-[1.9]
"
>

<p>
Hacienda Maria Jose nace del trabajo diario de nuestra familia
en Campo de la Cruz, Atlántico. No somos una producción industrial.
Cada litro de leche y cada queso representan el esfuerzo de quienes
vivimos y trabajamos la finca todos los días.
</p>


<p>
Creemos en hacer las cosas con calma, respetando los procesos y
ofreciendo alimentos frescos que conservan el sabor auténtico
del campo colombiano.
</p>


<p>
Gracias al respaldo del Fondo Emprender del SENA hemos fortalecido
nuestra producción para llevar nuestros productos a más hogares,
manteniendo siempre la esencia familiar que nos caracteriza.
</p>

</div>




<div
className="
mt-[clamp(40px,6vh,70px)]
border-t
border-black/10
pt-[clamp(28px,4vh,40px)]
"
>


<div
className="
flex
flex-wrap
gap-[clamp(28px,5vw,70px)]
"
>

{
[
{
value:"Campo de la Cruz",
label:"Atlántico"
},
{
value:"100% Familiar",
label:"Producción artesanal"
}
]
.map(item=>(

<div key={item.label}>

<h3
className="
text-[#1A1208]
text-[clamp(1.2rem,1.3vw,1.45rem)]
"
style={{
fontFamily:"Lora, serif"
}}
>
{item.value}
</h3>

<p
className="
mt-1
text-[#6B5840]
text-[clamp(.85rem,.9vw,.95rem)]
"
>
{item.label}
</p>

</div>

))
}

</div>




<div
className="
mt-[clamp(32px,4vh,46px)]
flex
flex-wrap
items-center
gap-4
"
>

<span className="text-sm text-[#6B5840]">
Con el apoyo de
</span>


<img
src={SENA}
alt="SENA"
className="
h-[clamp(24px,2vw,34px)]
opacity-65
"
/>


<div className="h-5 w-px bg-black/15"/>


<img
src={FONDO}
alt="Fondo Emprender"
className="
h-[clamp(24px,2vw,34px)]
opacity-65
"
/>


</div>


</div>


</motion.div>




{/* Pilares */}

<motion.div
initial={{
opacity:0,
y:35
}}
animate={
inView
? {
opacity:1,
y:0
}
:{}
}
transition={{
duration:.75,
delay:.15
}}
className="
divide-y
divide-black/10
"
>


{
pillars.map((pillar,index)=>(

<motion.div
key={pillar.title}
initial={{
opacity:0,
y:25
}}
animate={
inView
? {
opacity:1,
y:0
}
:{}
}
transition={{
duration:.6,
delay:.25+index*.12
}}
className="
py-[clamp(28px,4vh,48px)]
"
>


<div
className="
flex
items-start
gap-[clamp(18px,2vw,28px)]
"
>

<span
className="
text-[#B87C2A]
font-bold
text-[clamp(1.5rem,2vw,2rem)]
"
style={{
fontFamily:"Lora, serif"
}}
>
{
String(index+1).padStart(2,"0")
}
</span>



<div>

<h3
className="
mb-3
text-[#1A1208]
text-[clamp(1.2rem,1.5vw,1.6rem)]
"
style={{
fontFamily:"Lora, serif"
}}
>
{pillar.title}
</h3>


<p
className="
max-w-[52ch]
text-[#6B5840]
text-[clamp(.95rem,1vw,1.08rem)]
leading-[1.9]
"
>
{pillar.desc}
</p>


</div>

</div>


</motion.div>

))

}


</motion.div>


</div>

</Container>


</div>

</Section>

);

}