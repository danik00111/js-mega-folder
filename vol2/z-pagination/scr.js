const template =({imgsrc,name})=> `<li class="thing" style="background-image:url(${imgsrc})">
  <div class="thing-name" title="${
    name.replaceAll('&', '&amp;').replaceAll('"','&quot;')
  }">${name.replaceAll('&', '&amp;').replaceAll("<","&lt;").replaceAll(">","&gt;")}</div>
</li>`
const updateThingList =()=> {
  document.getElementById("thing-list").innerHTML = '';
  getThingsForPage().forEach(x=>{
    document.getElementById("thing-list").innerHTML += template(x);
  });
  document.querySelector(".active").classList.remove("active");
  document.getElementById("pagenum-"+currentPage).classList.add("active");
};
const things = [
  { name: "Thing", imgsrc: '../../vol1/a-dz/img/baby.jpg' },
  { name: "Nothing", imgsrc: '' },
  { name: "the q", imgsrc: '../../vol1/a-dz/img/ya.jpg' },
  { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate recusandae exercitationem placeat repudiandae ab explicabo magnam neque, sunt quaerat repellendus quam minus distinctio magni iure doloremque obcaecati voluptatibus ratione.", imgsrc: '../../vol1/a-dz/img/elder.jpg' },
  { name: "Everything", imgsrc: 'https://via.placeholder.com/69x420/000/000' },
  { name: "deez nuts", imgsrc: '../p-eas/img/deez-nuts.avif' },
]
const thingsperpage = 3;
const pages = Math.ceil(things.length / thingsperpage);
document.getElementById("page-numbers").innerHTML = Array(pages) // chaleng: make it not become a huge mess if theres like 10+ pages (very dificul)
  .fill('<div class="page-number" id="pagenum-{{i}}" onclick="goto({{i}})">{{i}}</div>')
  .map((x,i)=>x.replaceAll('{{i}}',i+1))
  .join('');
document.getElementById("pagenum-1").classList.add("active");
const getThingsForPage = () => things.slice((currentPage-1)*thingsperpage,((currentPage-1)*thingsperpage)+thingsperpage);
let currentPage = 1; updateThingList();
const prev =()=> { if(currentPage<=1) return; currentPage--; updateThingList() };
const goto =pg=> { if(pg<1 || pg>pages || Math.ceil(pg)!==pg) return; currentPage = pg; updateThingList() };
const next =()=> { if(currentPage>=pages) return; currentPage++; updateThingList() };