let items = [
  {
    id: 1,
    name: 'Gorillas',
    count: 4
  },
  {
    id: 2,
    name: 'Zebra',
    count: 14
  },
  {
    id: 3,
    name: 'Meercats',
    count: 26
  }
]

const all = () => items.slice().sort((a, b) => {
  if (a.name < b.name) {
    return -1
  }
  else if (a.name > b.name) {
    return 1
  }
  else {
    return 0
  }
})

const find = (id) => {
  const index = parseInt(id, 10)
  return items[index]
}

const search = (query) => {
  query = query.toLowerCase()
  return items.filter(item => {
    return item.name.toLowerCase().indexOf(query) !== -1
  })
}

module.exports = { all, find, search }