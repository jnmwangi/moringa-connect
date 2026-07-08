export function feedUIComponent(feed){
    return `<div class="feed rounded-lg shadow max-w-md bg-white" id="${feed.id}">
      <div class="flex items-center px-3 py-2 gap-3">
        <i class="bi bi-person-circle text-4xl"></i>
        <div>
          <span>${feed.user.name}</span><br />
          <small class="text-sm">${feed.user.tag}</small>
        </div>
      </div>
      <p class="p-2">${feed.content}</p>
      <img src="${feed.image}" class="width-full">
      <div class="p-2 flex gap-5 justify-content items-center border-t border-gray-300">
        <button data-feedid="${feed.id}" class="like-button" class="hover:bg-blue-600 hover:text-white">
          <i class="bi bi-hand-thumbs-up"></i> 
          <span class="num-likes">${feed.likes}</span>
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
    </div>`
};