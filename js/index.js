let bookedSeat=[];
const seatParent=document.getElementById("seat-parent");
const totalPriceContainer=document.getElementById("totalPrice");
const ticketTable=document.getElementById("ticketTable");
const copunField=document.getElementById("copun");
const copunContainer=document.getElementById("copun-container");
const copunApplyBtn=document.getElementById("copun-apply-btn");


const bookSeat=(e)=>{
    if ( e.target.className.includes("seat")) {
        appendSeat(e,e.target.id)
    }  
}

const totalPrice=()=>{
    return bookedSeat.length*550
}
const appendSeat=(e,id)=>{
    if ((!bookedSeat.includes(id)) && bookedSeat.length<4) {
        bookedSeat.push(id);
        e.target.style.backgroundColor="#1DD100"
        const tr=document.createElement("tr");
    tr.classList.add("text-secondary");
    tr.innerHTML=`
    <td>${id}</td>
  <td>Economy</td>
  <td>550</td>
    `
    ticketTable.appendChild(tr)
    let total=totalPrice(id)
    setTotalPrice(total)
    
        
    }
    

}

const copunCode=()=>{
    console.log("object");
    console.log(bookedSeat.length);
    console.log(copunField.value);
    if (bookedSeat.length==4 && copunField.value==="NEW15") {
        copunContainer.classList.add("hidden")
    }
}

const setTotalPrice=(price)=>{
    totalPriceContainer.innerText=price;

}



seatParent.addEventListener("click",bookSeat)
copunApplyBtn.addEventListener("click",copunCode)
