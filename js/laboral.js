(function(){
    const titlelaboral = [...document.querySelectorAll('.laboral__title')];
    console.log(titlelaboral)

    titlelaboral.forEach(laboral =>{
        laboral.addEventListener('click', ()=>{
            let height = 0;
            let answer = laboral.nextElementSibling;
            let addPadding = laboral.parentElement.parentElement;

            addPadding.classList.toggle('laboral__padding--add');
            laboral.children[0].classList.toggle('laboral__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();