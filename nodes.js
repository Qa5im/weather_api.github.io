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
    
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${input_el}&units=metric&appid=e7b490c1d9eb32f3d44b7496e9feb478`
        
        fetch(url).then((res)=> res.json())
        .then( (data)=> 
        {
            let weather= data.weather[0].main
            let city= data.name
            let url_2= "https://serpapi.com/search.json?q=" + city +" "+ weather + "&tbm=isch&ijn=0&api_key=99bf4e129b016858988984fe604afe416a278dad3d803a33571b92752da3e2f0"
            try
            {
                fetch(url_2)
                .then( (resp)=> resp.json() )
                .then( (info)=>
                {
                    let maximum= 20

                    let minimum=1
                    let req_num= Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    console.log(info.images_results[req_num].original)
                    let link=info.images_results[req_num].original
                    try
                    {
                        document.body.style.backgroundImage= `url(${link})`
                    }
                    catch(err)
                    {
                        console.log("catch it")
                    }
                       
                }
                )
            }
            catch
            {
                console.log("something went worinf")

            }
           
            details_city_el[0].innerText= `Weather in ${data.name}` 
            details_temp_el[0].innerText= Math.round(data.main.temp) +"°C"
            sup_icon_el.attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` )       
            sup_description_el[0].innerText= data.weather[0].description
            sup_humidity_el[0].innerText= "Humidity: "+ data.main.humidity
            sup_windspeed_el[0].innerText= "Wind speed: " + data.wind.speed+ "km/h"
            

        })

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
