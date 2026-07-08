(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,content:`This is my first auto mobile, the black mamber`,image:`bicyle.jpg`,likes:300,user:{name:`njmwas`,tag:`CEO Skillful Technologies`},comments:[{user:`commeter 1`,message:`sdfsdfsdfsdf`},{user:`commeter 1`,message:`sdfsdfsdfsdf`}]},{id:2,content:`This was a great shot from our player`,image:`worldcup.jpg`,likes:1e3,user:`barclay`,comments:[{user:`commeter 1`,message:`sdfsdfsdfsdf`},{user:`commeter 1`,message:`sdfsdfsdfsdf`}]},{id:3,content:`The day maradona retired and messi took it up`,image:`footbal.jpg`,likes:500,user:`Telvin`,comments:[{user:`commeter 1`,message:`sdfsdfsdfsdf`},{user:`commeter 1`,message:`sdfsdfsdfsdf`}]}];function t(e){return`<div class="feed rounded-lg shadow max-w-md bg-white" id="${e.id}">
      <div class="flex items-center px-3 py-2 gap-3">
        <i class="bi bi-person-circle text-4xl"></i>
        <div>
          <span>${e.user.name}</span><br />
          <small class="text-sm">${e.user.tag}</small>
        </div>
      </div>
      <p class="p-2">${e.content}</p>
      <img src="${e.image}" class="width-full">
      <div class="p-2 flex gap-5 justify-content items-center border-t border-gray-300">
        <button data-feedid="${e.id}" class="like-button" class="hover:bg-blue-600 hover:text-white">
          <i class="bi bi-hand-thumbs-up"></i> 
          <span class="num-likes">${e.likes}</span>
        </button>
        <button class="hover:bg-gray-300">
          <i class="bi bi-chat-right-text"></i> 4k</button>
      </div>
      <div class="comments px-3 flex flex-col gap-3 mb-3">
        <div class="py-1 flex gap-3 text-sm">
          <i class="bi bi-person-circle text-3xl"></i>
          <div>
            <strong>Commenter Username</strong>
            <p>This is very touching, it must have been very expensive</p>
          </div>
        </div>

        <div class="py-1 flex gap-3 text-sm">
          <i class="bi bi-person-circle text-3xl"></i>
          <div>
            <strong>Commenter 2</strong>
            <p>How many millage does it have, are you selling</p>
          </div>
        </div>

      </div>
    </div>`}var n=document.querySelector(`main`);n.innerHTML=e.map(t).join(``),document.querySelectorAll(`.like-button`).forEach(t=>{t.addEventListener(`click`,n=>{let r=Number(t.getAttribute(`data-feedid`)),i=e.find(e=>e.id===r);i.likes+=1,t.querySelector(`.num-likes`).textContent=i.likes})});