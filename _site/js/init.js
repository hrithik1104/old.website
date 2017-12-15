(function($) {
    $(function() {

        $('.collapsible').collapsible({ expandable: true });
        $('.button-collapse').sideNav();
        $('#wlmodal').modal();
        $(document).ready(function(){
            $('.scrollspy').scrollSpy();
        });


        $('#sbmt').submit(function(e) {
            $('#wlmodal').removeClass( 'disnone' ).addClass( 'disblock' );
            e.preventDefault();
            $.ajax({
                url: 'https://apimail.ahoolee.io/api/subscribe',
                type: 'post',
                data: $('#sbmt').serialize()
            });
        });
        $('#whitelist').submit(function(e) {
            $('#whitelist input[name=email]').val($('#sbmt input[name=email]').val());
            e.preventDefault();
            $.ajax({
                url: 'https://apimail.ahoolee.io/api/invest',
                type: 'post',
                data: $('#whitelist').serialize(),
                success: function(){
                    $('#wlmodal').removeClass( 'disblock' ).addClass( 'disnone' );
                    Materialize.toast('<div class="button"><img src="img/details/a_medium.svg" class="angle left top">SACSES<img src="img/details/a_medium.svg" class="angle right bottom"></div>', 2000);
                }
            });
        });

        $('#wlmodalclose').on('click', function() {
            $('#wlmodal').removeClass( 'disblock' ).addClass( 'disnone' );
        })

        $('#calltoaction').on('click', function() {
            $('#calltoaction').addClass( 'disnone' );
        })

    });
})(jQuery);