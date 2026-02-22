let interviewlist = [];
let rejectedlist = [];
let currentstatus = 'all'

let total = document.getElementById('Total');
let interview = document.getElementById('Interview');
let rejected = document.getElementById('Rejected'); 

const allcardsection = document.getElementById('allcards');
const maincontriner = document.querySelector('main')
const filterSection = document.getElementById('filter-section')

const allThrivingBtn = document.getElementById('all-thriving-btn')
const interviewThrivingBtn = document.getElementById('interview-thriving-btn')
const rejectedThrivingBtn = document.getElementById('rejected-thriving-btn')


function calculateCount(){
   total.innerText = allcardsection.children.length;
   interview.innerText = interviewlist.length
   
   rejected.innerText = rejectedlist.length
}


function toggleStyle(id){
    allThrivingBtn.classList.add('bg-white','text-black')
    interviewThrivingBtn.classList.add('bg-white','text-black')
    rejectedThrivingBtn.classList.add('bg-white','text-black')

    allThrivingBtn.classList.remove('bg-[#2563eb]','text-white')
    interviewThrivingBtn.classList.remove('bg-[#2563eb]','text-white')
    rejectedThrivingBtn.classList.remove('bg-[#2563eb]','text-white')

    const selected = document.getElementById(id)
    currentstatus = id

    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-[#2563eb]','text-white')

    if(id == 'interview-thriving-btn'){
      allcardsection.classList.add('hidden')
      filterSection.classList.remove('hidden')
      renderInterview()
    }else if( id == "all-thriving-btn"){
       allcardsection.classList.remove('hidden')
      filterSection.classList.add('hidden')
    }else if(id=='rejected-thriving-btn'){
        allcardsection.classList.add('hidden')
       filterSection.classList.remove('hidden')
       renderRejected();
    }
}

maincontriner.addEventListener('click',function(event){
   if(event.target.classList.contains('interviewBtn')){
     const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobPosition = parentNode.querySelector('.jobposition').innerText
   
    const salaryIdea = parentNode.querySelector('.salary').innerText
    const notApplied = parentNode.querySelector('.notapplied').innerText
    const fectur = parentNode.querySelector('.fectur').innerText
    const buttondown  = parentNode.querySelector('.buttondown').innerText
    
    parentNode.querySelector('.notapplied').innerText ='Interview'

 
 const cardinfo ={
    companyName,
    jobPosition,
    salaryIdea,
    notApplied:'Interview',
    fectur,
    buttondown,


 }

 const companyExist = interviewlist.find(item=> item.companyName==cardinfo.companyName)

 
 

 if(!companyExist){
   interviewlist.push(cardinfo) 
 }
  calculateCount()
 rejectedlist = rejectedlist.filter(item=> item.companyName!=cardinfo.companyName)
 if(currentstatus =='rejected-thriving-btn'){
      renderRejected()
 }
 

   }else if(event.target.classList.contains('rejectedBtn')){
     const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobPosition = parentNode.querySelector('.jobposition').innerText
   
    const salaryIdea = parentNode.querySelector('.salary').innerText
    const notApplied = parentNode.querySelector('.notapplied').innerText
    const fectur = parentNode.querySelector('.fectur').innerText
    const buttondown  = parentNode.querySelector('.buttondown').innerText
    
    parentNode.querySelector('.notapplied').innerText ='Rejected'

 
 const cardinfo ={
    companyName,
    jobPosition,
    salaryIdea,
    notApplied:'Rejected',
    fectur,
    buttondown,


 }

 const companyExist = rejectedlist.find(item=> item.companyName==cardinfo.companyName)

 
 

 if(!companyExist){
   rejectedlist.push(cardinfo) 
 }
  calculateCount()
  interviewlist = interviewlist.filter(item=> item.companyName!=cardinfo.companyName)
  if(currentstatus =='interview-thriving-btn'){
    renderInterview();
  }


   }

})
//  function toggleStylebtn(id){
   

//     const interbtnselect = document.getElementById(id)
     

//     interbtnselect .classList.remove('bg-[#EEF4FF]','text-black')
//     interbtnselect.classList.add('bg-white','text-green-500','border-2 border-green-500')
//   }

function renderInterview(){
    filterSection.innerHTML = ''
    for(let interview of interviewlist){
        // console.log(interview)
        let div = document.createElement('div');
        div.className ='bg-white p-5  rounded-sm '
        div.innerHTML = `
        <div class="  flex justify-between">
            <div>
            <p class=" font-semibold text-2xl my-2">${interview.companyName}</p>
            <p class="my-2">${interview.jobPosition}</p>
           </div>
           <div class="p-1 border-1  rounded-full  border-gray-300  py-1 my-7 ">
            
             <img src="/Trash.png" alt="delete">
           </div>
          </div>
          <div class="salary my-2">
          ${interview.salaryIdea}
          </div>
          <div class="notapplied bg-[#EEF4FF] px-2 pb-1  my-2 py1 w-[15%] text-2xl font-semibold rounded-lg  ">
            ${interview.notApplied}
         </div>
         <div class="fectur my-2">
          ${interview.fectur}
         </div>
         <div class="buttondown  flex gap-3">
          <div class="border-2 border-green-500 text-green-500 px-4  rounded text-2xl pb-1" >interview</div>
          <div class="border-2 border-red-500 text-red-500 px-4 rounded text-2xl pb-1" >Rejected</div>
        </div>`
        filterSection.appendChild(div)
        
    }
}

function renderRejected(){
    filterSection.innerHTML = ''
    for(let rejected of rejectedlist){
        // console.log(interview)
        let div = document.createElement('div');
        div.className ='bg-white p-5  rounded-sm '
        div.innerHTML = `
        <div class="  flex justify-between">
            <div>
            <p class=" font-semibold text-2xl my-2">${rejected.companyName}</p>
            <p class="my-2">${rejected.jobPosition}</p>
           </div>
           <div class="p-1 border-1  rounded-full  border-gray-300  py-1 my-7 ">
            
             <img src="/Trash.png" alt="delete">
           </div>
          </div>
          <div class="salary my-2">
          ${rejected.salaryIdea}
          </div>
          <div class="notapplied bg-[#EEF4FF] px-2 pb-1  my-2 py1 w-[15%] text-2xl font-semibold rounded-lg  ">
            ${rejected.notApplied}
         </div>
         <div class="fectur my-2">
          ${rejected.fectur}
         </div>
         <div class="buttondown  flex gap-3">
          <div class="border-2 border-green-500 text-green-500 px-4  rounded text-2xl pb-1" >interview</div>
          <div class="border-2 border-red-500 text-red-500 px-4 rounded text-2xl pb-1" >Rejected</div>
        </div>`
        filterSection.appendChild(div)
        
    }
}