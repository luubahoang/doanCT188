// -------Trang chủ--------
let currentAd=0;
const ads=document.querySelectorAll('.quang_cao img');

function showAds(index){
    ads.forEach((ad,i) => {
        ad.classList.toggle('active',i === index);
    });
}
function nextAd(){
    currentAd = (currentAd + 1) % ads.length;
    showAds(currentAd);
}
function prevAd(){
    currentAd = (currentAd - 1  + ads.length) % ads.length;
    showAds(currentAd);
}
const Go_top = document.getElementById('go_top');
    Go_top.onclick=function(){
        window.scrollTo({top:0,behavior:'smooth'});
};
// ------ giỏ hàng ---------//

var giohang = new Array;
function themvaogiohang(x){
    var shopthethao = x.parentElement.children;
    var hinh = shopthethao[0].children[0].src;
    var tensp = shopthethao[1].innerText;
    var gia = shopthethao[2].children[0].innerText;
    var soluong = shopthethao[3].value;
    var sp = new Array(hinh, tensp, gia, soluong);

    giohang.push(sp);

    localStorage.setItem("giohang",JSON.stringify(giohang));

}
function showgiohang(){
    var gh = localStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = '';
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var tt = parseInt(giohang[i][2])*parseInt(giohang[i][3]);
        tong +=tt;
        ttgh += '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td><img src="'+ giohang[i][0]+'" alt=""></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td>'+giohang[i][2]+'đ'+'</td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+tt+'.000đ'+'</td>'+
         '</tr>';
    }
    ttgh += '<tr id="tongdonhang">'+
         '<td colspan="5">Tổng đơn hàng</td>'+
         '<td>'+tong+'.000đ'+'</td>'+
         '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}
/*--------tim kiem----- */
document.getElementById('search').addEventListener('click',function(){
    const searchBar = document.getElementById('box_search');
    if (searchBar.classList.contains('show')) {
        searchBar.classList.remove('show');
    } else {
        searchBar.classList.add('show');
    }
});
document.getElementById('searchInput').addEventListener('keydown', checkKey);
function checkKey(e){
    if(e.key === 'Enter')
    doSearch();
}
function doSearch(){
    var url = new URL(window.location);
    var ws = url.searchParams.get("words");
    document.getElementById("searchDetail").innerHTML="<h1>Từ khóa tìm kiếm</h1> <b>"+ws+"</b>";
}
document.getElementById('button_search').addEventListener('click',doSearch);
/****-----------*/////
// ------đăng nhập------
function validateForm(frm) {
    var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailfield = frm.username;
    if(emailreg.test(emailfield.value)==false){
        alert("nhap sai r nhap lai dum di");
        emailfield.focus();
        return false;
    }
    var passwordfield =frm.password;
    if(passwordfield.value.length<=8){
        alert("Mat khau phai co 8 ky tu");
        passwordfield.focus();
        return false;   }
        return true;
}
function validateForm2(frm) {
    var hofield=frm.Họ;
    var tenfield=frm.Tên;
    var namereg = /^[a-zA-Z]+$/;
    if(namereg.test(hofield.value)==false){
        alert("nhap ho sai r nhap lai dum di");
        hofield.focus();
        return false;
    }
    if(namereg.test(tenfield.value)==false){
        alert("nhap ten sai r nhap lai dum di");
        tenfield.focus();
        return false;
    }
    var dayfield=frm.dmy;
    var dayreg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if(dayreg.test(dayfield.value)==false){
        alert("nhap ngay sai r nhap lai dum di");
        dayfield.focus();
        return false;
    }
    var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailfield = frm.username;
    if(emailreg.test(emailfield.value)==false){
        alert("nhap mail sai r nhap lai dum di");
        emailfield.focus();
        return false;
    }
    var passwordfield =frm.password;
    if(passwordfield.value.length<=8){
        alert("Mat khau phai co 8 ky tu");
        passwordfield.focus();
        return false;   }
        return true;
}

