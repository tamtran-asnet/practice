    function forEachIn(object, action) {
      for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property))
          action(property, object[property]);
      }
    }

    // The reduce Function
    function forEach(array, action) {
      for (var i = 0; i < array.length; i++)
        action(array[i]);
    }









    function isTextNode(node){
      return node.nodeType == 3;
    }

    console.log(isTextNode(document.body));
    console.log(isTextNode(document.body.firstChild));

    console.log("Node name: " + document.body.firstChild.nodeName);
    console.log("Node value: " + document.body.firstChild.nodeValue);

    var firstNode = document.createElement("H5");
    var secondText =  document.createTextNode("Header added");
    firstNode.appendChild(secondText);
  // set attribute for node
  firstNode.setAttribute("class", "bold large");
  document.body.appendChild(firstNode);

  // get attribute of node
  console.log(firstNode.getAttribute("class"));









  function dom(name, attributes /*, children...*/) {
    var node = document.createElement(name);
    if (attributes) {
      forEachIn(attributes, function(name, value) {
        node.setAttribute(name, value);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (typeof child == "string")
        child = document.createTextNode(child);
      node.appendChild(child);
    }
    return node;
  }

  var nodeAdd = dom("P", null, "A paragraph with a ",
    dom("A", {href: "http://en.wikipedia.org/wiki/Alchemy"}, "link"),
    " inside of it.");
  document.body.appendChild(nodeAdd);

  var node1 = dom("h3",null, "node 1");
  var node2 = dom("h4",null, "node 2");

  document.body.insertBefore(node1, nodeAdd)








  var output = dom("DIV", {id: "printOutput"}, dom("H1", null, "Print output:"));
  document.body.appendChild(output);
  function print() {
    var result = [];
    forEach(arguments, function(arg){result.push(String(arg));});
    output.appendChild(dom("PRE", null, result.join("")));
  }


  var header1 = document.getElementById("header");
  header1.style.color = "#ff0000";




  header1.style.position = "absolute";
  var angle = 0;
  setInterval(function() {
    angle += 0.05;
    header1.style.left = (100 + 100 * Math.cos(angle)) + "px";
    header1.style.top = (100 + 100 * Math.sin(angle)) + "px";
  }, 100);

