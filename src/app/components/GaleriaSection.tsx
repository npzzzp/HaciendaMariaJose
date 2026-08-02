import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

import {
  fetchMedia,
  type MediaItem,
  type Categoria,
} from "../../lib/supabase";

import { Container } from "@/components/layout/Container";



// ─────────────────────────────────────────
// Video Thumbnail
// ─────────────────────────────────────────

function VideoThumb({
  src,
  onClick,
}: {
  src:string;
  onClick:()=>void;
}) {

return (

<button
onClick={onClick}
className="
relative
w-full
h-full
group/play
focus:outline-none
"
aria-label="Reproducir video"
>


<video

src={src}

preload="none"

muted

playsInline

className="
w-full
h-full
object-cover
"

/>


<div
className="
absolute
inset-0
bg-black/30
transition-colors
group-hover/play:bg-black/45
"
/>



<div
className="
absolute
inset-0
flex
items-center
justify-center
"
>

<div
className="
w-14
h-14
rounded-full
bg-white/90
flex
items-center
justify-center
shadow-xl
transition-transform
group-hover/play:scale-110
"
>

<Play
size={22}
className="
text-[#1A1208]
ml-1
"
fill="#1A1208"
/>

</div>


</div>


</button>

);

}





// ─────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────

function Lightbox({

items,
index,
onClose,
onPrev,
onNext,

}:{

items:MediaItem[];
index:number;
onClose:()=>void;
onPrev:()=>void;
onNext:()=>void;

}) {


const item = items[index];



useEffect(()=>{


const handler = (e:KeyboardEvent)=>{


if(e.key==="Escape")
onClose();


if(e.key==="ArrowLeft")
onPrev();


if(e.key==="ArrowRight")
onNext();


};


window.addEventListener(
"keydown",
handler
);


return ()=>{

window.removeEventListener(
"keydown",
handler
);

};


},[
onClose,
onPrev,
onNext
]);





useEffect(()=>{

document.body.style.overflow="hidden";


return ()=>{

document.body.style.overflow="";

};


},[]);





return (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

transition={{
duration:.2
}}

className="
fixed
inset-0
z-50
bg-black/95
flex
items-center
justify-center
p-4
"

onClick={onClose}

>



<motion.div

initial={{
scale:.93
}}

animate={{
scale:1
}}

exit={{
scale:.93
}}

transition={{
duration:.2
}}

className="
relative
w-full
max-w-5xl
max-h-[90vh]
flex
flex-col
items-center
"

onClick={(e)=>e.stopPropagation()}

>


{
item.tipo==="video"

?

<video

key={item.url}

src={item.url}

controls

autoPlay

playsInline

className="
rounded-xl
w-full
max-h-[80vh]
object-contain
"

/>

:

<img

src={item.url}

alt={item.titulo ?? ""}

className="
rounded-xl
w-full
max-h-[80vh]
object-contain
"

/>

}




{
item.titulo && (

<p

className="
mt-3
text-white/70
text-sm
text-center
"

style={{
fontFamily:"Georgia, serif"
}}

>

{item.titulo}

</p>

)

}


</motion.div>





<button

onClick={onClose}

className="
absolute
top-4
right-4
w-10
h-10
rounded-full
bg-white/10
hover:bg-white/20
flex
items-center
justify-center
text-white
transition-colors
"

>

<X size={18}/>

</button>





{
items.length>1 && (

<>


<button

onClick={(e)=>{

e.stopPropagation();

onPrev();

}}

className="
absolute
left-3
top-1/2
-translate-y-1/2
w-10
h-10
rounded-full
bg-white/10
hover:bg-white/20
flex
items-center
justify-center
text-white
"

>

<ChevronLeft size={20}/>

</button>





<button

onClick={(e)=>{

e.stopPropagation();

onNext();

}}

className="
absolute
right-3
top-1/2
-translate-y-1/2
w-10
h-10
rounded-full
bg-white/10
hover:bg-white/20
flex
items-center
justify-center
text-white
"

>

<ChevronRight size={20}/>

</button>





<div

className="
absolute
bottom-4
left-1/2
-translate-x-1/2
flex
gap-1.5
"

>

{
items.map((_,i)=>(

<div

key={i}

className={`
rounded-full
transition-all

${
i===index
?
"bg-white w-4 h-1.5"
:
"bg-white/30 w-1.5 h-1.5"
}

`}

/>

))

}

</div>


</>

)

}



</motion.div>

);

}
// ─────────────────────────────────────────
// Grid Item
// ─────────────────────────────────────────

function GridItem({

item,
index,
inView,
onOpen,

}:{

item:MediaItem;
index:number;
inView:boolean;
onOpen:()=>void;

}) {


return (

<motion.div

initial={{
opacity:0,
y:16
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
duration:.45,
delay:(index % 12)*.04
}}

className="
relative
overflow-hidden
rounded-xl
bg-[#ede8d8]
group
"

style={{
aspectRatio:"4/3"
}}

>


{
item.tipo==="video"

?

<VideoThumb
src={item.url}
onClick={onOpen}
/>


:

<button

onClick={onOpen}

className="
w-full
h-full
focus:outline-none
"

>


<img

src={item.url}

alt={item.titulo ?? ""}

loading="lazy"

decoding="async"

className="
w-full
h-full
object-cover
transition-transform
duration-500
group-hover:scale-105
"

/>



<div

className="
absolute
inset-0
bg-black/0
transition-colors
duration-300
group-hover:bg-black/25
"

/>



{
item.titulo && (

<div

className="
absolute
bottom-0
left-0
right-0
p-3
bg-gradient-to-t
from-black/60
to-transparent
translate-y-2
opacity-0
transition-all
duration-300
group-hover:translate-y-0
group-hover:opacity-100
"

>


<p

className="
text-white
text-xs
text-left
"

style={{
fontFamily:"Georgia, serif"
}}

>

{item.titulo}

</p>


</div>

)

}



</button>

}



</motion.div>

);

}







// ─────────────────────────────────────────
// Section
// ─────────────────────────────────────────


interface GaleriaSectionProps {

categoria:Categoria;

titulo:string;

subtitulo:string;

numero:string;

}





export function GaleriaSection({

categoria,
titulo,
subtitulo,
numero

}:GaleriaSectionProps){



const ref = useRef<HTMLDivElement>(null);



const inView = useInView(ref,{

once:true,

margin:"-60px"

});




const [
items,
setItems
]=useState<MediaItem[]>([]);



const [
page,
setPage
]=useState(0);



const [
hasMore,
setHasMore
]=useState(true);



const [
loading,
setLoading
]=useState(false);



const [
initialLoaded,
setInitialLoaded
]=useState(false);



const [
error,
setError
]=useState<string|null>(null);



const [
lightbox,
setLightbox
]=useState<number|null>(null);







useEffect(()=>{

if(!inView || initialLoaded)
return;


load(0);


},[
inView
]);






const load = useCallback(
async(pageNum:number)=>{


setLoading(true);

setError(null);



try{


const {

items:newItems,

hasMore:more

}=await fetchMedia(
categoria,
pageNum
);



setItems(prev=>

pageNum===0

?

newItems

:

[
...prev,
...newItems
]

);



setHasMore(more);

setPage(pageNum);

setInitialLoaded(true);



}

catch{


setError(
"No se pudo cargar el contenido."
);


}

finally{


setLoading(false);


}



},
[
categoria
]
);






const loadMore = ()=>{

load(page+1);

};




const openLightbox = (index:number)=>{

setLightbox(index);

};




const closeLightbox = ()=>{

setLightbox(null);

};




const prev = ()=>{

setLightbox(
(i)=>

i!==null && i>0

?

i-1

:

items.length-1

);

};




const next = ()=>{


setLightbox(

(i)=>

i!==null && i<items.length-1

?

i+1

:

0

);


};







return (

<div
ref={ref}
>


<Container

className="
border-t
border-black/10
py-[clamp(64px,8vh,96px)]
"

>



{/* Header */}

<motion.div

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
:
{}
}

transition={{
duration:.65
}}

className="
flex
flex-col
gap-4
mb-[clamp(40px,6vh,56px)]
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

{numero}

</span>



<h2

className="
mt-2
text-[#1A1208]
text-[clamp(1.6rem,3.5vw,2.4rem)]
leading-[1.2]
"

style={{
fontFamily:"Georgia, serif"
}}

>

{titulo}

</h2>


</div>




<p

className="
max-w-xs
text-sm
text-[#6B5840]
leading-[1.7]
"

>

{subtitulo}

</p>


</motion.div>






{/* Loading */}

{
loading && items.length===0 && (

<div className="
flex
justify-center
py-16
">

<Loader2

size={32}

className="
animate-spin
text-[#B87C2A]
"

/>

</div>

)

}







{/* Error */}

{
error && (

<p

className="
py-12
text-center
text-sm
text-[#6B5840]
"

style={{
fontFamily:"Georgia, serif"
}}

>

{error}

</p>

)

}







{/* Empty */}

{

!loading &&
!error &&
initialLoaded &&
items.length===0 && (

<p

className="
py-12
text-center
italic
text-sm
text-[#6B5840]
"

style={{
fontFamily:"Georgia, serif"
}}

>

Próximamente contenido en esta sección.

</p>

)

}






{/* Grid */}

{

items.length>0 && (

<div

className="
grid
grid-cols-2
gap-3
md:grid-cols-3
md:gap-4
lg:grid-cols-4
"

>


{

items.map((item,i)=>(


<GridItem

key={item.id}

item={item}

index={i}

inView={inView}

onOpen={()=>openLightbox(i)}

/>


))


}


</div>

)

}






{/* Load more */}

{

hasMore &&
initialLoaded &&
items.length>0 && (


<div

className="
flex
justify-center
mt-10
"

>


<button

onClick={loadMore}

disabled={loading}

className="
rounded-full
border
border-[#1A1208]/20
px-8
py-3
text-sm
text-[#1A1208]
transition-all
hover:bg-[#1A1208]
hover:text-[#F6F1E8]
disabled:opacity-40
"

style={{
fontFamily:"Georgia, serif"
}}

>


{

loading

?

<span className="
flex
items-center
gap-2
">

<Loader2

size={14}

className="animate-spin"

/>

Cargando...

</span>


:

"Ver más"

}



</button>


</div>


)

}






</Container>






{/* Lightbox */}

<AnimatePresence>

{

lightbox!==null && (

<Lightbox

items={items}

index={lightbox}

onClose={closeLightbox}

onPrev={prev}

onNext={next}

/>

)

}

</AnimatePresence>





</div>

);

}