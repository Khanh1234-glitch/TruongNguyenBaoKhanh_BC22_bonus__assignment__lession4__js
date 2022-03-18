// Lession 1
/**
 * Đầu vào:
 * Tạo 3 biến cho người dùng nhập vào 
 * tạo các biến như ngày +1, tháng +1, năm +1
 * để tránh trường hợp bị nối chuỗi
 * Xử lý:
 * Sử dụng hàm switch case để 
 * cho biến month vào switch
 * Bước 1:
 * viết hàm kiểm tra năm nhuận trong case 2
 * Bước 2: 
 * Kiểm tra số ngày trong 1 tháng
 * 
 * các tháng như tháng 4, 6, 9, 11 là những tháng có 30 ngày nên
 * mình sẽ viết chung hàm
 * 
 * riêng tháng 12 do là tháng chuyển qua năm mới nên mình viết
 * hàm riêng cho nó
 * 
 * Đầu ra:
 * 
 * Xuất ra ngày tháng năm kế tiếp so với người dùng đã nhập
 */
document.getElementById("btn__Count").onclick = function() {
        var day = document.getElementById("txtDay").value * 1;
        var month = document.getElementById("txtMonth").value * 1;
        var year = document.getElementById("txtYear").value * 1;
        var dayplus = day + 1;
        var monthplus = month + 1;
        var yearplus = year + 1;

        switch (month) {
            case 2:
                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                    if (day <= 28) {
                        var cout = " Next day " + dayplus + " month " + month + " year " + year;
                    } else {
                        cout = " Next day " + 1 + " month " + monthplus + " year " + year;
                    }
                } else {
                    if (day <= 27) {
                        cout = " Next day " + dayplus + " month " + month + " year " + year;
                    } else {
                        cout = " Next day " + 1 + " month " + monthplus + " year " + year;
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day <= 29) {
                    cout = " Next day " + dayplus + " month " + month + " year " + year;
                } else {
                    cout = " Next day " + 1 + " month " + monthplus + " year " + year;
                }
                break;
            case 12:
                if (day <= 29) {
                    cout = " Next day " + dayplus + " month " + month + " year " + year;
                } else {
                    cout = " Next day " + 1 + " month " + 1 + " year " + yearplus;
                }
                break;
            default:
                if (day <= 30) {
                    cout = " Next day " + dayplus + " month " + month + " year " + year;
                } else {
                    cout = " Next day " + 1 + " month " + monthplus + " year " + year;
                }
                break;
        }

        document.getElementById("footer__Count").innerHTML = cout;

    }

    // Lession 2
    /**
     * Đầu vào:
     * Tạo ra 2 biến tháng năm cho người dùng nhập vào
     * Xử lý:
     * Sử dụng switch case như bài trước 
     * Bước 1: 
     * Xử lý tháng 2 trước để xác định năm nhuần 
     * Bước 2:
     * Xác định các tháng có 30 ngày
     * như tháng 4, 6, 9, 11
     * Bước 3:
     * Default các tháng còn lại là 31 ngày 
     * nghĩa là các tháng còn lại đều có 31 ngày
     * Đầu ra:
     * in ra số ngày trong tháng đó
     */
document.getElementById("btn__dayofmonth").onclick = function() {
        var month = document.getElementById("Month").value * 1;
        var year = document.getElementById("Year").value * 1;
        switch (month) {
            case 2:
                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                    var sum = "Month " + month + " " + "have 29 days";
                } else {
                    sum = "Month " + month + " " + "have 28 days";
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                sum = "Month " + month + " " + "have 30 days";
                break;
            default:
                sum = "Month " + month + " " + "have 31 days";
                break;
        }
        document.getElementById("footer__dayofmonth").innerHTML = sum;
    }
    //lession 3
    /**
     * Đầu vào:
     * Tạo 1 biến cho người dùng nhập vào
     * tạo 3 biến lần lượt là chục, đơn vị, trăm
     * Tạo 1 biến xuất
     * 
     * Xử lý:
     * số có 3 chữ số sẽ có 3 hàng đơn vị là trăm, chục, đơn vị
     * muốn lấy hàng trăm ta có công thức:
     * số người dùng nhập vào /10
     * Hàng đơn vị:
     * số người dùng nhập vào %10
     * Hàng chục:
     * (số người dùng nhập vào /10)%10
     * 
     * Ba số này khi chia ra sẽ bị lẻ nên ta dùng hàm
     * Math.floor để làm tròn số
     * Dùng hàm if nếu số người dùng nhập vào là
     * số có 2 chữ số hoặc 4 chữ số trở lên yêu cầu nhập lại
     * Ngược lại dùng hàm switch case để tiến hành đọc số
     * làm 3 hàm switch tương ứng với 3 số
     * 
     * Đầu ra:
     * Tạo 1 biến tổng để + 3 switch lại 
     * Xuất ra màn hình kết quả đọc số
     */
