$(document).ready(() => {
    $(document).on('change', '#select-progress', function(e) {
        e.preventDefault;
        const item = $(this);

        $.ajax({
            url: window.location,
            data: {
                id: item.val()
            },
            dataType: 'html',
            success: function(response) {
                var html = $(response).find('#slider-progress').html();
                $('#slider-progress').html(html);
                window.sliderProgress.update();
                window.sliderProgress.slideTo(0);
            }
        });
    });

    new Swiper('.js-video-main', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: $('.section__navigation').find(`button[data-direction="prev"]`)[0],
            nextEl: $('.section__navigation').find(`button[data-direction="next"]`)[0]
        }
    });
});