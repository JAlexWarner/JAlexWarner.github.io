"use strict";
let old_tutor_elem = document.getElementById("replace-with-reviews");
let new_tutor_ul = document.createElement("ul");
new_tutor_ul.setAttribute("id", "reviews-list");
if (old_tutor_elem == null) {
    throw Error("Couldn't find element with 'replace-with-reviews' id");
}
else {
    if (old_tutor_elem.parentNode == null) {
        throw Error("Couldn't find parentNode of element with 'replace-with-reviews' id");
    }
    else {
        old_tutor_elem.parentNode.replaceChild(new_tutor_ul, old_tutor_elem);
    }
}
fetch("html_replacements/reviews.json")
    .then(response => response.json())
    .then(raw_json => {
    // console.log(Object.keys(raw_json).map((k) => raw_json[k]));
    var _a;
    const review_fields = ["title", "body", "name", "lessons"];
    for (const item in raw_json) {
        // debugger
        let li_node = document.createElement("li");
        // li_node.setAttribute("class", "review-card");
        (_a = document.getElementById("reviews-list")) === null || _a === void 0 ? void 0 : _a.appendChild(li_node);
        review_fields.forEach(field => {
            let p_node = document.createElement("p");
            p_node.innerText = raw_json[item][field];
            li_node.appendChild(p_node);
        });
    }
}).catch(err => {
    console.log("not quite sure what to do here in production");
    throw err;
});
//# sourceMappingURL=tutoring.js.map