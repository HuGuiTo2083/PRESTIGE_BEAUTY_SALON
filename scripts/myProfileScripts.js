
const newServicesJson = {
    "LVL Lash Lift": ["60", "GBP 40"],
    "Eyelashes-Strip Lashes": ["15", "GBP 13"],
    "Semi-Permanent Eyelash Extensions-Infills": ["60", "GBP 35"],
    "Eyelash Extensions-Classic": ["90", "GBP 45"],
    "Eyelash Extensions-Hybrid": ["90", "GBP 50"],
    "Eyelash Extensions-Russian Volume": ["120", "GBP 60"],
    "Eyelash Extensions-Removal": ["20", "GBP 15"],
    "Eyelashes-Party Lashes": ["30", "GBP 25"],
    "Eyebrow Threading": ["15", "GBP 13"],
    "Eyebrow Thread and Tint": ["15", "GBP 18"],
    "Brow Lamination and Tint": ["40", "GBP 30"],
    "HD Brows": ["30", "GBP 28"],
    "Brow Shape, Tint and Lash Tint": ["30", "GBP 30"],
    "Eyelash Tint": ["20", "GBP 14"],
    "Eyebrow Tint": ["15", "GBP 10"],
    "Shape and Tint": ["15", "GBP 18"],
    "Eyebrow Shaping": ["15", "GBP 13"],
    "Ear Candling": ["30", "GBP 25"],
    "Express Pick Me Up": ["35", "GBP 30"],
    "Deep Luxury Cleanse": ["60", "GBP 40"],
    "Crystal Clear Microdermabrasion": ["60", "GBP 55"],
    "Dermaplaning": ["50", "GBP 45"],
    "Ear Piercing": ["15", "GBP 25"],
    "Makeup": ["60", "GBP 45"],
    "6 minutes": ["10", "GBP 4"],
    "3 minutes": ["5", "GBP 2"],
    "9 minutes": ["15", "GBP 6"],
    "12 minutes": ["20", "GBP 8"],
    "1 week Course": ["20", "GBP 15"],
    "1 month Course": ["20", "GBP 50"],
    "Spray Tan": ["15", "GBP 25"],
    "Nail Art (french,chrome etc)": ["20", "GBP 5"],
    "Callus Peel": ["30", "GBP 30"],
    "Nail Repair": ["15", "GBP 5"],
    "Shellac Gel Polish- Toes": ["30", "GBP 28"],
    "Shellac Gel Polish Remove and Renew-Toes": ["35", "GBP 30"],
    "BIAB on Natural Nails": ["75", "GBP 33"],
    "BIAB Full set with Tips": ["85", "GBP 39"],
    "Acrylic Full set with Shellac colour": ["75", "GBP 39"],
    "Acrylic Full set Ombre": ["75", "GBP 42"],
    "Luxury Pedicure": ["45", "GBP 35"],
    "Luxury Pedicure with Shellac polish": ["75", "GBP 45"],
    "Infills-BIAB": ["60", "GBP 33"],
    "Infills-Acrylic": ["60", "GBP 33"],
    "Shellac Gel Polish- Hands": ["30", "GBP 28"],
    "Shellac Gel polish Remove and Renew-Hands": ["35", "GBP 30"],
    "Soak Off Nails with tips": ["30", "GBP 20"],
    "Soak Off nails without tips": ["30", "GBP 15"],
    "Forehead": ["10", "GBP 9"],
    "Chin": ["10", "GBP 9"],
    "Upper Lip": ["10", "GBP 9"],
    "Lip and Chin": ["15", "GBP 14"],
    "Full Face": ["30", "GBP 17"],
    "Eyebrows Gents Waxing": ["20", "GBP 13"],
    "Eyebrows Ladies Waxing-Face": ["10", "GBP 13"],
    "Back": ["20", "GBP 30"],
    "Chest": ["20", "GBP 30"],
    "Chest and Back": ["45", "GBP 40"],
    "Intimate Waxing": ["65", "GBP 60"],
    "Upper lip and Chin": ["15", "GBP 14"],
    "Strip Wax Ladies Waxing- Arm and Underarm": ["10", "GBP 12"],
    "Hot wax Ladies Waxing- Arm and Underarm": ["15", "GBP 14"],
    "Strip Wax Ladies Waxing- Bikini": ["15", "GBP 25"],
    "Hot wax Ladies Waxing- Bikini": ["20", "GBP 28"],
    "Strip Wax Ladies Waxing- Brazilian": ["20", "GBP 30"],
    "Hot wax Ladies Waxing- Brazilian": ["20", "GBP 36"],
    "Strip Wax Ladies Waxing- Hollywood": ["20", "GBP 30"],
    "Hot wax Ladies Waxing- Hollywood": ["20", "GBP 36"],
    "Half Arm": ["15", "GBP 22"],
    "Full Arm": ["30", "GBP 32"],
    "Half leg": ["20", "GBP 22"],
    "Full leg": ["30", "GBP 32"]
  }
