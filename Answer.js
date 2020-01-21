var $ = function (selector) {

	if (typeof selector !== "string"){
		return TypeError("Selector must be in a string format")
	}


	const results = [];
	const treeWalker = document.createTreeWalker(
	  document.body,
	  NodeFilter.SHOW_ELEMENT,
	  null
	);
	while(treeWalker.nextNode()) {
	  const node = treeWalker.currentNode;
	  if (node.matches(selector)) {
		results.push(node);
	  }
	}
	return results;
  }




// Unrefined solution

//   var $ = function (selector) {

//     if (typeof selector !== "string"){
//         throw TypeError("Please enter a selector in a string format")
//     }

//     let results = [];
//     let classes = getClasses();

//     let hasClass, hasID, str, a

//     if (document.getElementsByTagName(selector)){
//         hasClass = selector.includes(".") ? true : false
//         hadID = selector.includes("#") ? true : false
//     }


//     if (hasClass && hasID) {

//         let i = 0;
//         while (i < classes.length){
//             if (selector.includes(classes[i])) {
//                 str = classes[i];
//                 a = document.getElementsByClassName(str);

//                 if (selector.includes(a[i].id)) results.push(a[i]);
//             }
//             i++
//         }

//     } else if (hasClass) {

//
//         for (i = 0; i < classes.length; i++) {
//             if (selector.includes(classes[i])) {
//                 str = classes[i];
//                 a = document.getElementsByClassName(str);

//                 for (j = 0; j < a.length; j++) {
//                     if (selector.charAt(0) === ".") {
//                         results.push(a[j]);
//                     } else if (selector.includes(a[j].tagName.toLowerCase())) {
//                         results.push(a[j]);
//                     }
//                 }
//             }
//         }

//     } else if (hasID) {
//         if (selector.charAt(0) === "#") results.push(window[selector.substring(selector.indexOf("#") + 1, selector.length)]);


//     } else {
//         for (var i = 0; i < t.length; i++) results.push(t[i]);
//     }

//     return results;
// }




// function getClasses(){

//     let nodesArray = document.body.childNodes
//     let results = [];

//     i = 0;
//     while (i < nodesArray.length){

//         let element = nodesArray[i].nodeName;

//         if (!element.includes("#")){
//             for (j = 0; j < nodesArray[i].classList.length; j++) results.push(nodesArray[i].classList[j]);
//         }
//         i++

//     }

//     let x = Array.from(new Set(results))
//     console.log(x)
//     return x

// }


