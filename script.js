// Search form validation
document.getElementById('searchForm').addEventListener('submit', function (e) {
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const budget = document.getElementById('budget').value;

    if (!destination || !date || !budget) {
        alert("Please fill in all fields.");
        e.preventDefault();
    }
});



// menu section
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');

});

window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
        sidebar.classList.remove('active')

    }
})


closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});


var moons = document.getElementById("moon");
moons.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        moons.className = "ri-sun-fill"

    } else {
        moons.className = "ri-moon-fill"
    }

})
var chand = document.getElementById("moons");
chand.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        chand.className = "ri-sun-fill"

    } else {
        chand.className = "ri-moon-fill"
    }

})

const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

