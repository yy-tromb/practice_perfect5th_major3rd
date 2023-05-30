const fs = require("fs");
//const path=require("path");

//const { JSDOM } = require("jsdom");

const src_path = "./src.html";
const src = fs.readFileSync(src_path, { encoding: "utf-8" });
const svg_path = "./media/icons.svg";
const svg = fs.readFileSync(svg_path, { encoding: "utf-8" });
const target_path = "./index.html";

let target = src.replace(
    "<!-- embed svg below -->",
    "<!-- embed svg below -->\n" + svg
);
target = target.replaceAll(
    /<use xlink:href=".\/media\/icons.svg(#.+)"/g,
    `<use xlink:href="$1"`
);

console.log(target);

fs.writeFileSync(target_path, src);

/*const {document}=new JSDOM(src).window;
const embed_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
embed_svg.outerHTML=svg;

fs.writeFileSync(
    target_path,
    "<!DOCTYPE HTML>\n" + document.getElementsByTagName("html")[0].outerHTML
);*/
