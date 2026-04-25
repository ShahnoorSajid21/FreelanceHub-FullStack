var allTheData = []
let currentDetailId = null
var uselessThing = "x"

document.addEventListener("DOMContentLoaded", function () {
  showPage("homePage")
  getServices().then(function (data) {
    allTheData = data
    showServices(data)
  }).catch(function () {
    openModal("Could not load services")
  })
  wireDnDZones()
})

document.getElementById("homeLink").addEventListener("click", function (e) {
 e.preventDefault()
  showPage('homePage')
})

document.getElementById("servicesLink").addEventListener("click", function (e) {
	e.preventDefault()
  showPage("servicesPage")
  getServices().then((d) => {
    showServices(d)
  })
})

document.getElementById("dashboardLink").addEventListener("click", function (e) {
   e.preventDefault()
  showPage("dashboardPage")
  document.getElementById("savedList").style.display = "block"
  document.getElementById("hiredList").style.display = "none"
  getSavedOnes().then(function (x) {
    renderSaved(x)
  })
  getHiredOnes().then(function (x) {
    renderHired(x)
  })
})

document.getElementById("browseBtn").addEventListener("click", function () {
  showPage("servicesPage")
  getServices().then(function (d) {
    showServices(d)
  })
})

document.getElementById("searchBtn").addEventListener("click", function () {
  doSearchNow()
})

document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    doSearchNow()
  }
})

function doSearchNow() {
  var val = document.getElementById("searchInput").value
  getServices({ search: val }).then(function (data) {
      showServices(data)
  }).catch(function () {
    openModal("Search error")
  })
}

document.getElementById("applyFilters").addEventListener("click", function () {
  var category = document.getElementById("categorySelect").value
  var minPrice = document.getElementById("minPrice").value
  let maxPrice = document.getElementById("maxPrice").value
  var minRating = document.getElementById("minRating").value
  var sort = document.getElementById("sortSelect").value

  const params = { category, minPrice, maxPrice, minRating, sort }
  getServices(params).then(function (x) {
   showServices(x)
  }).catch(function () {
    openModal("Filter error")
  })
})

document.getElementById("serviceGrid").addEventListener("click", function (e) {
  if (e.target.classList.contains("view-btn")) {
    let id = e.target.getAttribute("data-id")
    getOneService(id).then(function (service) {
      currentDetailId = service.id
      showDetail(service)
    }).catch(function () {
      openModal("Detail error")
    })
  }
})

document.getElementById("detailContent").addEventListener("click", function (e) {
  if (e.target.classList.contains("detail-save")) {
    var id = e.target.getAttribute("data-id")
    saveIt(id).then(function () {
      openModal("Service saved!")
    }).catch(function () {
      openModal('Error saving')
    })
  }
  if (e.target.classList.contains("detail-hire")) {
    var id2 = e.target.getAttribute("data-id")
    hireIt(id2).then(function () {
      openModal("Service hired!")
    }).catch(function () {
      openModal("Error hiring")
    })
  }
})

document.getElementById("backBtn").addEventListener("click", function () {
  showPage("servicesPage")
})

document.getElementById("savedTab").addEventListener("click", function () {
  document.getElementById("savedTab").classList.add("active")
  document.getElementById("hiredTab").classList.remove("active")
  document.getElementById("savedList").style.display = "block"
  document.getElementById("hiredList").style.display = "none"
  getSavedOnes().then(function (x) {
    renderSaved(x)
  })
})

document.getElementById("hiredTab").addEventListener("click", function () {
 document.getElementById("hiredTab").classList.add("active")
  document.getElementById("savedTab").classList.remove("active")
  document.getElementById("hiredList").style.display = "block"
  document.getElementById("savedList").style.display = "none"
  getHiredOnes().then(function (x) {
    renderHired(x)
  })
})

document.getElementById("saveBtnTop").addEventListener("click", function () {
  if (currentDetailId) {
    saveIt(currentDetailId).then(function () {
      openModal("Service saved!")
    }).catch(function () {
      openModal("Error saving")
    })
  } else {
    openModal("Open a service first")
  }
})

document.getElementById("hireBtnTop").addEventListener("click", function () {
  if (currentDetailId) {
    hireIt(currentDetailId).then(function () {
      openModal("Service hired!")
    }).catch(function () {
      openModal("Error hiring")
    })
  } else {
    openModal("Open a service first")
  }
})
