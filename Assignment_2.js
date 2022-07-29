const arr = [
  "Paris-Skopje",
  "Zurich-Amsterdam",
  "Prague-Zurich",
  "Barcelona-Berlin",
  "Kiev-Prague",
  "Skopje-Paris",
  "Amsterdam-Barcelona",
  "Berlin-Kiev",
  "Berlin-Amsterdam",
];

const routeMap = {};
arr.forEach((route) => {
  const [from, to] = route.split("-");
  routeMap[from] = to;
});
let start = "Kiev";
const visitedRoute = [];
while (!visitedRoute.includes(start)) {
  visitedRoute.push(start);
  start = routeMap[start];
}
console.log(visitedRoute);
