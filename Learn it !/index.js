var checked= false
function getValue () {
    
    if(checked) {
        //--------------- navbar ----------------
        $(".theme-switch").text("Dark Mode")
        $(".navbar").addClass("bg-dark").addClass("navbar-dark")
        $(".search-btn").addClass("btn-outline-success").removeClass("btn-outline-warning")
        //------------- Body-Content--------
        $("#body").css("backgroundColor","rgb(7,7,7)")
        $(".item-container").addClass("text-white")
        $(".item-div").addClass("bg-dark").removeClass("bg-light")
        $(".carousel-control-prev-icon").removeClass("bg-dark")
        $(".carousel-control-next-icon").removeClass("bg-dark")
        //--------------- Body-Sidebar---------
        $(".submit-btn").addClass("btn-success").removeClass("btn-warning")
        $(".card-header").addClass("bg-secondary")
        $(".list-group-header").addClass("bg-secondary")
        //-------------- Items --------------
        checked = false
    } else {
        //--------------- navbar ----------------
        $(".theme-switch").text("Light Mode")
        $(".navbar").removeClass("bg-dark").css("backgroundColor","#0A1931")
        $(".search-btn").removeClass("btn-outline-success").addClass("btn-outline-warning")
        //------------- Body-Content--------
        $("#body").css("backgroundColor","#EFEFEF")
        $(".item-container").removeClass("text-white")
        $(".item-div").removeClass("bg-dark").addClass("bg-light")
        $(".carousel-control-prev-icon").addClass("bg-dark")
        $(".carousel-control-next-icon").addClass("bg-dark")
        //--------------- Body-Sidebar---------
        $(".submit-btn").removeClass("btn-success").addClass("btn-warning")
        $(".card-header").removeClass("bg-secondary").css("backgroundColor","#185ADB")
        $(".list-group-header").removeClass("bg-secondary").css("backgroundColor","#185ADB")
        //-------------- Items --------------
        checked=true
    }
}





