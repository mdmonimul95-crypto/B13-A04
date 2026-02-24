let interviewlist = [];
let rejectedlist = [];
let currentstatus = 'all';


let total = document.querySelector(".Total");
let interRigtotal = document.querySelector(".interRigtotal");
let reRigtotal = document.querySelector(".reRigtotal");
let righttotal = document.querySelector(".Righttotal");
let Righttotall = document.querySelector(".Righttotall");
let Righttotalll = document.querySelector(".Righttotalll");
let empty = document.querySelector(".empty");
let interview = document.getElementById('Interview');
let rejected = document.getElementById('Rejected'); 


let interRigtotalbox = document.querySelector('.interRigtotalbox')
let Righttotalbox = document.querySelector('.Righttotalbox')
let reterRigtotalllbox = document.querySelector('.interRigtotalllbox')

const allcardsection = document.getElementById('allcards');
// console.log(allcardsection.children.length)
const maincontriner = document.querySelector('main')
const filterSection = document.getElementById('filter-section')
const rejecteded = document.getElementById('rejecteded')
const allThrivingBtn = document.getElementById('all-thriving-btn')
const interviewThrivingBtn = document.getElementById('interview-thriving-btn')
const rejectedThrivingBtn = document.getElementById('rejected-thriving-btn')


function calculateCount(){

   interRigtotal.innerText = interviewlist.length;
   reRigtotal.innerText = rejectedlist.length;
   total.innerText = allcardsection.children.length;
   righttotal.innerText = allcardsection.children.length;
   Righttotall.innerText = allcardsection.children.length;
   Righttotalll.innerText = allcardsection.children.length;
   interview.innerText = interviewlist.length
   
   rejected.innerText = rejectedlist.length
   
}
   calculateCount()
 
   

function toggleStyle(id){
    allThrivingBtn.classList.add('bg-white','text-black')
    interviewThrivingBtn.classList.add('bg-white','text-black')
    rejectedThrivingBtn.classList.add('bg-white','text-black')

    allThrivingBtn.classList.remove('bg-[#2563eb]','text-white')
    interviewThrivingBtn.classList.remove('bg-[#2563eb]','text-white')
    rejectedThrivingBtn.classList.remove('bg-[#2563eb]','text-white')

    const selected = document.getElementById(id)
    currentstatus = id
    // console.log(currentstatus);

    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-[#2563eb]','text-white')
     empty.classList.add('hidden')

    if(id == 'interview-thriving-btn'){
      allcardsection.classList.add('hidden');
      rejecteded.classList.add('hidden')
      filterSection.classList.remove('hidden')
      // console.log(interRigtotalbox)
      interRigtotalbox.classList.remove('hidden')
      interRigtotalbox.classList.add('flex')
      Righttotalbox.classList.remove('flex')
      Righttotalbox.classList.add('hidden')
       reterRigtotalllbox.classList.remove('flex')
        reterRigtotalllbox.classList.add('hidden')
        // if( interviewlist.length === 0){
        //   empty.classList.remove('hidden')
        //  }
      // console.log(interRigtotalbox)
      renderInterview()
    }else if( id == "all-thriving-btn"){
       allcardsection.classList.remove('hidden')
      filterSection.classList.add('hidden')
      rejecteded.classList.add('hidden')
       Righttotalbox.classList.remove('hidden')
       Righttotalbox.classList.add('flex')
       interRigtotalbox.classList.remove('flex')
       interRigtotalbox.classList.add('hidden')
        reterRigtotalllbox.classList.remove('flex')
        reterRigtotalllbox.classList.add('hidden')
         empty.classList.add('hidden')
        //   if(allcardsection.children.length === 0){
        //   empty.classList.remove('hidden')
        //  }

    }else if(id=='rejected-thriving-btn'){
        allcardsection.classList.add('hidden')
       filterSection.classList.add('hidden')
       rejecteded.classList.remove('hidden')
       interRigtotalbox.classList.remove('flex')
       interRigtotalbox.classList.add('hidden')
        Righttotalbox.classList.remove('flex')
        Righttotalbox.classList.add('hidden')
        reterRigtotalllbox.classList.add('flex')
        reterRigtotalllbox.classList.remove('hidden')
         empty.classList.add('hidden')
          // if(rejectedlist.length === 0){
          // empty.classList.remove('hidden')
          //  }
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
    

    const el = parentNode.querySelector('.notapplied')

     el.innerText = 'Interview'
     el.classList.remove('bg-[#EEF4FF]','px-2','text-black','border-[#EEF4FF]','border-2')
     
      el.classList.remove('bg-red-100', 'text-red-500','border-red-500','border-2')
      el.classList.add('bg-green-100', 'text-green-500','border-green-500','border-2','px-5')
    
    // parentNode.querySelector('.notapplied').innerText ='Interview'

 
 const cardinfo ={
    companyName,
    jobPosition,
    salaryIdea,
    notApplied:'Interview',
    // notApplied,
    fectur,
    buttondown,


 }

 const companyExist = interviewlist.find(item=> item.companyName==cardinfo.companyName)

 
 

 if(!companyExist){
   interviewlist.push(cardinfo) 
 }
  // console.log(interviewlist)
    renderInterview();
 rejectedlist = rejectedlist.filter(item=> item.companyName!=cardinfo.companyName)
//  console.log(rejectedlist)
 if(currentstatus =='rejected-thriving-btn'){
      renderRejected()
 }
   calculateCount()

   }
   console.log(event.target)
   if(event.target.classList.contains('rejectedBtn')){
    console.log('rejected')
     const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobPosition = parentNode.querySelector('.jobposition').innerText
   
    const salaryIdea = parentNode.querySelector('.salary').innerText
    const notApplied = parentNode.querySelector('.notapplied').innerText
    const fectur = parentNode.querySelector('.fectur').innerText
    const buttondown  = parentNode.querySelector('.buttondown').innerText
    

    const el = parentNode.querySelector('.notapplied')

     el.innerText = 'Rejected'
     el.classList.remove('bg-[#EEF4FF]','px-2','text-black','border-[#EEF4FF]','border-2')
      el.classList.remove('bg-green-100','text-green-500','border-green-500','border-2')
     el.classList.add('bg-red-100', 'text-red-500','border-red-500','border-2','px-5')
    
    // parentNode.querySelector('.notapplied').innerText ='Rejected'
   
 
 const cardinfo ={
    companyName,
    jobPosition,
    salaryIdea,
    notApplied:'Rejected',
    fectur,
    buttondown,
 }

 const companyExist = rejectedlist.find(item => item.companyName == cardinfo.companyName)

 if(!companyExist){
   rejectedlist.push(cardinfo) 
 }
 console.log(rejectedlist)
   renderRejected()
  interviewlist = interviewlist.filter(item => item.companyName != cardinfo.companyName)

  if(currentstatus == 'interview-thriving-btn'){
    renderInterview();
  }

    calculateCount()
   }

})
//  function toggleStylebtn(id){
   

