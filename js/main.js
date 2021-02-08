$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 6,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            //>=320
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 6,
            },
        },
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('#review-1').on('click', function () {
        $.fancybox.open(
            [
                {
                    src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
                    opts: {
                        caption: 'First caption',
                        thumb:
                            'https://source.unsplash.com/IvfoDk30JnI/240x160',
                    },
                },
                {
                    src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
                    opts: {
                        caption: 'Second caption',
                        thumb:
                            'https://source.unsplash.com/0JYgd2QuMfw/240x160',
                    },
                },
            ],
            {
                loop: true,
                thumbs: {
                    autoStart: true,
                },
            }
        );
    });
    $('.counter-group').on('click', function (e) {
        const index = e.currentTarget.dataset.index;
        const input = document.querySelectorAll('.counter-input')[index];
        if (e.target.textContent === '-') {
            if (input.value === '1') return;
            input.value -= 1;
        } else {
            input.value = +input.value + 1;
        }
    });
    $('.more').on('click', function (e) {
        e.preventDefault();
        const cards = document.querySelectorAll('.card.hiden');
        for (let card of cards) {
            card.classList.remove('hiden');
        }
        e.target.classList.add('hiden');
        document.querySelector('.less.hiden').classList.remove('hiden');
    });
    $('.less').on('click', function (e) {
        e.preventDefault();
        const cards = document.querySelectorAll('.card');
        console.log('cards', cards);
        for (let i = 8; i < cards.length; i++) {
            cards[i].classList.add('hiden');
            cards[i].childNodes[11].childNodes[3].value = 1;
        }
        e.target.classList.add('hiden');
        document.querySelector('.more.hiden').classList.remove('hiden');
    });
});
