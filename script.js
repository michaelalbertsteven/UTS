// hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick =() =>{
    navbarNav.classList.toggle('active');
    }

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
        }
    }
)
// hamburger menu

//form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGa-2CjVoijlWlmgHkmZf8IHyYC_LeftcVMiqoEmEUSHkLOSYnwkgpr_8ZbePXZ6S-/exec';
        const form = document.forms['IoT-DataBase'];

        form.addEventListener('submit', e => {
        e.preventDefault();
        // ketiika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                // reset form
                form.reset();
                console.log('Success!', response);
            })
            .catch(error => console.error('Error!', error.message));
        })
//form