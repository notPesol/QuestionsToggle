const btns = document.querySelectorAll('.open-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question = this.parentElement.parentElement;
        const answer = question.children[1];
        answer.classList.add('show-answer');
        this.classList.add('hide-btn');

        const closeBtn = question.querySelector('.close-btn');
        closeBtn.classList.add('show-btn');
        closeBtn.addEventListener('click', function(e){
            this.classList.remove('show-btn');
            answer.classList.remove('show-answer');
            btn.classList.remove('hide-btn');
        })
    })
})