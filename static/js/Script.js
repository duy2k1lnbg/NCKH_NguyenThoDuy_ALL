$(document).ready(function(){

  function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 1000);
  }
    $('.BUTTON_ON').click(function () {
      // console.log("On Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      // console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "On_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
            if(data.status == 'On_Click')
            {
              GetJSON()
            }
            if(data.status == 'Err')
            {
              console.log('ERROR')
            }
        },
      });
    });

    $('.BUTTON_OFF').click(function () {
      // console.log("Off Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      // console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "Off_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
          if(data.status == 'Off_Click')
          {
            GetJSON()
          }
          if(data.status == 'Err')
          {
            console.log('ERROR')
          }
        },
      });
    });
});
// const IP = "http://127.0.0.1:8000/"
const IP = "http://192.168.1.117:8000/"
function GetJSON(){
  URL_JSON = IP + "WEB_SERVER/";
  fetch(URL_JSON)
    .then(response => response.json())
    .then(Device =>{
      Area_1__Device_1 = Device.ID_1.STATUS;
      Area_1__Device_2 = Device.ID_2.STATUS;
      Area_1__Device_3 = Device.ID_3.STATUS;
      Area_1__Device_4 = Device.ID_4.STATUS;
      Area_1__Device_5 = Device.ID_5.STATUS;
      Area_1__Device_6 = Device.ID_6.STATUS;
      Area_1__Device_7 = Device.ID_7.STATUS;
      Area_2__Device_1 = Device.ID_8.STATUS;
      Area_2__Device_2 = Device.ID_9.STATUS;
      Area_2__Device_3 = Device.ID_10.STATUS;
      Area_2__Device_4 = Device.ID_11.STATUS;
      Area_2__Device_5 = Device.ID_12.STATUS;
      Area_2__Device_6 = Device.ID_13.STATUS;
      Area_2__Device_7 = Device.ID_14.STATUS;
      Area_3__Device_1 = Device.ID_15.STATUS;
      Area_3__Device_2 = Device.ID_16.STATUS;
      Area_3__Device_3 = Device.ID_17.STATUS;
      Area_3__Device_4 = Device.ID_18.STATUS;
      Area_3__Device_5 = Device.ID_19.STATUS;
      Area_3__Device_6 = Device.ID_20.STATUS;
      Area_3__Device_7 = Device.ID_21.STATUS;
      Anh_TB_1 = Device.ID_1.TYPE;
      Anh_TB_2 = Device.ID_2.TYPE;
      Anh_TB_3 = Device.ID_3.TYPE;
      Anh_TB_4 = Device.ID_4.TYPE;
      Anh_TB_5 = Device.ID_5.TYPE;
      Anh_TB_6 = Device.ID_6.TYPE;
      Anh_TB_7 = Device.ID_7.TYPE;
      Anh_TB_8 = Device.ID_8.TYPE;
      Anh_TB_9 = Device.ID_9.TYPE;
      Anh_TB_10 = Device.ID_10.TYPE;
      Anh_TB_11 = Device.ID_11.TYPE;
      Anh_TB_12 = Device.ID_12.TYPE;
      Anh_TB_13 = Device.ID_13.TYPE;
      Anh_TB_14 = Device.ID_14.TYPE;
      Anh_TB_15 = Device.ID_15.TYPE;
      Anh_TB_16 = Device.ID_16.TYPE;
      Anh_TB_17 = Device.ID_17.TYPE;
      Anh_TB_18 = Device.ID_18.TYPE;
      Anh_TB_19 = Device.ID_19.TYPE;
      Anh_TB_20 = Device.ID_20.TYPE;
      Anh_TB_21 = Device.ID_21.TYPE;
      var element_1 = document.getElementById("IMG__1");
      var temp_1 = document.getElementById("TEMP__1");
      var element_2 = document.getElementById("IMG__2");
      var temp_2 = document.getElementById("TEMP__2");
      var element_3 = document.getElementById("IMG__3");
      var temp_3 = document.getElementById("TEMP__3");
      var element_4 = document.getElementById("IMG__4");
      var temp_4 = document.getElementById("TEMP__4");
      var element_5 = document.getElementById("IMG__5");
      var temp_5 = document.getElementById("TEMP__5");
      var element_6 = document.getElementById("IMG__6");
      var temp_6 = document.getElementById("TEMP__6");
      var element_7 = document.getElementById("IMG__7");
      var temp_7 = document.getElementById("TEMP__7");
      var element_8 = document.getElementById("IMG__8");
      var temp_8 = document.getElementById("TEMP__8");
      var element_9 = document.getElementById("IMG__9");
      var temp_9 = document.getElementById("TEMP__9");
      var element_10 = document.getElementById("IMG__10");
      var temp_10 = document.getElementById("TEMP__10");
      var element_11 = document.getElementById("IMG__11");
      var temp_11 = document.getElementById("TEMP__11");
      var element_12 = document.getElementById("IMG__12");
      var temp_12 = document.getElementById("TEMP__12");
      var element_13 = document.getElementById("IMG__13");
      var temp_13 = document.getElementById("TEMP__13");
      var element_14 = document.getElementById("IMG__14");
      var temp_14 = document.getElementById("TEMP__14");
      var element_15 = document.getElementById("IMG__15");
      var temp_15 = document.getElementById("TEMP__15");
      var element_16 = document.getElementById("IMG__16");
      var temp_16 = document.getElementById("TEMP__16");
      var element_17 = document.getElementById("IMG__17");
      var temp_17 = document.getElementById("TEMP__17");
      var element_18 = document.getElementById("IMG__18");
      var temp_18 = document.getElementById("TEMP__18");
      var element_19 = document.getElementById("IMG__19");
      var temp_19 = document.getElementById("TEMP__19");
      var element_20 = document.getElementById("IMG__20");
      var temp_20 = document.getElementById("TEMP__20");
      var element_21 = document.getElementById("IMG__21");
      var temp_21 = document.getElementById("TEMP__21");
      if(Anh_TB_1 == 'Quạt'){
        temp_1.classList.add("Electric_fan");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Ceiling_fans");
        temp_1.classList.remove("Water_pumps");
      }
      if(Anh_TB_1 == 'Quạt trần'){
        temp_1.classList.add("Ceiling_fans");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Water_pumps");
        temp_1.classList.remove("Electric_fan");
      }
      if(Anh_TB_1 == 'Máy bơn nước'){
        temp_1.classList.add("Water_pumps");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Electric_fan");
        temp_1.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_1 == 'Bóng đèn'){
        temp_1.classList.add("Light");
        temp_1.classList.remove("Ceiling_fans");
        temp_1.classList.remove("Water_pumps");
        temp_1.classList.remove("Electric_fan");
      }
      

      if(Anh_TB_2 == 'Quạt'){
        temp_2.classList.add("Electric_fan");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Ceiling_fans");
        temp_2.classList.remove("Water_pumps");
      }
      if(Anh_TB_2 == 'Quạt trần'){
        temp_2.classList.add("Ceiling_fans");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Water_pumps");
        temp_2.classList.remove("Electric_fan");
      }
      if(Anh_TB_2 == 'Máy bơn nước'){
        temp_2.classList.add("Water_pumps");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Electric_fan");
        temp_2.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_2 == 'Bóng đèn'){
        temp_2.classList.add("Light");
        temp_2.classList.remove("Ceiling_fans");
        temp_2.classList.remove("Water_pumps");
        temp_2.classList.remove("Electric_fan");
      }


      if(Anh_TB_3 == 'Quạt'){
        temp_3.classList.add("Electric_fan");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Ceiling_fans");
        temp_3.classList.remove("Water_pumps");
      }
      if(Anh_TB_3 == 'Quạt trần'){
        temp_3.classList.add("Ceiling_fans");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Water_pumps");
        temp_3.classList.remove("Electric_fan");
      }
      if(Anh_TB_3 == 'Máy bơn nước'){
        temp_3.classList.add("Water_pumps");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Electric_fan");
        temp_3.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_3 == 'Bóng đèn'){
        temp_3.classList.add("Light");
        temp_3.classList.remove("Ceiling_fans");
        temp_3.classList.remove("Water_pumps");
        temp_3.classList.remove("Electric_fan");
      }


      if(Anh_TB_4 == 'Quạt'){
        temp_4.classList.add("Electric_fan");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Ceiling_fans");
        temp_4.classList.remove("Water_pumps");
      }
      if(Anh_TB_4 == 'Quạt trần'){
        temp_4.classList.add("Ceiling_fans");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Water_pumps");
        temp_4.classList.remove("Electric_fan");
      }
      if(Anh_TB_4 == 'Máy bơn nước'){
        temp_4.classList.add("Water_pumps");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Electric_fan");
        temp_4.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_4 == 'Bóng đèn'){
        temp_4.classList.add("Light");
        temp_4.classList.remove("Ceiling_fans");
        temp_4.classList.remove("Water_pumps");
        temp_4.classList.remove("Electric_fan");
      }

      if(Anh_TB_5 == 'Quạt'){
        temp_5.classList.add("Electric_fan");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Ceiling_fans");
        temp_5.classList.remove("Water_pumps");
      }
      if(Anh_TB_5 == 'Quạt trần'){
        temp_5.classList.add("Ceiling_fans");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Water_pumps");
        temp_5.classList.remove("Electric_fan");
      }
      if(Anh_TB_5 == 'Máy bơn nước'){
        temp_5.classList.add("Water_pumps");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Electric_fan");
        temp_5.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_5 == 'Bóng đèn'){
        temp_5.classList.add("Light");
        temp_5.classList.remove("Ceiling_fans");
        temp_5.classList.remove("Water_pumps");
        temp_5.classList.remove("Electric_fan");
      }

      if(Anh_TB_6 == 'Quạt'){
        temp_6.classList.add("Electric_fan");
        temp_6.classList.remove("Light");
        temp_6.classList.remove("Ceiling_fans");
        temp_6.classList.remove("Water_pumps");
      }
      if(Anh_TB_6 == 'Quạt trần'){
        temp_6.classList.add("Ceiling_fans");
        temp_6.classList.remove("Light");
        temp_6.classList.remove("Water_pumps");
        temp_6.classList.remove("Electric_fan");
      }
      if(Anh_TB_6 == 'Máy bơn nước'){
        temp_6.classList.add("Water_pumps");
        temp_6.classList.remove("Light");
        temp_6.classList.remove("Electric_fan");
        temp_6.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_6 == 'Bóng đèn'){
        temp_6.classList.add("Light");
        temp_6.classList.remove("Ceiling_fans");
        temp_6.classList.remove("Water_pumps");
        temp_6.classList.remove("Electric_fan");
      }

      if(Anh_TB_7 == 'Quạt'){
        temp_7.classList.add("Electric_fan");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Ceiling_fans");
        temp_7.classList.remove("Water_pumps");
      }
      if(Anh_TB_7 == 'Quạt trần'){
        temp_7.classList.add("Ceiling_fans");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Water_pumps");
        temp_7.classList.remove("Electric_fan");
      }
      if(Anh_TB_7 == 'Máy bơn nước'){
        temp_7.classList.add("Water_pumps");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Electric_fan");
        temp_7.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_7 == 'Bóng đèn'){
        temp_7.classList.add("Light");
        temp_7.classList.remove("Ceiling_fans");
        temp_7.classList.remove("Water_pumps");
        temp_7.classList.remove("Electric_fan");
      }

      if(Anh_TB_8 == 'Quạt'){
        temp_8.classList.add("Electric_fan");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Ceiling_fans");
        temp_8.classList.remove("Water_pumps");
      }
      if(Anh_TB_8 == 'Quạt trần'){
        temp_8.classList.add("Ceiling_fans");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Water_pumps");
        temp_8.classList.remove("Electric_fan");
      }
      if(Anh_TB_8 == 'Máy bơn nước'){
        temp_8.classList.add("Water_pumps");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Electric_fan");
        temp_8.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_8 == 'Bóng đèn'){
        temp_8.classList.add("Light");
        temp_8.classList.remove("Ceiling_fans");
        temp_8.classList.remove("Water_pumps");
        temp_8.classList.remove("Electric_fan");
      }

      if(Anh_TB_9 == 'Quạt'){
        temp_9.classList.add("Electric_fan");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Ceiling_fans");
        temp_9.classList.remove("Water_pumps");
      }
      if(Anh_TB_9 == 'Quạt trần'){
        temp_9.classList.add("Ceiling_fans");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Water_pumps");
        temp_9.classList.remove("Electric_fan");
      }
      if(Anh_TB_9 == 'Máy bơn nước'){
        temp_9.classList.add("Water_pumps");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Electric_fan");
        temp_9.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_9 == 'Bóng đèn'){
        temp_9.classList.add("Light");
        temp_9.classList.remove("Ceiling_fans");
        temp_9.classList.remove("Water_pumps");
        temp_9.classList.remove("Electric_fan");
      }

      if(Anh_TB_10 == 'Quạt'){
        temp_10.classList.add("Electric_fan");
        temp_10.classList.remove("Light");
        temp_10.classList.remove("Ceiling_fans");
        temp_10.classList.remove("Water_pumps");
      }
      if(Anh_TB_10 == 'Quạt trần'){
        temp_10.classList.add("Ceiling_fans");
        temp_10.classList.remove("Light");
        temp_10.classList.remove("Water_pumps");
        temp_10.classList.remove("Electric_fan");
      }
      if(Anh_TB_10 == 'Máy bơn nước'){
        temp_10.classList.add("Water_pumps");
        temp_10.classList.remove("Light");
        temp_10.classList.remove("Electric_fan");
        temp_10.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_10 == 'Bóng đèn'){
        temp_10.classList.add("Light");
        temp_10.classList.remove("Ceiling_fans");
        temp_10.classList.remove("Water_pumps");
        temp_10.classList.remove("Electric_fan");
      }

      if(Anh_TB_11 == 'Quạt'){
        temp_11.classList.add("Electric_fan");
        temp_11.classList.remove("Light");
        temp_11.classList.remove("Ceiling_fans");
        temp_11.classList.remove("Water_pumps");
      }
      if(Anh_TB_11 == 'Quạt trần'){
        temp_11.classList.add("Ceiling_fans");
        temp_11.classList.remove("Light");
        temp_11.classList.remove("Water_pumps");
        temp_11.classList.remove("Electric_fan");
      }
      if(Anh_TB_11 == 'Máy bơn nước'){
        temp_11.classList.add("Water_pumps");
        temp_11.classList.remove("Light");
        temp_11.classList.remove("Electric_fan");
        temp_11.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_11 == 'Bóng đèn'){
        temp_11.classList.add("Light");
        temp_11.classList.remove("Ceiling_fans");
        temp_11.classList.remove("Water_pumps");
        temp_11.classList.remove("Electric_fan");
      }

      if(Anh_TB_12 == 'Quạt'){
        temp_12.classList.add("Electric_fan");
        temp_12.classList.remove("Light");
        temp_12.classList.remove("Ceiling_fans");
        temp_12.classList.remove("Water_pumps");
      }
      if(Anh_TB_12 == 'Quạt trần'){
        temp_12.classList.add("Ceiling_fans");
        temp_12.classList.remove("Light");
        temp_12.classList.remove("Water_pumps");
        temp_12.classList.remove("Electric_fan");
      }
      if(Anh_TB_12 == 'Máy bơn nước'){
        temp_12.classList.add("Water_pumps");
        temp_12.classList.remove("Light");
        temp_12.classList.remove("Electric_fan");
        temp_12.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_12 == 'Bóng đèn'){
        temp_12.classList.add("Light");
        temp_12.classList.remove("Ceiling_fans");
        temp_12.classList.remove("Water_pumps");
        temp_12.classList.remove("Electric_fan");
      }

      if(Anh_TB_13 == 'Quạt'){
        temp_13.classList.add("Electric_fan");
        temp_13.classList.remove("Light");
        temp_13.classList.remove("Ceiling_fans");
        temp_13.classList.remove("Water_pumps");
      }
      if(Anh_TB_13 == 'Quạt trần'){
        temp_13.classList.add("Ceiling_fans");
        temp_13.classList.remove("Light");
        temp_13.classList.remove("Water_pumps");
        temp_13.classList.remove("Electric_fan");
      }
      if(Anh_TB_13 == 'Máy bơn nước'){
        temp_13.classList.add("Water_pumps");
        temp_13.classList.remove("Light");
        temp_13.classList.remove("Electric_fan");
        temp_13.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_13 == 'Bóng đèn'){
        temp_13.classList.add("Light");
        temp_13.classList.remove("Ceiling_fans");
        temp_13.classList.remove("Water_pumps");
        temp_13.classList.remove("Electric_fan");
      }

      if(Anh_TB_14 == 'Quạt'){
        temp_14.classList.add("Electric_fan");
        temp_14.classList.remove("Light");
        temp_14.classList.remove("Ceiling_fans");
        temp_14.classList.remove("Water_pumps");
      }
      if(Anh_TB_14 == 'Quạt trần'){
        temp_14.classList.add("Ceiling_fans");
        temp_14.classList.remove("Light");
        temp_14.classList.remove("Water_pumps");
        temp_14.classList.remove("Electric_fan");
      }
      if(Anh_TB_14 == 'Máy bơn nước'){
        temp_14.classList.add("Water_pumps");
        temp_14.classList.remove("Light");
        temp_14.classList.remove("Electric_fan");
        temp_14.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_14 == 'Bóng đèn'){
        temp_14.classList.add("Light");
        temp_14.classList.remove("Ceiling_fans");
        temp_14.classList.remove("Water_pumps");
        temp_14.classList.remove("Electric_fan");
      }

      if(Anh_TB_15 == 'Quạt'){
        temp_15.classList.add("Electric_fan");
        temp_15.classList.remove("Light");
        temp_15.classList.remove("Ceiling_fans");
        temp_15.classList.remove("Water_pumps");
      }
      if(Anh_TB_15 == 'Quạt trần'){
        temp_15.classList.add("Ceiling_fans");
        temp_15.classList.remove("Light");
        temp_15.classList.remove("Water_pumps");
        temp_15.classList.remove("Electric_fan");
      }
      if(Anh_TB_15 == 'Máy bơn nước'){
        temp_15.classList.add("Water_pumps");
        temp_15.classList.remove("Light");
        temp_15.classList.remove("Electric_fan");
        temp_15.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_15 == 'Bóng đèn'){
        temp_15.classList.add("Light");
        temp_15.classList.remove("Ceiling_fans");
        temp_15.classList.remove("Water_pumps");
        temp_15.classList.remove("Electric_fan");
      }

      if(Anh_TB_16 == 'Quạt'){
        temp_16.classList.add("Electric_fan");
        temp_16.classList.remove("Light");
        temp_16.classList.remove("Ceiling_fans");
        temp_16.classList.remove("Water_pumps");
      }
      if(Anh_TB_16 == 'Quạt trần'){
        temp_16.classList.add("Ceiling_fans");
        temp_16.classList.remove("Light");
        temp_16.classList.remove("Water_pumps");
        temp_16.classList.remove("Electric_fan");
      }
      if(Anh_TB_16 == 'Máy bơn nước'){
        temp_16.classList.add("Water_pumps");
        temp_16.classList.remove("Light");
        temp_16.classList.remove("Electric_fan");
        temp_16.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_16 == 'Bóng đèn'){
        temp_16.classList.add("Light");
        temp_16.classList.remove("Ceiling_fans");
        temp_16.classList.remove("Water_pumps");
        temp_16.classList.remove("Electric_fan");
      }

      if(Anh_TB_17 == 'Quạt'){
        temp_17.classList.add("Electric_fan");
        temp_17.classList.remove("Light");
        temp_17.classList.remove("Ceiling_fans");
        temp_17.classList.remove("Water_pumps");
      }
      if(Anh_TB_17 == 'Quạt trần'){
        temp_17.classList.add("Ceiling_fans");
        temp_17.classList.remove("Light");
        temp_17.classList.remove("Water_pumps");
        temp_17.classList.remove("Electric_fan");
      }
      if(Anh_TB_17 == 'Máy bơn nước'){
        temp_17.classList.add("Water_pumps");
        temp_17.classList.remove("Light");
        temp_17.classList.remove("Electric_fan");
        temp_17.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_17 == 'Bóng đèn'){
        temp_17.classList.add("Light");
        temp_17.classList.remove("Ceiling_fans");
        temp_17.classList.remove("Water_pumps");
        temp_17.classList.remove("Electric_fan");
      }

      if(Anh_TB_18 == 'Quạt'){
        temp_18.classList.add("Electric_fan");
        temp_18.classList.remove("Light");
        temp_18.classList.remove("Ceiling_fans");
        temp_18.classList.remove("Water_pumps");
      }
      if(Anh_TB_18 == 'Quạt trần'){
        temp_18.classList.add("Ceiling_fans");
        temp_18.classList.remove("Light");
        temp_18.classList.remove("Water_pumps");
        temp_18.classList.remove("Electric_fan");
      }
      if(Anh_TB_18 == 'Máy bơn nước'){
        temp_18.classList.add("Water_pumps");
        temp_18.classList.remove("Light");
        temp_18.classList.remove("Electric_fan");
        temp_18.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_18 == 'Bóng đèn'){
        temp_18.classList.add("Light");
        temp_18.classList.remove("Ceiling_fans");
        temp_18.classList.remove("Water_pumps");
        temp_18.classList.remove("Electric_fan");
      }

      if(Anh_TB_19 == 'Quạt'){
        temp_19.classList.add("Electric_fan");
        temp_19.classList.remove("Light");
        temp_19.classList.remove("Ceiling_fans");
        temp_19.classList.remove("Water_pumps");
      }
      if(Anh_TB_19 == 'Quạt trần'){
        temp_19.classList.add("Ceiling_fans");
        temp_19.classList.remove("Light");
        temp_19.classList.remove("Water_pumps");
        temp_19.classList.remove("Electric_fan");
      }
      if(Anh_TB_19 == 'Máy bơn nước'){
        temp_19.classList.add("Water_pumps");
        temp_19.classList.remove("Light");
        temp_19.classList.remove("Electric_fan");
        temp_19.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_19 == 'Bóng đèn'){
        temp_19.classList.add("Light");
        temp_19.classList.remove("Ceiling_fans");
        temp_19.classList.remove("Water_pumps");
        temp_19.classList.remove("Electric_fan");
      }

      if(Anh_TB_20 == 'Quạt'){
        temp_20.classList.add("Electric_fan");
        temp_20.classList.remove("Light");
        temp_20.classList.remove("Ceiling_fans");
        temp_20.classList.remove("Water_pumps");
      }
      if(Anh_TB_20 == 'Quạt trần'){
        temp_20.classList.add("Ceiling_fans");
        temp_20.classList.remove("Light");
        temp_20.classList.remove("Water_pumps");
        temp_20.classList.remove("Electric_fan");
      }
      if(Anh_TB_20 == 'Máy bơn nước'){
        temp_20.classList.add("Water_pumps");
        temp_20.classList.remove("Light");
        temp_20.classList.remove("Electric_fan");
        temp_20.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_20 == 'Bóng đèn'){
        temp_20.classList.add("Light");
        temp_20.classList.remove("Ceiling_fans");
        temp_20.classList.remove("Water_pumps");
        temp_20.classList.remove("Electric_fan");
      }

      if(Anh_TB_21 == 'Quạt'){
        temp_21.classList.add("Electric_fan");
        temp_21.classList.remove("Light");
        temp_21.classList.remove("Ceiling_fans");
        temp_21.classList.remove("Water_pumps");
      }
      if(Anh_TB_21 == 'Quạt trần'){
        temp_21.classList.add("Ceiling_fans");
        temp_21.classList.remove("Light");
        temp_21.classList.remove("Water_pumps");
        temp_21.classList.remove("Electric_fan");
      }
      if(Anh_TB_21 == 'Máy bơn nước'){
        temp_21.classList.add("Water_pumps");
        temp_21.classList.remove("Light");
        temp_21.classList.remove("Electric_fan");
        temp_21.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_21 == 'Bóng đèn'){
        temp_21.classList.add("Light");
        temp_21.classList.remove("Ceiling_fans");
        temp_21.classList.remove("Water_pumps");
        temp_21.classList.remove("Electric_fan");
      }

    if(Area_1__Device_1 == 1){
      element_1.classList.add("on");
      element_1.classList.remove("off");
    }
    if(Area_1__Device_1 == 0){
      element_1.classList.add("off");
      element_1.classList.remove("on");
    }
    if(Area_1__Device_2 == 1){
      element_2.classList.add("on");
      element_2.classList.remove("off");
    }
    if(Area_1__Device_2 == 0){
      element_2.classList.add("off");
      element_2.classList.remove("on");
    }
    if(Area_1__Device_3 == 1){
      element_3.classList.add("on");
      element_3.classList.remove("off");
    }
    if(Area_1__Device_3 == 0){
      element_3.classList.add("off");
      element_3.classList.remove("on");
    }
    if(Area_1__Device_4 == 1){
      element_4.classList.add("on");
      element_4.classList.remove("off");
    }
    if(Area_1__Device_4 == 0){
      element_4.classList.add("off");
      element_4.classList.remove("on");
    }
    if(Area_1__Device_5 == 1){
      element_5.classList.add("on");
      element_5.classList.remove("off");
    }
    if(Area_1__Device_5 == 0){
      element_5.classList.add("off");
      element_5.classList.remove("on");
    }
    if(Area_1__Device_6 == 1){
      element_6.classList.add("on");
      element_6.classList.remove("off");
    }
    if(Area_1__Device_6 == 0){
      element_6.classList.add("off");
      element_6.classList.remove("on");
    }
    if(Area_1__Device_7 == 1){
      element_7.classList.add("on");
      element_7.classList.remove("off");
    }
    if(Area_1__Device_7 == 0){
      element_7.classList.add("off");
      element_7.classList.remove("on");
    }


    if(Area_2__Device_1 == 1){
      element_8.classList.add("on");
      element_8.classList.remove("off");
    }
    if(Area_2__Device_1 == 0){
      element_8.classList.add("off");
      element_8.classList.remove("on");
    }
    if(Area_2__Device_2 == 1){
      element_9.classList.add("on");
      element_9.classList.remove("off");
    }
    if(Area_2__Device_2 == 0){
      element_9.classList.add("off");
      element_9.classList.remove("on");
    }
    if(Area_2__Device_3 == 1){
      element_10.classList.add("on");
      element_10.classList.remove("off");
    }
    if(Area_2__Device_3 == 0){
      element_10.classList.add("off");
      element_10.classList.remove("on");
    }
    if(Area_2__Device_4 == 1){
      element_11.classList.add("on");
      element_11.classList.remove("off");
    }
    if(Area_2__Device_4 == 0){
      element_11.classList.add("off");
      element_11.classList.remove("on");
    }
    if(Area_2__Device_5 == 1){
      element_12.classList.add("on");
      element_12.classList.remove("off");
    }
    if(Area_2__Device_5 == 0){
      element_12.classList.add("off");
      element_12.classList.remove("on");
    }
    if(Area_2__Device_6 == 1){
      element_13.classList.add("on");
      element_13.classList.remove("off");
    }
    if(Area_2__Device_6 == 0){
      element_13.classList.add("off");
      element_13.classList.remove("on");
    }
    if(Area_2__Device_7 == 1){
      element_14.classList.add("on");
      element_14.classList.remove("off");
    }
    if(Area_2__Device_7 == 0){
      element_14.classList.add("off");
      element_14.classList.remove("on");
    }



    if(Area_3__Device_1 == 1){
      element_15.classList.add("on");
      element_15.classList.remove("off");
    }
    if(Area_3__Device_1 == 0){
      element_15.classList.add("off");
      element_15.classList.remove("on");
    }
    if(Area_3__Device_2 == 1){
      element_16.classList.add("on");
      element_16.classList.remove("off");
    }
    if(Area_3__Device_2 == 0){
      element_16.classList.add("off");
      element_16.classList.remove("on");
    }
    if(Area_3__Device_3 == 1){
      element_17.classList.add("on");
      element_17.classList.remove("off");
    }
    if(Area_3__Device_3 == 0){
      element_17.classList.add("off");
      element_17.classList.remove("on");
    }
    if(Area_3__Device_4 == 1){
      element_18.classList.add("on");
      element_18.classList.remove("off");
    }
    if(Area_3__Device_4 == 0){
      element_18.classList.add("off");
      element_18.classList.remove("on");
    }
    if(Area_3__Device_5 == 1){
      element_19.classList.add("on");
      element_19.classList.remove("off");
    }
    if(Area_3__Device_5 == 0){
      element_19.classList.add("off");
      element_19.classList.remove("on");
    }
    if(Area_3__Device_6 == 1){
      element_20.classList.add("on");
      element_20.classList.remove("off");
    }
    if(Area_3__Device_6 == 0){
      element_20.classList.add("off");
      element_20.classList.remove("on");
    }
    if(Area_3__Device_7 == 1){
      element_21.classList.add("on");
      element_21.classList.remove("off");
    }
    if(Area_3__Device_7 == 0){
      element_21.classList.add("off");
      element_21.classList.remove("on");
    }
      
    })
}