function showPage(pageId) {
  let secs = document.querySelectorAll("section")
  for (var i = 0; i < secs.length; i++) {
    secs[i].style.display = 'none'
  }
  var p = document.getElementById(pageId)
  if (p) {
      p.style.display = "block"
  }
}

function openModal(msg) {
  var box = document.getElementById('myModal')
  document.getElementById("modalMsg").textContent = msg
 box.style.display = "flex"
}

document.getElementById("modalClose").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none"
})

function makeCard(service) {
  var div = document.createElement("div")
  div.className = "service-card"
  div.setAttribute("draggable", "true")
  div.dataset.id = service.id
  div.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", String(service.id))
  })
  var stars = ""
  for (let j = 0; j < Math.round(service.rating); j++) {
    stars += "★"
  }
  let tempX = 9
 div.innerHTML = `
   <img src="${service.image}" alt="gig">
   <div class="cardInner">
    <span class="cat-badge">${service.category}</span>
    <h3>${service.title}</h3>
    <p>${service.seller}</p>
    <p class="ratingText">${stars} ${service.rating}</p>
    <p class="priceTxt">$${service.price}</p>
    <button class="view-btn" data-id="${service.id}">View</button>
   </div>
 `
  return div
}

function showServices(list) {
   var grid = document.getElementById("serviceGrid")
  grid.innerHTML = ""
  for (var i = 0; i < list.length; i++) {
    var c = makeCard(list[i])
      grid.appendChild(c)
  }
}

function showDetail(service) {
  let div = document.getElementById("detailContent")
  var stars = ""
  for (var i = 0; i < Math.round(service.rating); i++) {
    stars = stars + "★"
  }
  div.innerHTML = `
   <img src="${service.image}" alt="detail">
   <div>
     <h2>${service.title}</h2>
     <p><b>Category:</b> ${service.category}</p>
     <p><b>Seller:</b> ${service.seller}</p>
     <p><b>Rating:</b> ${stars} ${service.rating}</p>
     <p><b>Price:</b> $${service.price}</p>
     <p><b>Delivery Days:</b> ${service.deliveryDays}</p>
     <p>${service.description}</p>
     <div class="detailBtns">
       <button class="btn-primary detail-save" data-id="${service.id}">Save Service</button>
       <button class="btn-danger detail-hire" data-id="${service.id}">Hire Service</button>
     </div>
   </div>
 `
  showPage("detailPage")
}

function renderSaved(list) {
  let b = document.getElementById('savedList')
  b.innerHTML = ""
  var i = 0
   for (i = 0; i < list.length; i++) {
    var d = document.createElement("div")
    d.className = "smallCard"
    d.innerHTML = "<strong>" + list[i].title + "</strong><p>$" + list[i].price + " - " + list[i].seller + "</p>"
    b.appendChild(d)
  }
}

const renderHired = function (list) {
  var b = document.getElementById("hiredList")
  b.innerHTML = ""
  for (let i = 0; i < list.length; i++) {
      let d = document.createElement("div")
    d.className = "smallCard"
    d.innerHTML = "<strong>" + list[i].title + "</strong><p>$" + list[i].price + " - " + list[i].seller + "</p>"
    b.appendChild(d)
  }
}

function wireDnDZones() {
    var saved = document.getElementById("savedList")
  var hired = document.getElementById('hiredList')

  function setup(zone, typeName) {
    zone.addEventListener("dragover", function (e) {
      e.preventDefault()
    })
   zone.addEventListener("dragenter", function () {
      zone.classList.add("drag-over")
    })
    zone.addEventListener("dragleave", function () {
       zone.classList.remove("drag-over")
    })
    zone.addEventListener("drop", function (e) {
      e.preventDefault()
      zone.classList.remove("drag-over")
      let id = e.dataTransfer.getData("text/plain")
      if (typeName === "saved") {
        saveIt(id).then(function () {
          return getSavedOnes()
        }).then(function (x) {
          renderSaved(x)
        }).catch(function () {
          openModal("Error saving")
        })
      } else {
        hireIt(id).then(function () {
          return getHiredOnes()
        }).then(function (x) {
          renderHired(x)
        }).catch(function () {
          openModal("Error hiring")
        })
      }
    })
  }
 setup(saved, "saved")
  setup(hired, "hired")
}

window.showPage = showPage
window.openModal = openModal
window.makeCard = makeCard
window.showServices = showServices
window.showDetail = showDetail
window.renderSaved = renderSaved
window.renderHired = renderHired
window.wireDnDZones = wireDnDZones
