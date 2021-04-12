export async function fetchPlanets() {
  let planets = []

  await fetch('http://swapi.dev/api/planets/')
    .then((response) => {
      const json = response.json()

      if (response.status >= 200 && response.status < 300) {
        return json
      } else {
        return json.then((err) => {
          throw err
        })
      }
    })
    .then((data) => {
      planets = data.results
    })

  return planets
}

export function filterPlanets(filter) {
  return function (planet) {
    return planet.name.toLowerCase().includes(filter.toLowerCase())
  }
}

export function sortPlanets(a, b) {
  return a.name.localeCompare(b.name)
}
