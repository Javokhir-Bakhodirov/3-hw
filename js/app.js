// 1.1 - misol

// let num1 = prompt("Birinchi sonni kiriting");
// let num2 = prompt("Ikkinchi sonni kiriting");
// let num3 = prompt("Uchinchi sonni kiriting");

// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
// 	alert(num1);
// } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
// 	alert(num2);
// } else {
// 	alert(num3);
// }

// 1.2 - misol

// let num = prompt("Uch xonali sin kiriting son kiriting");
// let result = Math.trunc(num / 100);

// if (result % 2 == 0) {
// 	alert("juft");
// } else {
// 	alert("toq");
// }

// 1.3 - misol

// let max = 150;
// let ball = prompt("Yig'gan balingizni kiriting");

// console.log(Math.round((ball * 100) / max) + "%");

// 1.4 - misol

// for (let i = 5; i <= 20; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// 1.5-misol

// let arr = ["alo", "1", "ha", "3", "true", "null", "salom", "NaN"];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == "salom") {
// 		console.log(arr[i] + " so'zi " + (i + 1) + " - turipti");
// 	}
// }

// 1.6 - misol

// let arr = ["alo", 1, "ha", 3, true, undefined, "salom"];
// for (let i = 0; i < arr.length; i++) {
// 	if (typeof arr[i] ===  "boolean") {
// 		console.log(i + 1);
// 	}
// }

// 1.7 - misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let resultP = 0;
// let resultM = 0;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		resultP += arr[i];
// 	} else {
// 		resultM += arr[i];
// 	}
// }
// console.log(resultP);
// console.log(resultM);

// 1.8 - misol

// let num1 = prompt("Son kiriting");
// let method = prompt("Amalni kiriting");
// let num2 = prompt("Son kiriting");

// switch (method) {
// 	case "+":
// 		alert(+num1 + +num2);
// 		break;
// 	case "-":
// 		alert(+num1 - +num2);
// 		break;
// 	case "*":
// 		alert(+num1 * +num2);
// 		break;
// 	case "/":
// 		alert(+num1 / +num2);
// 		break;
// 	default:
// 		break;
// }

// 1.9 - misol

// let arr = [1, 2, 3, 4, 5, -6, -7, -8, -9, -10];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] < 0) {
// 		arr[i] = Math.abs(arr[i]);
// 	}
// }console.log(arr)

// 1.10 - misol

// let arrA = [1, 3, 5, 41, 34, 23, 54];
// let arrB = [11, 3, 15, 41, 33, 24, 54];

// for (let i = 0; i < arrA.length; i++) {
// 	if (arrA[i] == arrB[i]) {
// 		console.log(arrA[i]);
// 	}
// }

// 1.11 - misol

// let arr = [86, 3, 5, 41, 34, 23, 54];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// 2.1 - misol

// let result = 0;
// let arr = [1, 2, 3, 4, 5, 6, -1, -2, -4, -6];

// let i = 0;

// while (i < arr.length) {
// 	result = result + arr[i];
// 	i++;
// }

// console.log(result);

// 2.2 - misol

// let dollar = 12402;
// let sum = prompt("summani kiriting");

// alert(dollar * sum);

// 2.3 - misol

// let num = prompt("ehtivoriy son kiriting");
// let square = num ** 2;

// if (square % 2 == 0) {
// 	alert(square + " Natija juft");
// } else {
// 	alert(square + " Natija toq");
// }

// 2.4 - misol

// let num = prompt("Son kiriting");
// let i = 0;
// let plus = 0;

// while (i <= num) {
// 	if (i % 3 == 0) {
// 		plus = plus + i;
// 	}
// 	i++;
// }

// console.log(plus);

// let a = prompt("ehtiyoriy son kiriting");
// // let b = prompt("ehtiyoriy son kirting");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
// 	if (a == arr[i]) {
// 		console.log(a + " soni bor");
// 	} //else {
// 	// 	console.log(" Ushbu son yo'q");
// 	// }
// }
