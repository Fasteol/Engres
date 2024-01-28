<template>
  <div class="navbar bg-[#131313]">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] font-poppins p-2 shadow bg-white rounded-box w-52"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Project</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>
      <a class="text-xl lg:mx-4 font-poppins font-semibold text-white"
        ><span class="text-[#7456FF]">Razan</span><span>Mfs</span></a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-white mx-10 font-poppins">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Project</a></li>
        <li><a>Blog</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button
        class="font-poppins text-sm border-[#7456FF] border-solid border text-[#7456FF] px-2 py-2 rounded-md lg:mx-2"
      >
        Contact Me
      </button>
    </div>
  </div>
</template>
