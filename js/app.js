/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//Query all the sections in the webpage into this const
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function create_navigation_bar() {
    const navigation_bar = document.getElementById("navbar__list");
    //loops over each element of the querySelector and creates a new li element with an href to section position
    sections.forEach(element => {navigation_bar.insertAdjacentHTML("beforeend",`<li><a class='menu__link' id = Link${element.id}  href='#${element.id}'>${element.dataset.nav}</a></li>`)    
    });

    }


function check_active_section() {
    for (let i = 0 ; i < sections.length ; i++){
        // get the bounds
        let section_bounds = sections[i].getBoundingClientRect()
        //check if bounds are in range
        if(section_bounds.top <= 160 && section_bounds.top >= -430) {
            //section is now within bounds
            //section must be declared active
            sections[i].classList.add('your-active-class');
            //now we will change the highlighted section in menu to match with the section itself
            let active_section = document.getElementById(`Link${sections[i].id}`);
            active_section.classList.replace('menu__link', 'active__link');
        //Remove the your-active-class class from the old class
        }else if (sections[i].classList.contains('your-active-class')) {
            sections[i].classList.remove('your-active-class');
            //now we will delete the highlighte from the old section in menu to match with the section itself
            let active_section = document.getElementById(`Link${sections[i].id}`);
            active_section.classList.replace('active__link', 'menu__link');
        }
    }
}






/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the navigation bar
create_navigation_bar()
// add a listener to run the function check_active_section when the page is scrolled to check which section to be the active section
document.addEventListener('scroll', check_active_section);

//Adding a lisster to all sections in menu that react on click
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        //applying the smooth effect
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    });
});


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