async function getRequests(){
    const query = window.location.search;          

    const params = new URLSearchParams(query);
const myId = params.get('myId');

    const response = await fetch('https://prestige-beauty-backend.vercel.app/getRequestsByUser', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          id: myId
      })
  });
  
  const resp = await response.json()
  
  console.log(resp)
  
  resp.forEach(request => {
    const myScrollRequests = document.getElementById('myScrollRequests')
    // <div class="w100 h22vh bcFourth br10px fShrink0 dGrid aiCenter gtr_1 gtc_r8 respPedi oHidden gap10 bsBorderBox pl10 pr10">
    const myRequest = document.createElement('div')
    myRequest.className = 'w100 h22vh bcFourth br10px fShrink0 dGrid aiCenter gtr_1 gtc_r8 respPedi oHidden gap10 bsBorderBox pl10 pr10'
  
    myRequest.innerHTML = `
     <!-- -------------SECCION PARA LA FECHA Y LA HORA ------------- -->
          <div class="w100 h100   dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10">
  
            <div class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
            ${request["SCHEDULE2_DATE"]}
            </div>
            <div class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
            
            ${request["SCHEDULE2_HOUR"]}
  
            </div>
  
          </div>
          <!-- ----------------PERSONA-------------- -->
          <div class="w100 h100  dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10 ">
            <div class="w80 h40 br5px bcFirst dFlex aiCenter jcCenter ff2 fw500 cWhite fs15 divHour bsBorderBox p10">User
            </div>
            <div class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
                      ${request["USR_NAME"]}
  
            </div>
          </div>
          <!-- --------------------SERVICIO-------- -->
          <div class="w100 h100  dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10 gc_span2">
            <div class="w80 h40 br5px bcFirst dFlex aiCenter jcCenter ff2 fw500 cWhite fs15 divHour bsBorderBox p10 ">
              Service</div>
            <div class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
                      ${request["SCHEDULE2_SUBSERVICE"]}
  
            </div>
          </div>
  
          <!-- ----------LINEA DIVISORA--- -->
           <div class="myLineR gc_span4  jcCenter aiCenter dNone">
            <div class=" w90 h5px br5px bcWhite "></div>
           </div>
           
          <!-- ---------------TIPO---------- -->
          <div class="w100 h100  dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10 gc_span2">
            <div class="w80 h40 br5px bcFirst dFlex aiCenter jcCenter ff2 fw500 cWhite fs15 divHour bsBorderBox p10 ">Type
            </div>
            <div class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
                      ${request["SCHEDULE2_TYPE"]}
  
            </div>
          </div>
          <!-- ------------MONEY AND TIME------- -->
          <div class="w100 h100  dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10 ">
            <div class="w80 h40 br5px bcFirst dFlex aiCenter jcCenter ff2 fw500 cWhite fs15 divHour  p10 ">
              Amount And Duration</div>
            <div
              class="w80 h40 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox  fdColumn">
              ${request["SCHEDULE2_MONEY"]}
  
              <div class="bcFirst line12 w80  bsBorderBox mt2 mb2"></div>
              ${newServicesJson[request["SCHEDULE2_TYPE"]][0]} min
            </div>
          </div>
          <!-- ----------------SPECIALIST--------- -->
          <div class="w100 h100  dFlex jcStart bsBorderBox pt15 aiCenter fdColumn gap10 ">
            <div class="w80 h20 br5px bcFirst dFlex aiCenter jcCenter ff2 fw500 cWhite fs15 divHour bsBorderBox p10 ">
              Specialist</div>
            <img src="../images/${myMembersImgs[request["SCHEDULE2_SPECIALIST_ID"]-1]}" class="myImg2 br50per b4_solid_white">
          </div>
    `
    myScrollRequests.appendChild(myRequest)
  })
  
  }
  const myMembersImgs = ['team_teresa.jpg', 'team_lucy-rose.jpg', 'team_amy.jpg', 'team_marni.jpg',  'team_holly.jpg', 'team_carly.jpg']
  
  getRequests()