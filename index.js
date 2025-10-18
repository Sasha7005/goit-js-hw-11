import{a as f,S as u,i as o}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="52821628-dae3b3c31b624417cff84e51c";function m(s){return f("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>[])}const y=document.querySelector(".gallery"),g=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function d(s){const t=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:n,comments:l,downloads:c})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${i}">
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
      <span class="info-item">${l}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Downloads</span>
      <span class="info-item">${c}</span>
      </li>
      </ul>
      </a>
      </li>
        `).join("");y.insertAdjacentHTML("beforeend",t),g.refresh()}const h=document.querySelector(".form"),b=document.querySelector(".gallery");h.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){o.warning({message:"Please enter a search term!",position:"topRight"});return}b.innerHTML="",m(t).then(a=>{if(a.length===0)throw new Error("Invalid search query");d(a)}).catch(a=>{o.error({message:"Sorry, there are no images matching your search query.Please try again!",position:"topRight"})})}
//# sourceMappingURL=index.js.map
