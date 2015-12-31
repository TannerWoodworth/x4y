window.onload = function(){
    startup();
    nouns();
};
function startup() {
        var xlist = ["Uber", "Snapchat", "Facebook", "Tinder", "Venmo", "Airbnb", "Twitter", "Netflix", "Dropbox", "Dribble", "Buzzfeed", "Github", "Vine", "Periscope", "Instagram", "Foursquare", "Medium", "Wikipedia", "Youtube", "Yelp", "Comcast"];
        var rand = xlist[Math.floor(Math.random() * xlist.length)];
        document.getElementsByClassName("x")[0].innerHTML = rand;
    }
    
    function nouns() {
        var ylist = ["Shoes", "Toilet Paper", "Churches", "Soup Kitchens", "Chairs", "Coffee", "Road maps", "Porta potties", "Baseball bats", "Trumpets", "Second-hand clothing", "Turtlenecks", "Gas Stations", "Public schools", "Elementary schools", "Tissues", "Tractors", "Doughnuts", "Exit signs", "Stop signs", "Storage facilities", "Chapstick", "Headphones", "Mechanical Keyboards", "Combs", "Bookbags", "Wi-Fi hotspots", "Laundromats", "Sketchy ethnic resturants", "dictionaries", "Cell phones", "Laptops", "Nursing homes", "Insurance agencies", "Small businesses", "Skateboards", "Display racks", "Fire alarms", "Televisions","Nuns", "Truck Drivers", "Farmers", "Babies", "Lava Lamps"];
        var rand = ylist[Math.floor(Math.random() * ylist.length)];
        document.getElementsByClassName("y")[0].innerHTML = rand;
    }