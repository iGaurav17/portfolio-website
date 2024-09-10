const skills = [
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "REST API",
            "icon": "https://img.icons8.com/plasticine/48/api-settings.png"
    },

    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "XML",
        "icon": "https://img.icons8.com/external-bearicons-blue-bearicons/48/external-XML-file-extension-bearicons-blue-bearicons.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },    
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    
    {
        "name": "PostgreSQL",
        "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"
    },
    {
        "name": "AWS",
        "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png"
    },
    
    {
        "name": "Netlify",
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
   
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },   
];

const projects =[
    {
      "name": "HireHub Connect",
      "desc": "The project is made using MERN stack for seamless efficient development.",
      "image": "hirehub",
      "category": "Java Full Stack",
      "links": {
        "view": "https://job-portal-omega-jade.vercel.app/",
        "code": "https://github.com/iGaurav17/JobPortal"
      }
    },
    {
      "name": "Mailify",
      "desc": "This website is for sending multiple emails to any number of receivers, with unique mail body, The project uses python and HTML",
      "image": "mailify",
      "category": "Website devopment",
      "links": {
        "view": "https://github.com/iGaurav17/Mailify",
        "code": "https://github.com/iGaurav17/Mailify"
      }
    },
  
    {
      "name": "Book Mark products app",
      "desc": "It's a software that lets users to bookmark their favourite books and keep a track of the books that they have read.",
      "image": "bookmark",
      "category": "mern",
      "links": {
        "view": "https://github.com/iGaurav17/bookmarked-products-app",
        "code": "https://github.com/iGaurav17/bookmarked-products-app"
      }
    },
    {
      "name": "Ecommerce Website",
      "desc": "Developed E-Commerce website enabling efficient product management. Used HTML, CSS and javascript for developing interactive web application",
      "image": "ecommerceweb",
      "category": "basicweb",
      "links": {
        "view": "https://6432b4d52e231e19afc8c56a--profound-druid-965152.netlify.app/",
        "code": "https://github.com/GAURAV6871/ecommerce"
      }
    },
  
    {
      "name": "Strive Gaming",
      "desc": "It's an web app which provides the users with different games on the same portal. Used MERN stack for creating a seamless website",
      "image": "strive",
      "category": "website",
      "links": {
        "view": "https://strive-frontend-new.vercel.app/",
        "code": "https://strive-frontend-new.vercel.app/"
      }
    },
        
  
    {
      "name": "Portfolio Website",
      "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
      "image": "portfolio",
      "category": "basicweb",
      "links": {
        "view": "#",
        "code": "#"
      }
    },
];  


$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $(document).ready(function () {
        emailjs.init("sWP8GFTxctR4UPrUH");
    
        $("#contact-form").submit(function (event) {
            event.preventDefault(); // Prevent default form submission
    
            emailjs.sendForm('service_884bc2c', 'template_myj28f1', '#contact-form')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById("contact-form").reset();
                    alert("Form Submitted Successfully");
                })
                .catch(function (error) {
                    console.error('FAILED...', error);
                    alert("Form Submission Failed! Try Again");
                });
        });
    });
    
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Khushi Kumari";
            $("#favicon").attr("href", "assets/images/cartooncircle.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "Software development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// async function fetchData(type = "skills") {
//     let response
//     type === "skills" ?
//         response = await fetch("./skills.json")
//         :
//         response = await fetch("./projects/projects.json")
//     const data = await response.json();
//     return data;
// }

showSkills(skills);

function showSkills() {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}


    showProjects(projects);


// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });