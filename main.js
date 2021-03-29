
const ol = document.querySelector("ol");
const img = document.querySelector("img");
img.src = ["https://images-na.ssl-images-amazon.com/images/I/817gKCTGg4L._AC_UL115_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81z%2B5kDFfML._SX342_.jpg", "https://images-na.ssl-images-amazon.com/images/I/418lnoit6yL._AC_UL160_SR160,160_.jpg"];



const movies = [
    {
        name:"The Hunt for Red October",
        year: 1990,
        director: "John McTiernan",
        picture: "https://images-na.ssl-images-amazon.com/images/I/817gKCTGg4L._AC_UL115_.jpg",
         
    },
    {
        name: "Shaft",
        year: 2019,
        director:"Tim Story",
        picture: "https://images-na.ssl-images-amazon.com/images/I/81z%2B5kDFfML._SX342_.jpg",
    },
    {
        name: "The Hangover",
        year:  2008,
        director: "Todd Phillips",
        picture: "https://images-na.ssl-images-amazon.com/images/I/418lnoit6yL._AC_UL160_SR160,160_.jpg",
    },
];

const template = movies.map(movie => `

    <li>
        <p>Name: ${movie.name}</p>
        <p>Year:  ${movie.year}</p>
        <p>Director: ${movie.director}</p>   
        <p>Picture: ${img.src = "https://images-na.ssl-images-amazon.com/images/I/418lnoit6yL._AC_UL160_SR160,160_.jpg"}</p>
                
    </li>
  
`);

ol.innerHTML = template.join ('');

