 $(document).ready( () => {

    function genearte_resposne()
    {
        const input_main_box_el= $("#input_main_box");
        const input_el= input_main_box_el.val();
        const details_city_el= $(".details_city")
        const details_temp_el= $(".details_temp")
        const sup_icon_el= $("#sup_icon")
        const sup_description_el= $(".sup_description")
        const sup_humidity_el= $(".sup_hummidity")
        const sup_windspeed_el= $(".sup_windspeed")
        const main_box_details_el= document.getElementsByClassName("main_box_detials")
        const error_catcher_el= document.getElementById("error_catcher")

        let url= `https://api.openweathermap.org/data/2.5/weather?q=${input_el}&units=metric&appid=e7b490c1d9eb32f3d44b7496e9feb478`
        fetch(url).then((res)=> res.json())
        .then( (data)=> 
        {
            let weather= data.weather[0].main
            let city= data.name
            document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + city+" "+ weather+"' )";       
            details_city_el[0].innerText= `Weather in ${data.name}` 
            details_temp_el[0].innerText= Math.round(data.main.temp) +"°C"
            sup_icon_el.attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` )       
            sup_description_el[0].innerText= data.weather[0].description
            sup_humidity_el[0].innerText= "Humidity: "+ data.main.humidity
            sup_windspeed_el[0].innerText= "Wind speed: " + data.wind.speed+ "km/h"
            main_box_details_el[0].style.display="block";
            error_catcher_el.style.display="none";
        })
        .catch
        {
            error_catcher_el.style.display="block";
            main_box_details_el[0].style.display="none";
        }

    
    

        input_main_box_el.val("")

    }
   

    
    
    $("#btn_main_box").click( () =>
    {
        genearte_resposne();
    }
    )
    $("#input_main_box").keypress((e)=>
    {
        if(e.which == "13")
        {
            genearte_resposne();
        }
    })

   


})
