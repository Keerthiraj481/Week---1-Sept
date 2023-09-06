//1.You are given a list of integers. Write a program to find the maximum product of three integers in the list and display the result on a web page.
//Given input:1, 2, 3, 4, 5, 6
//Expected Output:Maximum product of three integers: 120
document.write("Problem No. : 1");
document.write("<br>");
function maxProduct(arr, n) {
  if (n < 3) 
  return;
  let max_product =[];

  for (let i = 0; i < n - 2; i++)
    for (let j = i + 1; j < n - 1; j++)
      for (let k = j + 1; k < n; k++)
        max_product = Math.max(max_product, arr[i] * arr[j] * arr[k]);
  return max_product;
}
let arr = [1, 2, 3, 4, 5 ,6];
let n = arr.length;

let max = maxProduct(arr, n);{
if (max == -1)
    document.write("No Triplet Exists");
else 
    document.write("Maximum product is " + max);
}
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");

// 2.You are given a list of integers representing stock prices. Write a program to find the maximum profit that can be made by buying and selling the stock at most once, and display the result on a web page.
// Given input:10, 7, 5, 8, 11, 9
// Expected output:6

document.write("Problem No. : 2");
document.write("<br>");
function maxProfit(price, start, end) {
    if (end <= start) return 0;
    let profit = 0;
    for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
        if (price[j] > price[i]) {
        let curr_profit =
            price[j] -
            price[i] +
            maxProfit(price, start, i - 1) +
            maxProfit(price, j + 1, end);
        profit = Math.max(profit, curr_profit);
      }
    }
  }
  return profit;
}
let price = [10, 7, 5, 8, 11, 9];
let m = price.length;
document.write("Maximum Profit that can be made: " + maxProfit(price, 0, m - 1));
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");


// 3.You are given a list of integers representing weights of items and their corresponding values. Write a program to find the maximum value that can be obtained by selecting a subset of items with a total weight not exceeding a given limit, and display the result on a web page.
// Given input:Weights:34,value:15,weight limit:70
// Expected output:Maximum value:15
document.write("Problem No. : 3");
document.write("<br>");
 function totalWeight(weights, values, weightLimit) {
   const n = weights.length;
   const dp = new Array(n + 1)
     .fill(0)
     .map(() => new Array(weightLimit + 1).fill(0));

   for (let i = 1; i <= n; i++) {
     for (let w = 1; w <= weightLimit; w++) {
       if (weights[i - 1] <= w) {
         dp[i][w] = Math.max(
           dp[i - 1][w],
           dp[i - 1][w - weights[i - 1]] + values[i - 1]
         );
       } else {
         dp[i][w] = dp[i - 1][w];
       }
     }
   }
   const maxValue = dp[n][weightLimit];
   document.write(`Maximum value: ${maxValue}`);
 }
 const weights = [34];
 const values = [15];
 const weightLimit = 70;
 totalWeight(weights, values, weightLimit);


document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");

// 4.You are given a list of numbers. Write a program to find the subarray with the largest sum and display the result on a web page.
// Given input:-2, -3, 4, -1, -2, 1, 5, -3
// Expected Output:The subarray with the largest sum is [4,-1,-2,1,5] with a sum of 7.

document.write("Problem No. : 4");
document.write("<br>");
function maxSubArraySum(a, size) {
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}
var a = [-2, -3, 4, -1, -2, 1, 5, -3];
document.write("Largest subarray sum is ", maxSubArraySum(a, a.length));
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");

// 5.You are given a binary tree. Write a program to find the maximum depth of the tree and display the result on a web page.
// Given input:3,9,20,null,null,15,7
// Expected Output:3
document.write("Problem No. : 5");
document.write("<br>");
class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}
let root;
function maxDepth(node) {
  if (node == null) return 0;
  else {
    let lDepth = maxDepth(node.left);
    let rDepth = maxDepth(node.right);
    if (lDepth > rDepth) return lDepth + 1;
    else return rDepth + 1;
  }
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Height of tree is : " + maxDepth(root));
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");


// 6.You are given a list of integers. Write a program to find the kth smallest element in the list and display the result on a web page.]
// Given input:3, 5, 2, 8, 9, 1
// Expected output:The 3th smallest element in the list is 3

document.write("Problem No. : 6");
document.write("<br>");
function kthSmallest(ar, N, K) {
  
  ar.sort((a, b) => a - b);
  return ar[K - 1];
}

let ar = [3, 5, 2, 8, 9, 1];
let N = ar.length,
  K = 3;
document.write("3rd Smallest element is " + kthSmallest(ar, N, K));
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");

// 7.You are given a string.Write a program that checks if a given string is a valid email address using logical operators and displays the result in web page.
// Given input:xxxx@gmail.com
// Expected output:Valid email

document.write("Problem No. : 7");
document.write("<br>");
document.write('\ud83d\ude30');
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");


// 8.Write a program to calculate the total sum of a particular column in the table and display it on the web page.
// Given Input:
// Item	Price	Quantity
// Item 1	10	2
// Item 2	20	3
// Item 3	5	4
// Expected Output:
// Item	Price	Quantity
// Item 1	10	2
// Item 2	20	3
// Item 3	5	4
// Total: 35.00

document.write("Problem No. : 7");
document.write("<br>");
document.write("\ud83d\ude30");
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");

// 9.You are given a sentence. Write a program that removes all punctuation marks from the sentence and displays the result on a web page.
// Given input:Skill safari is located in coimbatore.
// Expected Output:safari,located,coimbatore.

document.write("Problem No. : 9");
document.write("<br>");
function remove() {
  const sentence = "Skill safari is located in coimbatore.";
  const cleanedSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  const words = cleanedSentence.split(/\s+/);
  const nonEmptyWords = words.filter((word) => word !== "");

  document.write(nonEmptyWords.join(","));
}
remove();
document.write("<br>");
document.write("<-------------------------------------->");
document.write("<br>");


// 10.You are given a list of words. Write a program that finds the words that have more than 5 letters and displays the result on a web page.
// Given input:1, 4, 6, 3, 8, 7, 10, 2
// Expected output:10

document.write("Problem No. : 10");
document.write("<br>");
function findNumbers(numbers) {
  const result = numbers.filter((number) => number > 9);
  return result;
}
const numbers = [1, 4, 6, 3, 8, 7, 10, 2];
const filteredNumbers = findNumbers(numbers);
document.write("More than 5 Letters: " + filteredNumbers.join(", "));
document.write("<br>");
document.write("<-------------------------------------->");

document.write("<br>");

document.write("\ud83d\ude03");