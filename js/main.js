(() => {
    //init the vue stuff!
    const vm = new Vue({
        el : "#app", //vue will target everything in this entire id automatically

        data : { //all of the ID's we want Vue to target
            landingPageTagline : "Some legends are real.", //the message on the page
            landingPageTitle : "AUDI R8 COUPE", //the message on the page
            landingPageText : "While many cars like to claim racing heritage, the R8 Coupe is a true thoroughbred. Sharing 50% of its parts with R8 GT3 LMS race car, this car is born on the track and built for the road.", //the message on the page
        },

    });
})();