//     const interbtnselect = document.getElementById(id)
     

//     interbtnselect .classList.remove('bg-[#EEF4FF]','text-black')
//     interbtnselect.classList.add('bg-white','text-green-500','border-2 border-green-500')
//   }

function renderInterview(){
  if( interviewlist.length === 0){
          empty.classList.remove('hidden')
         }
    filterSection.innerHTML = ''
    for(let interview of interviewlist){

        // console.log(interview);
        //  let statusClass = ""

        //   if (interview.notApplied === "Interview") {
        //    statusClass = "border-2 border-green-500 text-green-500"
        //    }
        //    else if (interview.notApplied === "Rejected") {
        //    statusClass = "border-2 border-red-500 text-red-500"
        //    }
        //    else {
        //      statusClass = "border-2 border-[#EEF4FF] text-black"
        //     }

        let div = document.createElement('div');
        div.className ='bg-white p-5  rounded-sm '
        div.innerHTML = `
        <div class="  flex justify-between">
            <div>
              <p class="companyName font-semibold text-2xl my-2">${interview.companyName}</p>
              <p class="my-2 jobposition">${interview.jobPosition}</p>
            </div>
            
            <button class="p-1 border-1  rounded-full  border-gray-300  py-1 my-7 "  onclick="deleteCard(this)">
            
             <img src="/Trash.png" alt="delete">
           </button>
          </div>
          <div class="salary my-2">
          ${interview.salaryIdea}
          </div>
          <div class="notapplied bg-green-100 text-green-500 px-5 pb-1  border-2  border-green-500  my-2 py1  w-[120px] text-[110%] font-semibold rounded-lg  ">
            ${interview.notApplied}
         </div>
         <div class="fectur my-2"> 
          ${interview.fectur}
         </div>
         <div class="buttondown  flex gap-3">
          <div class="interviewBtn  border-2 border-green-500 text-green-500 px-4  rounded text-2xl pb-1" >Interview</div>
          <div class="rejectedBtn border-2 border-red-500 text-red-500 px-4 rounded text-2xl pb-1" >Rejected</div>
        </div>`
        filterSection.appendChild(div)
        
    }
}

function renderRejected(){
  if( rejectedlist.length === 0){
          empty.classList.remove('hidden')
         }
    rejecteded.innerHTML = ''
    for(let rejected of rejectedlist){
        // console.log(interview);
        let div = document.createElement('div');
        div.className ='bg-white p-5  rounded-sm '
        div.innerHTML = `
        <div class="  flex justify-between">
            <div>
            <p class="companyName font-semibold text-2xl my-2">${rejected.companyName}</p>
            <p class="my-2 jobposition">${rejected.jobPosition}</p>
           </div>
           
           <button class="p-1 border-1  rounded-full  border-gray-300  py-1 my-7 "  onclick="deleteCard(this)">
            
             <img src="/Trash.png" alt="delete">
           </button>
          </div>
          <div class="salary my-2">
          ${rejected.salaryIdea}
          </div>
          <div class="notapplied bg-red-100 px-5 pb-1  text-red-500  border-2  border-red-500  my-2 py1  w-[120px] text-[110%] font-semibold rounded-lg  ">
            ${rejected.notApplied}
         </div>
         <div class="fectur my-2">
          ${rejected.fectur}
         </div>
         <div class="buttondown  flex gap-3">
          <div class="interviewBtn  border-2 border-green-500 text-green-500 px-4  rounded text-2xl pb-1" >Interview</div>
          <div class="rejectedBtn  border-2 border-red-500 text-red-500 px-4 rounded text-2xl pb-1" >Rejected</div>
        </div>`
        rejecteded.appendChild(div)
        
    }
}