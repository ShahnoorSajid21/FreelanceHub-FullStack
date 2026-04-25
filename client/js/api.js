function doTheFetch(url, method = 'GET', body = null) {
  let opts = { method: method }
   if (body) {
    opts.headers = { "Content-Type": "application/json" }
    opts.body = JSON.stringify(body)
  }
  return fetch(url, opts).then(function (res) {
    if (!res.ok) {
      throw new Error("status " + res.status)
    }
      return res.json()
  })
}

function getServices(params = {}) {
  var theQ = new URLSearchParams()
  for (var k in params) {
      if (params[k] !== "" && params[k] !== null && params[k] !== undefined) {
      theQ.append(k, params[k])
    }
  }
  var qs = theQ.toString()
  var u = '/api/services'
  if (qs) {
    u = '/api/services?' + qs
  }
   return doTheFetch(u)
}

const getOneService = async (id) => {
    let data = await doTheFetch('/api/services/' + id)
  return data
}

function saveIt(id) {
  return doTheFetch("/api/save", "POST", { id: id })
}

function hireIt(id) {
    return doTheFetch('/api/hire', "POST", { id })
}

const getSavedOnes = () => {
  return doTheFetch("/api/saved")
}

const getHiredOnes = () => doTheFetch('/api/hired')

window.doTheFetch = doTheFetch
window.getServices = getServices
window.getOneService = getOneService
window.saveIt = saveIt
window.hireIt = hireIt
window.getSavedOnes = getSavedOnes
window.getHiredOnes = getHiredOnes
