const items = [
    { ten: "Áo bóng bàn Champion Nam", gia: 499000,hinh:"./img/BongBan/AoBongBanChampionNam.png"},
    { ten: "Áo bóng bàn Dexter 2", gia: 399000,hinh:"./img/BongBan/AoBongBanDexter2.jpg"},
    { ten: "Áo bóng bàn Flash Wave", gia: 399000,hinh:"./img/BongBan/AoBongBanFlashWave.png"},
    { ten: "Áo bóng bàn Haki", gia: 499000,hinh:"./img/BongBan/AoBongBanHaki.png"},
    { ten: "Áo bóng bàn Haki Nam", gia: 499000,hinh:"./img/BongBan/AoBongBanHakiNam.png"},
    { ten: "Áo bóng bàn Haki Nữ", gia: 499000,hinh:"./img/BongBan/AoBongBanHakiNu.png"},
    { ten: "Áo bóng bàn Lining", gia: 499000,hinh:"./img/BongBan/AoBongBanLining.png"},
    { ten: "Áo bóng bàn Nam Champion", gia: 599000,hinh:"./img/BongBan/AoBongBanNamChampion.png"},
    { ten: "Áo bóng bàn Polo", gia: 599000,hinh:"./img/BongBan/AoBongBanPolo.png"},
    { ten: "Áo bóng bàn Stiga", gia: 499000,hinh:"./img/BongBan/AoBongBanStiga.png"},
    { ten: "Áo bóng bàng Training Lightning", gia: 399000,hinh:"./img/BongBan/AoBongBanTrainingLightning.png"},
    { ten: "Bao vợt bóng bàn", gia: 199000,hinh:"./img/BongBan/BaoVotBongBan.png"},
    { ten: "Giày bóng bàn Cyclone Speed 4", gia: 599000,hinh:"./img/BongBan/GiayBongBanCycloneSpeed4.jpg"},
    { ten: "Giày bóng bàn Gear", gia: 599000,hinh:"./img/BongBan/GiayBongBanGear.jpg"},
    { ten: "Giày bóng bàn Nagado 2023", gia: 499000,hinh:"./img/BongBan/GiayBongBanNagado2023.jpg"},
    { ten: "Giày bóng bàn Nagado 2023", gia: 499000,hinh:"./img/BongBan/GiayBongBanNagado2023.jpg"},
    { ten: "Giày bóng bàn Thunder Blade Z", gia: 699000,hinh:"./img/BongBan/GiayBongBanThunderBladeZ.jpg"},
    { ten: "Giày bóng bàn Wave Made 17", gia: 799000,hinh:"./img/BongBan/GiayBongBanWaveMedal7.jpg"},
    { ten: "Giày bóng bàn Wave Made 16", gia: 699000,hinh:"./img/BongBan/GiayBongBanWaveMedel6.png"},
    { ten: "Quần bóng bàn", gia: 299000,hinh:"./img/BongBan/QuanBongBan.png"},
    { ten: "Túi đa năng trong suốt", gia: 599000,hinh:"./img/BongBan/TuiDaNangTrongSuot.png"},
    
    { ten: "Áo bóng chuyền Lineup Nam", gia: 399000,hinh: "./img/BongChuyen/AobongchuyenLineupNam.png"},
    { ten: "Áo bóng chuyền Nam Setter", gia: 399000, hinh: "./img/BongChuyen/AoBongChuyenNamSetter.png" },
    { ten: "Bộ bóng chuyền Blocker Nữ", gia: 499000, hinh: "./img/BongChuyen/BoBongChuyenBlockerNu.png"  },
    { ten: "Bộ bóng chuyền Libero Nam", gia: 499000, hinh: "./img/BongChuyen/BoBongChuyenLiberoNam.png"  },
    { ten: "Bộ bóng chuyền Libero Nữ", gia: 499000, hinh: "./img/BongChuyen/BoBongChuyenLiberoNu.png"  },
    { ten: "Bộ bóng chuyền Nam Blocker", gia: 499000, hinh: "./img/BongChuyen/BoBongChuyenNamBlocker.png"  },
    { ten: "Bộ bóng chuyền Nữ", gia: 499000, hinh: "./img/BongChuyen/BoBongChuyenNu.png"  },
    { ten: "Bộ bóng chuyền Spiker Nam", gia: 399000, hinh: "./img/BongChuyen/BobongchuyenSpikerNam.png"  },
    { ten: "Giày bóng chuyền Cyclone Speed 4", gia: 599000, hinh: "./img/BongChuyen/GiayBongChuyenCycloneSpeed4.jpg"  },
    { ten: "Giày bóng chuyền Thunder Blade", gia: 599000, hinh: "./img/BongChuyen/GiayBongChuyenThunderBladeZMid.png"  },
    { ten: "Giày bóng chuyền Lightning", gia: 699000, hinh: "./img/BongChuyen/GiayBongChuyenWaveLightningNeo.jpg"  },
    { ten: "Giày bóng chuyền Momentum 3", price: 699000, hinh: "./img/BongChuyen/GiayBongChuyenWaveMomentum3.jpg"  },
    { ten: "Giày Sabeto Indoor", gia: 759000, hinh: "./img/BongChuyen/GiaySabetoIndoor.png"  },
    { ten: "Quả bóng chuyền động lực", gia: 650000, hinh: "./img/BongChuyen/QuaBongChuyenDongLuc.png"  },
    { ten: "Quả bóng chuyền hơi", gia: 779000, imgSrc: "./img/BongChuyen/QuaBongChuyenHoi.png"  },
    { ten: "Quả bóng chuyền Thăng Long", gia: 550000, hinh: "./img/BongChuyen/QuaBongChuyenThangLong7700.jpg"},
    { ten: "Quả bóng chuyền VB7400", gia: 599000,hinh:"./img/BongChuyen/QuaBongChuyenThangLongVB7400.jpg"},
    { ten: "Quả bóng chuyền VB5050", gia: 550000,hinh:"./img/BongChuyen/QuaBongChuyenVB5050.png"},
    { ten: "Quần bóng chuyền Lineup Nam", gia: 299000,hinh:"./img/BongChuyen/QuanBongChuyenLineupNam.png"},
    { ten: "Quần bóng chuyền Nam Setter", gia: 299000,hinh:"./img/BongChuyen/QuanBongChuyenNamSetter.png"},

    { ten: "Áo BIB người lớn", gia: 70000, hinh: "./img/BongDa/AoBIBNguoiLon.jpg" },
    { ten: "Balo thể thao Amore", gia: 799000, hinh: "./img/BongDa/BaloTheThaoAmore.jpg" },
    { ten: "Bộ bóng đá Azzurri 1996", gia: 499000, hinh: "./img/BongDa/BoBongDaAzzurri1996.jpg" },
    { ten: "Bộ Bóng đá Galaxy", gia: 499000, hinh: "./img/BongDa/BoBongDaGalaxy.jpg" },
    { ten: "Bộ bóng đá LaRoja 1996", gia: 759000, hinh: "./img/BongDa/BoBongDaLaRoja1996.png" },
    { ten: "Bộ bóng đá Lux", gia: 599000, hinh: "./img/BongDa/BoBongDaLux.jpg" },
    { ten: "Bộ bóng đá Oranje 1988", gia: 459000, hinh: "./img/BongDa/BoBongDaOranje1988.jpg" },
    { ten: "Bộ bóng đá Prematch 4", gia: 499000, hinh: "./img/BongDa/BoBongDaPrematch4.jpg" },
    { ten: "Bộ bóng đá Prematch Becamex V1", gia: 499000, hinh: "./img/BongDa/BoBongDaPrematchBecamexV1.jpg" },
    { ten: "Bộ bóng đá Prematch Becamex V2", gia: 459000, hinh: "./img/BongDa/BoBongDaPrematchBecamexV2.jpg" },
    { ten: "Bộ bóng đá T79", gia: 399000, hinh: "./img/BongDa/BoBongDaT79.jpg" },
    { ten: "Bộ bóng đá The Three Lions 2004", gia: 359000, hinh: "./img/BongDa/BoBongDaTheThreeLions2004.jpg" },
    { ten: "Giày bóng đá Artista Play TF Kid", gia: 599000, hinh: "./img/BongDa/GiayBongDaArtistaPlayTFKid.jpg" },
    { ten: "Giày bóng đá Assassin TF", gia: 599000, hinh: "./img/BongDa/GiayBongDaAssassinTF.jpeg" },
    { ten: "Giày bóng đá Assassin TF Kid", gia: 455000, hinh: "./img/BongDa/GiayBongDaAssassinTFKid.jpeg" },
    { ten: "Giày bóng đá Futsat Ta11 Pro Ic", gia: 759000, hinh: "./img/BongDa/GiayBongDaFutsatTa11ProIc.jpeg" },
    { ten: "Giày bóng đá Qh19 Kid", gia: 699000, hinh: "./img/BongDa/GiayBongDaQh19Kid.jpeg" },
    { ten: "Túi đứng Co113", gia: 599000, hinh: "./img/BongDa/TuiDungColl3.0.png" },
    { ten: "Túi đựng giày Eagle 2", gia: 699000, hinh: "./img/BongDa/TuiDungGiayEagle2.jpg" },
    { ten: "Túi Rút Ta11", gia: 70000, hinh: "./img/BongDa/TuiRutTa11.jpg" },

    { ten: "Áo cầu lông Flash Light V2 Nữ", gia: 399000, hinh: "./img/CauLong/AoCauLongFlashLightV2Nu.jpg" },
    { ten: "Áo cầu long Lux V1", gia: 599000, hinh: "./img/CauLong/AoCauLongLuxV1.jpg" },
    { ten: "Áo cầu lông Nam Groly V1", gia: 599000, hinh: "./img/CauLong/AoCauLongNamGrolyV1.jpg" },
    { ten: "Áo cầu lông Nam Hanabi", gia: 599000, hinh: "./img/CauLong/AoCauLongNamHanabi.jpg" },
    { ten: "Áo cầu lông Nữ Hanabi", gia: 599000, hinh: "./img/CauLong/AoCauLongNuHanabi.jpg" },
    { ten: "Áo cầu lông T-Shirt Mystery V1", gia: 499000, hinh: "./img/CauLong/AoCauLongT-ShirtMysteryV1.jpg" },
    { ten: "Áo cầu lông VTT Gowo Nam", gia: 499000, hinh: "./img/CauLong/AoCauLongVTTGoWoNam.jpg" },
    { ten: "Áo cầu lông Youth V1", gia: 599000, hinh: "./img/CauLong/AoCauLongYouthV1.jpg" },
    { ten: "Áo thi đấu cầu lông Đồng Nai", gia: 599000, hinh: "./img/CauLong/AoThiDauCauLongDongNai.jpg" },
    { ten: "Áo thi đấu cầu lông Hà Nội", gia: 499000, hinh: "./img/CauLong/AoThiDauCauLongHaNoi.jpg" },
    { ten: "Balo cầu lông V1", gia: 399000, hinh: "./img/CauLong/BaloCauLongV1.jpg" },
    { ten: "Balo cầu lông V2", gia: 459000, hinh: "./img/CauLong/BaloCauLongV2.jpg" },
    { ten: "Giày cầu lông Coba", gia: 599000, hinh: "./img/CauLong/GiayCauLongCoba.jpg" },
    { ten: "Giày cầu lông Coba New", gia: 599000, hinh: "./img/CauLong/GiayCauLongCobanew.jpg" },
    { ten: "Giày cầu lông Colomax", gia: 599000, hinh: "./img/CauLong/GiayCauLongColomax.jpg" },
    { ten: "Giày cầu lông Quickgame", gia: 699000, hinh: "./img/CauLong/GiayCauLongQuickgame.jpg" },
    { ten: "Giày cầu lông TM Legend", gia: 799000, hinh: "./img/CauLong/GiayCauLongTMLegend.jpg" },
    { ten: "Giày cầu lông V1", gia: 699000, hinh: "./img/CauLong/GiayCauLongV1.jpg" },
    { ten: "Giày cầu lông V2", gia: 599000, hinh: "./img/CauLong/GiayCauLongV2.jpg" },
    { ten: "Giày cầu lông V3", gia: 599000, hinh: "./img/CauLong/GiayCauLongV3.jpg" },
    
    { ten: "Áo pickleball", gia: 399000, hinh: "./img/Pickleball/AoPickleball.png" },
    { ten: "Áo pickleball 01", gia: 599000, hinh: "./img/Pickleball/AoPickleball01.jpg" },
    { ten: "Áo pickleball 02", gia: 499000, hinh: "./img/Pickleball/AoPickleball02.png" },
    { ten: "Áo polo Pickleball", gia: 499000, hinh: "./img/Pickleball/AoPoloPickleball.png" },
    { ten: "Áo T-Shirt pickleball", gia: 599000, hinh: "./img/Pickleball/AoT-ShirtPickleball.png" },
    { ten: "Áo thể thao pickleball", gia: 799000, hinh: "./img/Pickleball/AoTheThaoPickleball.png" },
    { ten: "Áo thể thao pickleball V1", gia: 799000, hinh: "./img/Pickleball/AoTheThaoPickleballV1.png" },
    { ten: "Áo thể thao pickleball V2", gia: 699000, hinh: "./img/Pickleball/AoTheThaoPickleballV2.png" },
    { ten: "Áo thi đấu pickleball", gia: 699000, hinh: "./img/Pickleball/AoThiDauPickleball.jpg" },
    { ten: "Áo thi đấu pickleball V1", gia: 599000, hinh: "./img/Pickleball/AoThiDauPickleballV1.png" },
    { ten: "Chân váy pickleball", gia: 399000, hinh: "./img/Pickleball/ChanVayPickleball.png" },
    { ten: "Giày pickleball Nike", gia: 599000, hinh: "./img/Pickleball/GiayPickballNike.jpg" },
    { ten: "Giày pickleball Nike 01", gia: 599000, hinh: "./img/Pickleball/GiayPickballNike01.jpg" },
    { ten: "Giày pickleball 03", gia: 855000, hinh: "./img/Pickleball/GiayPickleball03.jpg" },
    { ten: "Giày pickleball Gel-Dedicate", gia: 699000, hinh: "./img/Pickleball/GiayPickleballGel-Dedicate.jpg" },
    { ten: "Giày pickleball Gel Renma Nữ", gia: 699000, hinh: "./img/Pickleball/GiayPickleballGelRenmaNu.jpg" },
    { ten: "Quần Short pickleball", gia: 399000, hinh: "./img/Pickleball/QuanShortPickleball.png" },
    { ten: "Vợt pickleball 01", gia: 799000, hinh: "./img/Pickleball/VotPickleball01.png" },
    { ten: "Vợt pickleball 02", gia: 799000, hinh: "./img/Pickleball/VotPickleball02.png" },
    { ten: "Giày pickleball 01", gia: 699000, hinh: "./img/Pickleball/GiayPickleball01.jpg" }





];

