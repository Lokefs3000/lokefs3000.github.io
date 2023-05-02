function transtion(page) {
    document.getElementById("transition").classList.remove("transition_swipe_off")
    document.getElementById("transition").classList.add("transition_swipe_on")

    setTimeout(function() {
        document.location = page
    }, 400)
}