document.getElementById("btn__Read").onclick = function() {
    var numBer1 = document.getElementById("txtnumBer").value * 1;
    var units;
    var tens;
    var hunred;
    var cout = "";
    var cout__1 = "";
    var cout__2 = "";

    units = Math.floor(numBer1 % 10);
    tens = Math.floor((numBer1 / 10) % 10);
    hunred = Math.floor(numBer1 / 100);
    if (numBer1 < 100 || numBer1 > 999) {
        cout = "Are you kidding me?" + "<br>" + " Please re-enter the 3-digit number ";
    } else {
        switch (hunred) {
            case 1:
                cout = "one hundred";
                break;
            case 2:
                cout = "two hundred";
                break;
            case 3:
                cout = "three hundred";
                break;
            case 4:
                cout = "four hundred";
                break;
            case 5:
                cout = "five hundred";
                break;
            case 6:
                cout = "six hundred";
                break;
            case 7:
                cout = "seven hundred";
                break;
            case 8:
                cout = "eight hundred";
                break;
            case 9:
                cout = "nine hundred";
                break;

        }
        switch (tens) {
            case 1:
                var cout__1 = "ten";
                break;
            case 2:
                cout__1 = "twenty";
                break;
            case 3:
                cout__1 = "thirty";
                break;
            case 4:
                cout__1 = "fourty";
                break;
            case 5:
                cout__1 = "fifty";
                break;
            case 6:
                cout__1 = "sixty";
                break;
            case 7:
                cout__1 = "seventy";
                break;
            case 8:
                cout__1 = "eighty";
                break;
            case 9:
                cout__1 = "ninety";
                break;

        }
        switch (units) {
            case 1:
                var cout__2 = "one";
                break;
            case 2:
                cout__2 = " two";
                break;
            case 3:
                cout__2 = "three";
                break;
            case 4:
                cout__2 = "four";
                break;
            case 5:
                cout__2 = "five";
                break;
            case 6:
                cout__2 = "six";
                break;
            case 7:
                cout__2 = "seven";
                break;
            case 8:
                cout__2 = "eigh";
                break;
            case 9:
                cout__2 = "nine";
                break;

        }
    }
    var total = cout + " " + cout__1 + " " + cout__2;
    document.getElementById("footer__Read").innerHTML = total;

}

//lession 4
/**Đầu vào 
 * Tạo các biến x, y để tính toán tọa độ cho dễ
 * Tạo cho tọa độ trường đầu tiên cho dễ nhìn 
 * vì tọa độ trường là trung tâm
 * Xử lý:
 * Sử dụng công thức khoảng cách giữa 2 điểm
 * cho tọa độ của cả 3 sinh viên
 * còn tọa độ của trường là dùng trong công thức khoảng cách 2 điểm
 * để chút so sánh xem nào lớn nhất thì in ra
 * sử dụng if else để so sánh
 * số của đứa nào lớn nhất là đứa đó xa nhất
 * Math.sqrt là căn bậc 
 * Math.pow là mũ 
 * Đầu ra:
 * In ra sinh viên xa trường nhất
 * không biết đặt tên gì thì đặt là student + số
 */
document.getElementById("btn__Coordinates").onclick = function() {
    var School__xD = document.getElementById("xD").value * 1;
    var School__yD = document.getElementById("yD").value * 1;

    var student__1__xA = document.getElementById("xA").value * 1;
    var sutdent__1__yA = document.getElementById("yA").value * 1;

    var studen__2__xB = document.getElementById("xB").value * 1;
    var studen__2__yB = document.getElementById("yB").value * 1;

    var studen__3__xC = document.getElementById("xC").value * 1;
    var studen__3__yC = document.getElementById("yC").value * 1;

    var sum = Math.sqrt(Math.pow(School__xD - student__1__xA, 2) + Math.pow(School__yD - sutdent__1__yA, 2));
    sum__1 = Math.sqrt(Math.pow(School__xD - studen__2__xB, 2) + Math.pow(School__yD - studen__2__yB, 2));
    sum__2 = Math.sqrt(Math.pow(School__xD - studen__3__xC, 2) + Math.pow(School__yD - studen__3__yC, 2));
    if (sum > sum__1 && sum > sum__2) {
        var result = "Student 1 farthest from shool";
    } else if (sum__1 > sum && sum__1 > sum__2) {
        var result = "Student 2 farthest from shool";
    } else {
        var result = "Student 3 farthest from shool";
    }
    document.getElementById("footer__Coordinates").innerHTML = result;
}
