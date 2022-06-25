let homeCount = 0
let guestCount = 0
let displayHome = document.getElementById('display-h')
let displayGuest = document.getElementById('display-g')
let livehomeTotal = document.getElementById('live-home-total')
let liveguestTotal = document.getElementById('live-guest-total')

document.getElementById('h1').addEventListener('click', () => {
    console.log('h1')
    homeCount += 1
    displayHome.innerHTML = homeCount
    tracking()
})
document.getElementById('h2').addEventListener('click', () => {
    console.log('h2')
    homeCount += 2
    displayHome.innerHTML = homeCount
    tracking()

})
document.getElementById('h3').addEventListener('click', () => {
    console.log('h3')
    homeCount += 3
    displayHome.innerHTML = homeCount
    tracking()

})
document.getElementById('h4').addEventListener('click', () => {
    console.log('h4')
    homeCount -= 1
    displayHome.innerHTML = homeCount
    tracking()

})


// guest

document.getElementById('g1').addEventListener('click', () => {
    console.log('g1')
    guestCount += 1
    displayGuest.innerHTML = guestCount
    tracking()

})
document.getElementById('g2').addEventListener('click', () => {
    console.log('g2')
    guestCount += 2
    displayGuest.innerHTML = guestCount
    tracking()

})
document.getElementById('g3').addEventListener('click', () => {
    console.log('g3')
    guestCount += 3
    displayGuest.innerHTML = guestCount
    tracking()

})
document.getElementById('g4').addEventListener('click', () => {
    console.log('g4')
    guestCount -= 1
    displayGuest.innerHTML = guestCount
    tracking()

})





function tracking() {

    if (homeCount > guestCount) {

        console.log('home is leader')
        livehomeTotal.innerHTML = ` <p style="color:green;" id="display-h">${homeCount}</p>`
        liveguestTotal.innerHTML = ` <p id="display-h">${guestCount}</p>`

    } else if (guestCount > homeCount) {

        console.log('guest in leader')
        liveguestTotal.innerHTML = ` <p style="color:green;" id="display-h">${guestCount}</p>`
        livehomeTotal.innerHTML = ` <p id="display-h">${homeCount}</p>`

    } else {
        console.log('Equal')
        liveguestTotal.innerHTML = ` <p id="display-h">${guestCount}</p>`
        livehomeTotal.innerHTML = ` <p id="display-h">${homeCount}</p>`
    }
}



document.getElementById('reset').addEventListener('click', () => {
    location.reload();
})