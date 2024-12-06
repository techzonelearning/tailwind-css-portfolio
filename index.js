let profile = document.getElementById("profile");
let show_info = document.getElementById("show-info");

async function fetchProfile() {
  let response = await fetch("https://api.github.com/users/digitalrehman");
  return await response.json();
}

fetchProfile().then((value) => {
  profile.innerHTML = `
                  <img src="${value.avatar_url}" class="rounded-full w-1/2 h-auto" alt="" />
                  <h1 class="mt-4 font-bold text-2xl text-white">${value.name}</h1>
                  <p class="text-md mt-2 text-gray-300 text-center">${value.bio}</p>
          `;
});

fetchProfile().then((value) => {
  show_info.innerHTML = `
                 
              <p class="text-md text-center text-white mt-4 font-medium">${value.bio}</p>
              <p class="text-md text-center text-white mb-4 font-medium">
                Made by rehman arain
              </p>
        `;
});

var typed = new Typed("#typewriter", {
  strings: [
    "I'm full stack web developer",
    "I'm App developer",
    "I'm UI designer",
    "I'm freelancer",
  ],
  typeSpeed: 70,
  loop: true,
});

let about_card = document.getElementById("about-card");
let card = [
  {
    icon: "fa-regular fa-lightbulb",
    title: "Graphic Design",
    color: "border-b border-red-500",
  },
  {
    icon: "fa-regular fa-lightbulb",
    title: "Web Design",
    color: "border-b border-blue-500",
  },
  {
    icon: "fa-regular fa-lightbulb",
    title: "Software",
    color: "border-b border-green-500",
  },
  {
    icon: "fa-solid fa-mobile",
    title: "Application",
    color: "border-b border-yellow-500",
  },
];

card.map((item) => {
  about_card.innerHTML += `
                 <div class="custom-card h-40 w-40 flex flex-col gap-5 px-3 py-7 ${item.color}">
                    <i class="${item.icon} text-4xl"></i>
                    <h1>${item.title}</h1>
                </div>
    `;
});

let skill_card = document.getElementById("skill-card");
let skill = [
  {
    title: "HTML5",
    color: "bg-red-600",
    per: 85,
  },
  {
    title: "CSS3",
    color: "bg-blue-400",
    per: 90,
  },
  {
    title: "JavaScript",
    color: "bg-yellow-600",
    per: 93,
  },
  {
    title: "ReactJS",
    color: "bg-blue-600",
    per: 85,
  },
  {
    title: "NodeJS",
    color: "bg-green-600",
    per: 80,
  },
  {
    title: "Tailwind CSS",
    color: "bg-blue-900",
    per: 60,
  },
  {
    title: "Git",
    color: "bg-purple-600",
    per: 55,
  },
];

skill.map((value) => {
  skill_card.innerHTML += `
   <div class="flex flex-col gap-4 md:w-[45%] w-full">
              <p class="">${value.title}</p>
              <div class="w-full rounded-md bg-gray-100 h-[5px]">
                <div class="w-[${value.per}%] ${value.color} rounded-md h-[5px]"></div>
              </div>
            </div>
  `;
});

let user_experience = document.getElementById("experience");
let experience = [
  {
    title: "Full Stack Developer",
    duration: "May 2022 - Present",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    title: "Front End Developer at Google Company",
    duration: "February 2021 - May 2022",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    title: "Software Developer at ABC Company",
    duration: "January 2020 - February 2021",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
];

experience.map((value) => {
  user_experience.innerHTML += `
    <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 class="text-xl font-semibold tracking-wide">${value.title}</h3>
                      <time class="text-xs tracking-wide uppercase dark:text-gray-600">${value.duration}</time>
                      <p class="mt-3">${value.description}</p>
                    </div>
  `;
});

let menu = document.getElementById("menu");
let menu_bar = document.getElementById("menu-bar");
let menu_bar_icon = document.getElementById("menu-bar-icon");

menu_bar.addEventListener("click", () => {
  if (menu.classList.contains("right-full")) {
    menu.classList.add("right-0");
    menu.classList.remove("right-full");
    menu_bar_icon.classList.add("fa-xmark");
    menu_bar_icon.classList.remove("fa-bars");
  } else {
    menu.classList.remove("right-0");
    menu.classList.add("right-full");
    menu_bar_icon.classList.add("fa-bars");
    menu_bar_icon.classList.remove("fa-xmark");
  }
});
