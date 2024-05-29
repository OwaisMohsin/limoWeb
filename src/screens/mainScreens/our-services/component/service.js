import React from "react";

function Service({ title, description, image }) {
  return (
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full"
          src={image}
        />
      </div>
      <h2 class="text-xl font-medium title-font text-primary-gold mt-5">
        {title}
      </h2>
      <p class="text-base text-white leading-relaxed mt-2">{description}</p>
    </div>
  );
}

export default Service;
