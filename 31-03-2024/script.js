<script>
   var cities=["Delhi","Hyd","Mumbai","Agara","PrayagRaj"];
    function LoadCities(){
    document.getElementById("stCities").innerHTML="";
     for(let city of cities){
      var option=document.createElement("option");
      option.text=city;
      option.value=city;
      document.getElementById("stCities").appendChild(option);
   }
    document.getElementById("lblCount").innerHTML = `Total No of Cities : ${cities.length}`.bold().fontcolor("red").italics();
    }
  function bodyLoad(){
   LoadCities();
  }
   function AddCity(){
      var cityName=document.getElementById("txtCity").value;
       if(cityName){
         if(cities.indexOf(cityName)==-1){
         cities.push(cityName);
        
         document.getElementById("txtCity").value="";
         cities.sort();
         LoadCities();
       }
       }
       else{
         alert("Please Enter City");
       }
      }
      function RemoveCity(){
            var selectedCityName = document.getElementById("stCities").value;
            var selectedIndex = cities.indexOf(selectedCityName);
            if(selectedIndex==-1){
                 alert(`Please Select City`)
            }else{
               var flag = confirm(`Delete ${selectedCityName}\nAre you sure want to delete?`);
            if(flag==true){
                cities.splice(selectedIndex,1);
                LoadCities();
            }
            }
         }
            function ClearCity(){
               cities.length=0;
               LoadCities();
            }
            function  SortAss(){
               cities.sort();
               LoadCities();
            }
            function SortDes(){
               cities.sort();
               cities.reverse();
               LoadCities();
            }
</script>
