// alert("Hello world!!!");
console.log("Hello world with sliver !!!");
// Phim tat comment: "ctrl" + "/" hoặc "ctrl" + "k" + "c"

// ---------- DATA TYPES ----------

//Constant - Hang so
const pi = 3.14;

//Variables - Bien so
let a = 5;
let b = 5.1;
let x = 5, y = 6, z = 7;

//Strings
let c = "Bui Duc Trung ";
let d = `Dung dau nhay tich`; //co the dung dau nhay tich de khong nham voi dau nhay don, nhay kep
console.log(a + b + " " + c)
console.log(d, a == b)
console.log("Test: ", "x=", x, ", y=", y, ", z=", z);
console.log("Test 2: " + "x=" + x + ", y=" + y + ", z=" + z);
console.log(c.length) //tra ve so ky tu co trong chuoi (do dai chuoi)
console.log(c.trim().length) //trim loai bo dau cach o dau va cuoi string
console.log(`I'm Bui Duc Trung. You can call me "sliver"`) //escape character, dung dau nhay cheo
console.log("I'm Bui Duc Trung. You can call me \"sliver\"") //escape character, dung dau gach cheo


//Strings Method
    //Extracting String Parts: slice(start, end), substring(start, end), substr(start, length), replace
let name = "Bui Duc Trung";
let name2 = name.replace("Trung", "TRUNG"); //thay the trong chuoi
console.log(name2);