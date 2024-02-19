// all needed variables
let bookedSeat=[];
const seatParent=document.getElementById("seat-parent");
const totalPriceContainer=document.getElementById("totalPrice");
const ticketTable=document.getElementById("ticketTable");
const copunField=document.getElementById("copun");
const copunContainer=document.getElementById("copun-container");
const copunApplyBtn=document.getElementById("copun-apply-btn");
const bookedSeatCount=document.getElementById("bookedSeatCount");






// process to append tr and related functionality
const appendSeat=(id)=>{ 
    if ((!bookedSeat.includes(id)) && bookedSeat.length<4) {
        bookedSeat.push(id);
        document.getElementById(id).style.backgroundColor="#1DD100"
        const tr=document.createElement("tr");
        tr.classList.add("text-secondary");
        tr.innerHTML=`
        <td>${id}</td>
        <td>Economy</td>
        <td>550</td>
        `
        ticketTable.appendChild(tr) 
    }
}

// setTotal price on totalPriceContainer
const setTotalPrice=(price)=>{
    totalPriceContainer.innerText=price;
}
// total price calculation
const totalPrice=()=>{
    return bookedSeat.length*550
}
// update Available seat
function UpdateAvailableSeat() {
    let available=40-bookedSeat.length;
    document.getElementById("available-seat").innerText=available;
}

// updateBookedSeatCount
function updateBookedSeatCount() {
    bookedSeatCount.innerText=bookedSeat.length;
}

// //grand total
// const grandTotal=(copun15,copun20)=>{
//     let total=totalPrice();
//       if (copun15) {
//        return total*(85/100);
        
//       }
//       if (copun20) {
//         return total*(85/100);
//       }
//  return total;
// }

// What happened when someone clicked on apply copun
const handleCopunCode=()=>{
    if (bookedSeat.length==4 && copunField.value==="NEW15") {
        copunContainer.classList.add("hidden")
    }
}
// What happened when someone booked a seat
const bookSeat=(e)=>{
    if ( e.target.className.includes("seat")) {
        appendSeat(e.target.id);
        UpdateAvailableSeat();
        updateBookedSeatCount();
        setTotalPrice(totalPrice(e.target.id));   
         // copun code functionality
         if (bookedSeat.length===4) {
            copunApplyBtn.removeAttribute('disabled');  
        }
    }  
}
// Event listner for seat booking and copun apply
copunApplyBtn.addEventListener("click",handleCopunCode)
seatParent.addEventListener("click",bookSeat)
