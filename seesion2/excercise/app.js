// // // 1.Cho người dùng nhập vào số bất kỳ.
// // // Kiểm tra xem số có âm hay không
// // // Nếu âm => print(invalid input)
// // // Nếu dương => Tính giai thừa của số đó và in ra
// // // let userinput = prompt("Nhap vao so bat ky: ");
// // // if(userinput<0){
// // //     console.log("invalid input");   
// // // }else if (userinput>0){
// // //     let giaithua = 1;
// // //     for(let i=1;i<=userinput;i++){
// // //         giaithua = giaithua*i;
// // //     }
// // //     console.log(giaithua);
// // // }

// // // 2. Cho người dùng nhập vào name + age
// // // Nếu tuổi < 18 => print(name chưa đủ tuổi vào trang web này)
// // // Nếu tuổi >=18 => tiếp tục hỏi: name có muốn đăng nhập vào trang web này không
// // //                              : nếu câu trả lời = yes => print(name đã vào trang web thành công)
// // //                              : nếu câu trả lời = no  => print(name thoát khỏi trang web)
// // // let name = prompt("Ten ban la gi?");
// // // let age = prompt("Ban bao nhieu tuoi?");
// // // if(age < 18){
// // //     console.log(name + " " + "chua du tuoi vao trang web nay!");
// // // }else if(age > 18){
// // //     let userinput = prompt(name + " " + "co muon dang nhap vao trang web nay khong? yes or no");
// // //         if(userinput = "yes"){
// // //             console.log(name + " " + "da vao trang web thanh cong!");
// // //         }else if(userinput = "no"){
// // //             console.log(name + " " + "thoat khoi trang web");
// // //         }
// // // }

// // // 3. Cho người dùng nhập vào username + password,
// // //    Tạo một biến username2 và password2 tạm thời ở code
// // //    Kiểm tra username === username2 và password === password2
// // //    Nếu cả 2 đều giống => print(đăng nhập thành công)
// // //    Nếu một trong 2 sai => print(username sai: nếu username sai) hoặc print(password sai: nếu pass sai)
// // let username = prompt("username");
// // let password = prompt("password");
// // const username2 = "phuongngoc";
// // const password2 = "123456";

// // if(username === username2 && password === password2){
// //     console.log("dang nhap thanh cong");
// // }else if(username != username2){
// //     console.log("username sai");
// // }else if(password != password2){
// //     console.log("password sai");
// // }

// // // 4. Tìm hiểu cách lấy thứ, ngày, tháng và câu lệnh switch/case trong javascript (google)
// // // Cho người dùng nhập vào tháng sinh(month) và name
// // // Nếu sinh 1,2,3 => name sinh vào mùa xuân
// // // Nếu sinh 4,5,6 => name sinh vào mùa hạ
// // // Nếu sinh 7,8,9 => name sinh vào mùa thu
// // // Nếu sinh 10,11,12 => name sinh vào mùa đông
// // // Nhập các trường hợp khác không hợp lệ => input không hợp lệ

// let name = prompt("Ten ban la gi?");
// let month = Number(prompt("Ban sinh thang may?"));

// switch(month){
//     case 1:
//     case 2:
//     case 3:
//         console.log(name + " " + "sinh vao mua xuan");
//     break;
//     case 4:
//     case 5:
//     case 6:
//         console.log(name + " " + "sinh vao mua ha");
//     break;
//     case 7:
//     case 8:
//     case 9:
//         console.log(name + " " + "sinh vao mua thu");
//     break;
//     case 10:
//     case 11:
//     case 12:
//         console.log(name + " " + "sinh vao mua dong");    
//     break;
// default:
//         console.log("thang sinh khong hop le");  
//         break;  
//     }

// 5. Cho người dùng nhập vào 3 tham số a, b, c của một phương trình bậc 2=> Tìm nghiệm của phương trình đó
// (sử dụng câu lệnh if/else)
// Sau khi in ra nghiệm thì tiếp tục hỏi người dùng có muốn sử dụng chương trình tiếp không
// Nếu yes => Ứng dụng vòng lặp while cho chương trình chạy tiếp
// Nếu no  => Dừng chương trình

// let userinput = "yes";
// while (userinput = "yes"){
//     let a = prompt ("Nhập a");
//     let b = prompt ("Nhập b");
//     let c = prompt ("Nhập c");
//     let delta = b * b - 4 * a * c;
//     if(delta < 0){
//         console.log("Phương trình vô nghiệm");
//     }else if(delta == 0){
//         console.log("Phương trình có nghiệm kép x =" + " " + -b / 2 * a);
//     }else{
//         let x1 = (-b+Math.sqrt(delta))/2*a;
//         let x2 = (-b-Math.sqrt(delta))/2*a;
//         console.log("Phương trình có 2 nghiệm x1 = " + x1 + " va x2 = " + x2)
//     }
//     userinput = prompt ("Bạn có muốn sử dụng tiếp ?Yes/No?");
//     if(userinput = "No"){
//         break;
//     }
// }

// 6. Cách truy cập vào từng phần tử của 1 chuỗi
// VD: const randomString = "Hello World";
// console.log(randomString[0]) => // in ra chữ "H"
// console.log(randomString[1]) => // in ra chữ "e"
// console.log(randomString[2]) => // in ra chữ "l"
// chỉ số bắt đầu của chuỗi randomString là 0 và kết thúc = randomString.length - 1
// .length lấy ra độ dài của chuỗi đó

// Ứng dụng kiến thức trên cho:

// Viết 1 chương trình cho người dùng nhập vào 1 chuỗi bất kỳ
// In ra chuỗi đó theo dạng ngược lại
// Sau khi in ra tiếp tục hỏi người dùng có muốn tiếp tục chương trình
// Nếu yes => dùng vòng lặp while để tiếp tục chương trình
// Nếu no => dừng chương trình

// let userinput = "Yes";
// while (userinput="yes") {
//     let name=prompt("nhập 1 chuỗi bất kỳ");
//     for(let i= name.length-1;i>=0;i--){
//         console.log(i+": "+name.substr(i,1));
        
//     }
//     userinput=prompt("Bạn có muốn tiếp tục?Yes/No?");
//     if(userinput="No"){
//         break;
//     }
// }
