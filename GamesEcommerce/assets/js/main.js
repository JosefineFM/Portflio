/* -------------------------------------------------------------------------- */
/*                                  MENU SHOW                                 */
/* -------------------------------------------------------------------------- */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            document.getElementById('nav-menu').style.width = "100%";
        })
    }
}

showMenu('nav-toggle', 'nav-menu')