function postit(header,priority){

    post = Object();

    post.name = header,
    post.labels = [],
    post.priority = priority,
    post.addLabel = function (label){
    
        post.labels.push(label);
    }

    return post;

}


function swimlane(name,meta) {
    
    
    lane = Object();
    
    lane.name = name,
    lane.children = []
    
    lane.addChild = function(postit) {
        children.push(postit);
    }
    
    return lane
}

var board =  {

    title: "My Kamban Board.",
    swimlanes: [
    
       
        
    ],
    
    addSwimlane: function(swimlane){
        this.swimlanes.push(swimlane);
    },
    
    renameBoard: function(newname){
        this.title = newname
    }
}



console.log(board);
console.log("boardCreated");
console.log("changing name of board");

board.renameBoard("New Name");
console.log(board);

console.log("constructing lane")
var lane = swimlane("ToDo");

console.log(lane);

console.log("adding to board");
board.addSwimlane(lane);
console.log(board);


function renderItem(item,type,parent){
    
    switch (t) { 
        
        case "postit":
            "<div class=\"postit\"><h1>{0}</h1> {1}"
            
            
        case "swimlane":
        
        
    }
    
}



var swimlaneCount = 0;

var addSwimlane = document.getElementById("AddSwimlane")

addSwimlane.addEventListener("click", function(e) {
    
    


    console.log("getting swimlane");
    var swimlane = document.getElementById("hidden");
    var clone = swimlane.cloneNode(true);
    
    swimlaneCount = swimlaneCount + 1
    clone.id = swimlaneCount 
    clone.className = "swimlane"
    
    var container = document.getElementById("container")
    
    
    container.appendChild(clone);
    
    var headerValue = document.getElementById("SwimLaneName").value
    
    document.getElementById(swimlaneCount).innerHTML = headerValue
    
    
    
    
    
})
 