// ------ giỏ hàng ---------//

var giohang = new Array;
function themvaogiohang(x){
    var shopthethao = x.parentElement.children;
    var hinh = shopthethao[0].children[0].src;
    var tensp = shopthethao[1].innerText;
    var gia = shopthethao[2].children[0].innerText;
    var soluong = shopthethao[3].value;
    var sp = new Array(hinh, tensp, gia, soluong);
    var giohang = JSON.parse(localStorage.getItem("giohang")) || [];

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

/*----------mang sp*/
const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('words');
document.getElementById('hienthi').innerText= searchTerm;
/*---------------bat words tim kiem-----------*/
const results = items.filter(item => 
    item.ten.toLowerCase().includes(searchTerm.toLowerCase())
);
const resultsContainer=document.getElementById('body_hienthi')
if(results.length>0){
    resultsContainer.innerHTML = "";
    results.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('sp');
        productDiv.innerHTML = `
            <div><img src="${item.hinh}" alt=""></div>
                    <h3>${item.ten}</h3>
                    <p>Giá: <span>${(item.gia).toLocaleString()}</span>đ</p>
                    <input type="number" name="soluong" min="1" max="10" value="1" id="">
                    <button onclick="themvaogiohang(this)">Đặt hàng</button>
        `;
        resultsContainer.appendChild(productDiv);
        
    } )
} else {
    resultsContainer.innerHTML = "<h3>Không tìm thấy sản phẩm nào.</h3>";
    
}
