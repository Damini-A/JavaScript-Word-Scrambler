let greeting ='Hello JS';

let result =greeting.split();
undefined
result
[ 'Hello JS' ]
greeting.split("");
[ 'H', 'e', 'l', 'l', 'o', ' ', 'J', 'S' ]
greeting.split(" ");
[ 'Hello', 'JS' ]



result.join();
'Hello JS'
let result2=greeting.split("");
undefined
result2
[ 'H', 'e', 'l', 'l', 'o', ' ', 'J', 'S' ]
result2.join();
'H,e,l,l,o, ,J,S'
result2.join('');
'Hello JS'


let arr = [1,2,3,4,5,6];
undefined
let randomNum;
randomNum = Math.floor(arr.length * Math.random());
2
randomNum = Math.floor(arr.length * Math.random());
1
randomNum = Math.floor(arr.length * Math.random());
2
randomNum = Math.floor(arr.length * Math.random());
4


let swap = function(arr, intA, intB){
let temp = arr[intA];
arr[intA] = arr[intB];
arr[intB] = temp;
};
undefined
swap(arr, 1,2);
undefined
console.log(arr);
[ 1, 3, 2, 4, 5, 6 ]
undefined


swap(arr, Math.floor(arr.length * Math.random()),Math.floor(arr.length * Math.random()));
undefined
console.log(arr);
[ 6, 3, 2, 4, 5, 1 ]
undefined



let candy = new Map();
undefined
> candy.set('purple','grape');
Map { 'purple' => 'grape' }
> candy.set('green','mint');
Map { 'purple' => 'grape', 'green' => 'mint' }
> candy.set('red','chilly');
Map { 'purple' => 'grape', 'green' => 'mint', 'red' => 'chilly' }
> candy.set('yellow','lemon');
Map {
  'purple' => 'grape',
  'green' => 'mint',
  'red' => 'chilly',
  'yellow' => 'lemon' }
> candy.set('orange','orange');
Map {
  'purple' => 'grape',
  'green' => 'mint',
  'red' => 'chilly',
  'yellow' => 'lemon',
  'orange' => 'orange' }
> candy
Map {
  'purple' => 'grape',
  'green' => 'mint',
  'red' => 'chilly',
  'yellow' => 'lemon',
  'orange' => 'orange' }
> for (let keyvalue of candy) {
... 
... console.log('The',keyvalue[1],'falvor is colored',keyvalue[0]);
... }
The grape falvor is colored purple
The mint falvor is colored green
The chilly falvor is colored red
The lemon falvor is colored yellow
The orange falvor is colored orange
undefined
candy.values();
[Map Iterator] { 'grape', 'mint', 'chilly', 'lemon', 'orange' }
candy.keys();
[Map Iterator] { 'purple', 'green', 'red', 'yellow', 'orange' }
candy.get('blue');
undefined
candy.has('blue');
false
candy.has('green');
true



function flavor(color,Map){
... if (Map.has(color)){
..... return (Map.get(color));
..... } else {
..... console.log('Sorry, that color doesn’t have a flavor');
..... return;
..... }
... }
undefined
> flavor('red',candy);
'chilly'
> flavor('blue',candy);
Sorry, that color doesn’t have a flavor
undefined
