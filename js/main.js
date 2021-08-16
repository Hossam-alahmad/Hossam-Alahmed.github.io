window.onload = function(){  
    var navbar          = document.getElementById("navbar"),
        old_top         = 0,
        new_top         = 0,
        home_btn        = document.getElementById("home"),
        about_btn       = document.getElementById("about"),
        skills_btn      = document.getElementById("skills"),
        services_btn    = document.getElementById("services"),
        portfolio_btn   = document.getElementById("portfolio"),
        switch_btn      = document.getElementById("switch"),
        scroll_down     = document.getElementById("scroll-down"),
        menu_bar        = document.getElementById("menu-bar"),
        menu_list       = document.getElementById("menu-list"),
        front           = document.getElementById("front"),
        ui              = document.getElementById("ui"),
        backend         = document.getElementById("backend"),
        front_box       = document.getElementById("front-box"),
        ui_box          = document.getElementById("ui-box"),
        backend_box     = document.getElementById("backend-box");

    window.onscroll = function(){
        new_top = document.documentElement.scrollTop;
        if(document.documentElement.scrollTop > 65){
            navbar.classList.add("fixed-navbar");
            navbar.classList.remove("show-navbar");
            menu_list.classList.add("scroll-up");
            
        }
        else if(document.documentElement.scrollTop < 65){
            navbar.classList.remove("fixed-navbar");
            navbar.classList.remove("show-navbar");
        }
        if(old_top > new_top){
            navbar.classList.add("show-navbar");
            menu_list.classList.remove("scroll-up");
        }
        old_top = new_top;
        if(document.documentElement.scrollTop < 300){
            home_btn.classList.add("active");
            about_btn.classList.remove("active"); 
            skills_btn.classList.remove("active"); 
            services_btn.classList.remove("active"); 
            portfolio_btn.classList.remove("active"); 
        }
        else if(document.documentElement.scrollTop >= 530 && document.documentElement.scrollTop < 800){
            home_btn.classList.remove("active");
            about_btn.classList.add("active"); 
            skills_btn.classList.remove("active"); 
            services_btn.classList.remove("active"); 
            portfolio_btn.classList.remove("active"); 
        }
        else if(document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop < 1072){
            home_btn.classList.remove("active");
            about_btn.classList.remove("active"); 
            skills_btn.classList.add("active"); 
            services_btn.classList.remove("active"); 
            portfolio_btn.classList.remove("active"); 
        }
        else if(document.documentElement.scrollTop >= 1172 && document.documentElement.scrollTop < 1420){
            home_btn.classList.remove("active");
            about_btn.classList.remove("active"); 
            skills_btn.classList.remove("active"); 
            services_btn.classList.add("active"); 
            portfolio_btn.classList.remove("active"); 
        }
        else if(document.documentElement.scrollTop >= 1620){
            home_btn.classList.remove("active");
            about_btn.classList.remove("active"); 
            skills_btn.classList.remove("active"); 
            services_btn.classList.remove("active"); 
            portfolio_btn.classList.add("active"); 
        }
    }
    home_btn.onclick = function(){
        
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 0){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 0){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
    }
    about_btn.onclick = function(){
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 530){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 530){
                        clearInterval(interval);
                    }
                }, 15);
            }
            else{
                var interval = setInterval(() => {
                    i+= 50;
                    document.documentElement.scrollTop = i;
                    if(i >= 540){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
        
    }
    skills_btn.onclick = function(){
        
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 1000){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 1000){
                        clearInterval(interval);
                    }
                }, 15);
            }
            else{
                var interval = setInterval(() => {
                    i+= 50;
                    document.documentElement.scrollTop = i;
                    if(i >= 1000){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
    }
    services_btn.onclick = function(){
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 1172){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 1172){
                        clearInterval(interval);
                    }
                }, 15);
            }
            else{
                var interval = setInterval(() => {
                    i+= 50;
                    document.documentElement.scrollTop = i;
                    if(i >= 1172){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
    }
    portfolio_btn.onclick = function(){
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 1620){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 1620){
                        clearInterval(interval);
                    }
                }, 15);
            }
            else{
                var interval = setInterval(() => {
                    i+= 50;
                    document.documentElement.scrollTop = i;
                    if(i >= 1620){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
    }
    switch_btn.onclick = function () {  
        if(switch_btn.firstElementChild.classList.contains("fa-sun-o")){
            switch_btn.firstElementChild.classList.remove("fa-sun-o");
            switch_btn.firstElementChild.classList.add("fa-moon-o");
            switch_btn.firstElementChild.classList.add("left-side");
            document.head.lastElementChild.setAttribute("href","css/dark.css");
        }
        else{
            switch_btn.firstElementChild.classList.add("fa-sun-o");
            switch_btn.firstElementChild.classList.remove("fa-moon-o");
            switch_btn.firstElementChild.classList.remove("left-side");
            document.head.lastElementChild.setAttribute("href","css/light.css");
        }
    }
    menu_bar.onclick = function(){
        menu_bar.firstElementChild.classList.toggle("fa-bars");
        menu_bar.firstElementChild.classList.toggle("fa-times");
        menu_list.classList.toggle("show-menulist");
    }
    scroll_down.onclick = function () {
        var i = document.documentElement.scrollTop;
        setTimeout(() => {
            if(i > 530){
                var interval = setInterval(() => {
                    i-= 50;
                    document.documentElement.scrollTop = i;
                    if(i <= 530){
                        clearInterval(interval);
                    }
                }, 15);
            }
            else{
                var interval = setInterval(() => {
                    i+= 50;
                    document.documentElement.scrollTop = i;
                    if(i >= 540){
                        clearInterval(interval);
                    }
                }, 15);
            }
        }, 1000);
        return false;
    }
    front.onclick = function(){
        front.firstElementChild.classList.toggle("down");
        front_box.classList.toggle("show-skills");
    }
    ui.onclick = function(){
        ui.firstElementChild.classList.toggle("down");
        ui_box.classList.toggle("show-skills");
    }
    backend.onclick = function(){
        backend.firstElementChild.classList.toggle("down");
        backend_box.classList.toggle("show-skills");
    }


};