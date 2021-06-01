var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
for(var i = 0; i < stations.length; i++) {
    var input = stations[i];
    //当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，slice()可以用来提取它 ---- 第一个参数是开始提取的字符位置，第二个参数是提取的最后一个字符的后一个位置。所以提取从第一个位置开始，直到但不包括最后一个位置。（此例中）你也可以说第二个参数等于被返回的字符串的长度
    var code = input.slice(0,3)
    //在字符串中查找子字符串并提取它,这可以使用indexOf()方法来完成
    var semiC = input.indexOf(';');
    var nae = input.slice(semiC + 1);
    var final = code + ':' + nae;
    var result = final;

    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}