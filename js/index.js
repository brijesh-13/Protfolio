


$(document).on('click', '.menu-item', function(){
    $('.header-view').children('.open').show(1000);
    $('.header-view').children('.close').hide(1000);
    $('.header > .btn-con').hide(1000);
    $('.header-view').attr('status', 'close');

    const type = $(this).attr("type");
    if(type == "intro"){
        window.location.href = "#about-me";
    }else if(type == "experience"){
        window.location.href = "#experience";
    }if(type == "contact"){
        window.location.href = "#contact";
    }
})

$(document).on('click', '.btn.resume', function(){
    $('.header-view').children('.open').show(1000);
    $('.header-view').children('.close').hide(1000);
    $('.header > .btn-con').hide(1000);
    $('.header-view').attr('status', 'close');
    
    window.location.href = "document/resume.pdf";
})
$(document).on('click', '.experience-view-resume', function(){
    window.location.href = "document/resume.pdf";
})

$(document).on('click', '.intro-learn-more', function(){
    window.location.href = "#about-me";
})

$(document).on('click', '.btn-contact-me', function(){
    window.location.href = "mailto:patelbrijeshkumar1998@gmail.com";
})


$(document).on('click', '.social-list-item', function(){
    const type = $(this).attr("type");
    if(type == "git"){
        window.location.href = "https://github.com/brijesh-13";
    }else if(type == "linkedin"){
        window.location.href = "http://www.linkedin.com/in/brijeshkumarpatel98";
    }if(type == "email"){
        window.location.href = "mailto:patelbrijeshkumar1998@gmail.com";
    }
})



$(document).on('click', '.header-view', function(){
    const status = $(this).attr("status");
    if(status == 'close'){
        $(this).children('.open').hide(1000);
        $(this).children('.close').show(1000);
        $('.header > .btn-con').show(1000);
        $(this).attr('status', 'open');

    }else if(status == 'open'){
        $(this).children('.open').show(1000);
        $(this).children('.close').hide(1000);
        $('.header > .btn-con').hide(1000);
        $(this).attr('status', 'close');
    }
})