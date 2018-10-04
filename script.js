// Write all your Javascript here!

function initialize() {
    $.ajax({
        url: "https://techkaro-test.herokuapp.com/api/v1/getdata ",
        success: function (data) {
            console.log(data)
            for (let i = 0; i < 1; i++) {
                document.querySelector(".main-div").innerHTML +=
                    `<div class='main-div'>
								<img class='flower-img' src='${data.imageURL}'>
							<p class='description'>${data.info.description}</p>
                            
 						</a>
                          <calender class="icon"><i class="fas fa-calendar-alt"></i> ${data.date}
                       
 					</div>`
            }
        }
    })
}



// function initialize() {
//     $.ajax({
//         url: "https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh ",
//         success: function (data) {
//             console.log(data)
//             for (let i = 0; i < 1; i++) {
//                 document.querySelector(".chinese-div").innerHTML +=
//                     `<div class='main-div'>
// 								<img class='flower-img' src='${data.imageURL}'>
// 							<p class='description'>${data.info.description}</p>
                            
//  						</a>
//                           <calender class="icon"><i class="fas fa-calendar-alt"></i> ${data.date}
                       
//  					</div>`
//             }
//         }
//     })
// }
