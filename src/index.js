// your code here
const commentListElement = document.getElementById('comment-list')
commentListElement.innerHTML = ""
const hotelListElement = document.getElementById('hotel-list')
hotelListElement.innerHTML = ""

fetch('http://localhost:3000/hotels')
.then(response => response.json())
.then(hotels => {
    displayHotelDetails(hotels[0])

    hotels.forEach(hotel => {
        const liElement = document.createElement('li')
        liElement.textContent = hotel.name
        hotelListElement.appendChild(liElement)
    })
})

function displayHotelDetails(hotel){
    const hotelNameElement = document.getElementById('hotel-name')
    hotelNameElement.textContent = hotel.name
    const hotelImageElement = document.getElementById('hotel-image')
    hotelImageElement.src = hotel.image_url
    const hotelDescriptionElement = document.getElementById('hotel-description')
    hotelDescriptionElement.textContent = hotel.description

    hotel.comments.forEach(comment => {
        addComment(comment)
    })
}

function addComment(comment){
    const liElement = document.createElement('li')
    liElement.textContent = comment
    commentListElement.appendChild(liElement)
}

const commentFormElement = document.getElementById('comment-form')
commentFormElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentTextAreaElement = document.getElementById('comment')
    addComment(commentTextAreaElement.value)
})