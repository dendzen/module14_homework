const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const student1Node = listNode.querySelector('list > student:first-child');
const student2Node = listNode.querySelector('list > student:last-child');

const name1Node = student1Node.querySelector("name");
const age1Node = student1Node.querySelector("age");
const prof1Node = student1Node.querySelector("prof");
const lang1Attr = name1Node.getAttribute('lang');

const name2Node = student2Node.querySelector("name");
const age2Node = student2Node.querySelector("age");
const prof2Node = student2Node.querySelector("prof");
const lang2Attr = name2Node.getAttribute('lang');

const result = [
 { name: name1Node.textContent,
  age: Number(age1Node.textContent),
  prof: prof1Node.textContent,
  lang: lang1Attr},
 { name: name2Node.textContent,
  age: Number(age2Node.textContent),
  prof: prof2Node.textContent,
  lang: lang2Attr},
]
;
/*
Знаю, что криво ,но .... 
*/  
 console.log('list', result);

