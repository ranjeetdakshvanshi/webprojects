function bodyload(){
               fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6ffzhNjjV1XA2HkP9u2ghEmZVMK8Rb2M2ZG4n6Fl&quot;")
                    .then(function(respose){
                      return respose.json()
                    })
                    .then(function(marsObject){
                      console.log(marsObject);
                      for(let item of marsObject.photos)
                      {
                        var div=document.createElement("div");
                        div.className="card p-2 m-2";
                        div.style.width="300px";
                        div.style.cursor="pointer";
                        div.innerHTML=`<img src=${item.img_src} class="card-img-top" height="300px" />
                        <div class="card-header"><h3>PHOTO ID:${item.id}</h3></div>
                        <div class="card-body">
                          <dl>
                            <dt>Camera Name:</dt>
                            <dl>${item.camera.full_name}</dl>
                            <dt>Earth Date:</dt>
                            <dl>${item.earth_date}</dl>
                            </dl>
                            <dt>Rover Name:</dt>
                            <dl>${item.rover.name}</dl>
                            </dl>
                          </div>`;
                        document.querySelector("main").appendChild(div);

                      }
                    }) }
