//Rest API for Countries Data

//Step 01
var request=new XMLHttpRequest();
//Step 02
request.open("GET","https://restcountries.com/v3.1/all");
//Step03
request.send();
//Step 04
request.onload=function(){
    let res=JSON.parse(request.response);
    //console.log(res);//print array of objects

    //print those countries name who belongs to asia region
    let asia_result=res.filter((ele)=>ele.region=="Asia");
    let country_names=asia_result.map((ele)=>ele.name.common);
    console.log("Asia Continent:",country_names);

    //print capitals of countries whose population less than 2lakhs
    let countries=res.filter((ele)=>ele.population<=200000);
    console.log("Population less than 2 lakhs:",countries.map((ele)=>ele.name.common));

    //print total population
    console.log("Total Population:",(res.reduce((acc,cv)=>acc+cv.population,0)));

    //Print the country that uses US dollars as currency.
    let us_dollar=res.filter(country => country.currencies?.USD).map(country => country.name.common);
    console.log("Countries uses US Dollar:",us_dollar);

    //Print the following details name, capital, flag, using forEach function
    res.forEach(country => {
        const { name, capital, flag } = country;
        console.log(`Name: ${name.common}, Capital: ${capital?.[0]}, Flag: ${flag}`);
      });
};