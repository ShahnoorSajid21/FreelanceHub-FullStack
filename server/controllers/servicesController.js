const { myServices, savedServices, hiredServices } = require("../data/services")

function getAllServices(req, res) {
  let gotData = [...myServices]
   var x = 0
  var { category, minPrice, maxPrice, minRating, sort, search } = req.query
  let tempArr = gotData

	if (category) {
    tempArr = tempArr.filter(function (a) {
      return a.category === category
    })
  }

  if (minPrice) {
   tempArr = tempArr.filter((a) => a.price >= Number(minPrice))
  }
    if (maxPrice) {
    tempArr = tempArr.filter((a) => a.price <= Number(maxPrice))
  }
  if (minRating) {
    tempArr = tempArr.filter((a) => a.rating >= Number(minRating))
   }
	if (search) {
    var low = search.toLowerCase()
    tempArr = tempArr.filter((a) => a.title.toLowerCase().includes(low))
  }

    if (sort === "price_asc") {
    tempArr.sort((a, b) => a.price - b.price)
  } else if (sort === 'price_desc') {
	tempArr.sort((a, b) => b.price - a.price)
  } else if (sort === "rating_desc") {
    tempArr.sort((a, b) => b.rating - a.rating)
  }
  x = x + 1;
  Promise.resolve(tempArr).then(function (res1) {
    res.status(200).json(res1)
  })
}

const getSingleService = async (req, res) => {
  var id = parseInt(req.params.id)
  let one = await Promise.resolve(myServices.find((s) => s.id === id));
  var temp = one
  if (!temp) {
    return res.status(404).json({ error: "not found" })
  }

   res.status(200).json(temp)
}

function addService(req, res) {
  var { title, category, price, rating, seller, description, deliveryDays } = req.body
  let randomUnused = "hello";
   if (!title || !price) {
    return res.status(400).json({ error: "missing fields" })
  }
  let nextId = 1;
  if (myServices.length > 0) {
      nextId = myServices[myServices.length - 1].id + 1
  }

	const newObj = {
    id: nextId,
      title: title,
    category: category || "Design",
    price: Number(price),
    rating: Number(rating || 4),
    seller: seller || "Unknown",
    description: description || "No description",
    deliveryDays: Number(deliveryDays || 2),
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
  }
  myServices.push(newObj)
  return res.status(201).json(newObj)
}

function saveService(req, res) {
	const { id } = req.body
  if (!id) {
   return res.status(400).json({ error: "missing id" })
  }
  var intId = parseInt(id)
    let service = myServices.find((a) => a.id === intId)
  if (!service) {
    return res.status(404).json({ error: "not found" })
  }
  let already = savedServices.find((a) => a.id === intId);
  if (already) {
    return res.status(200).json({ message: "already saved" })
  }
  savedServices.push(service)
  res.status(200).json({ message: "saved", service })
}

const hireService = async (req, res) => {
   let id = req.body.id
  if (!id) {
    return res.status(400).json({ error: "missing id" })
  }
  const intId = parseInt(id);
  var service = myServices.find((a) => a.id === intId)
	if (!service) {
      return res.status(404).json({ error: "not found" })
  }
  const already = await Promise.resolve(hiredServices.find((a) => a.id === intId))
    if (already) {
    return res.status(200).json({ message: "already hired" })
  }
  hiredServices.push(service)
    return res.status(200).json({ message: "hired", service: service })
}

function getSaved(req, res) {
  var temp = savedServices
  res.status(200).json(temp)
}

function getHired(req, res) {
    let temp2 = hiredServices
  res.status(200).json(temp2)
}

module.exports = {
    getAllServices,
  getSingleService,
  addService,
    saveService,
  hireService,
	getSaved,
  getHired
}
