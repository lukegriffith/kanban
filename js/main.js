function postit(header,priority){

    post = Object();

    post.type = "postit"

    post.header = header,
    post.labels = [],
    post.priority = priority,
    post.addLabel = function (label){
    
        post.labels.push(label);
    }

    return post;

}


function swimlane(name,meta) {
    
    
    lane = Object();
    
    lane.type = "swimlane"
    
    lane.name = name,
    lane.children = []
    
    lane.addChild = function(postit) {
        lane.children.push(postit);
    }
    
    return lane
}



function renderBoard(board){ 
    
    var container;
    var header;
    var swimlane;
    var i;
    
    container = document.getElementById("container")
    container.innerHTML = ""
    
    header = document.createElement("h1")
    
    //console.log(header)
    
    console.log(board);
    console.log(board.title);
    header.innerText = board.title;
    
    container.appendChild(header);
    
    console.log("Starting Swimanes");
    
    
    for(i=0;i<board.swimlanes.length;i++) {
        console.log("forloop "+i);
        swimlane = renderSwimlane(board.swimlanes[i])
        container.appendChild(swimlane)
    }
    
}

function renderSwimlane(obj) { 
    
    var div, body, header, child, i;
    
    div = document.createElement("div");
    header = document.createElement("div");
    
    header.className = "panel-heading";
    
    header.innerText = obj.name;
    div.className = "swimlane panel panel-default";
    
    div.appendChild(header);
    
    body = document.createElement("div");
    
    body.className = "panel-body"
    
    
    //console.log("Starting Postits");
    
    //console.log(obj);
    
    
    
    if (obj.children.length != 0){
        for(i=0; i < obj.children.length; i++) {
            
            //console.log(i);
            
            child = renderPostIt(obj.children[i])
            body.appendChild(child);
        }
    }
    
    div.appendChild(body);
    
    return div;
    
}

function renderPostIt(obj) {
    
    var div, header, anchor;
    
    //console.log("renderPostIT");
    //console.log(obj);
    
    anchor = document.createElement("a")
    div = document.createElement("div");
    div.className = "postit";
    header = document.createElement("h1");
    header.innerHTML = obj.header;
    div.appendChild(header);
    anchor.appendChild(div);
    return anchor;
    
    
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


// 
// console.log(board);
// console.log("boardCreated");
// console.log("changing name of board");
// 
// //  board.renameBoard("New Name");
// console.log(board);
// 
console.log("constructing lane")
var lane = swimlane("ToDo");
// 
// console.log(lane);
var post;
post = postit("child");
// 
lane.addChild(post);
// 
// 
// 
console.log("adding to board");
board.addSwimlane(lane);
// 
 lane = swimlane("In Progress");
 lane.addChild(post);
 lane.addChild(post);
 
// 
 board.addSwimlane(lane);
 
 lane = swimlane("Finished");
 lane.addChild(post);
 lane.addChild(post);
 lane.addChild(post);
// 
 board.addSwimlane(lane);
 
 
// 
// console.log(board);
// 


var addSwimlane = document.getElementById("AddSwimlane")
addSwimlane.addEventListener("click", function(e) {
    
    var header = document.getElementById("SwimLaneName").value; 
    var swim = swimlane(header);
    board.addSwimlane(swim);
    renderBoard(board); 
    
})

renderBoard(board);


//    // Code was used to add a swimlane to the board. 
//    console.log("getting swimlane");
//    var swimlane = document.getElementById("hidden");
//    var clone = swimlane.cloneNode(true);
//    
//    swimlaneCount = swimlaneCount + 1
//    clone.id = swimlaneCount 
//    clone.className = "swimlane"
//    
//    var container = document.getElementById("container")
//    
//    
//    container.appendChild(clone);
//    
//    var headerValue = document.getElementById("SwimLaneName").value
//    
//    document.getElementById(swimlaneCount).innerHTML = headerValue
    
    
    
    
    

 
