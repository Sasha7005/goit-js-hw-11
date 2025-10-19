import{a as m,S as d,i}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="52821628-dae3b3c31b624417cff84e51c";function g(s){return m("https://pixabay.com/api/",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>[])}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function L(s){const t=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:n,comments:f,downloads:p})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${a}" alt="${e}"/>
      <ul class="gallery-desc">
      <li class="gallery-info">
      <span class="info-names">Likes</span>
      <span class="info-item">${r}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Views</span>
      <span class="info-item">${n}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Comments</span>
      <span class="info-item">${f}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Downloads</span>
      <span class="info-item">${p}</span>
      </li>
      </ul>
      </a>
      </li>
        `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function S(){u.classList.remove("loader")}function l(){u.classList.add("loader")}const q=document.querySelector(".form");document.querySelector(".gallery");q.addEventListener("submit",w);function w(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),S(),g(t).then(a=>{if(l(),a.length===0)throw new Error("Invalid search query");L(a)}).catch(a=>{l(),i.error({message:"Sorry, there are no images matching your search query.Please try again!",position:"topRight"})})}
//# sourceMappingURL=index.js.map
