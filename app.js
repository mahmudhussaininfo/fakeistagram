

const post_form = document.getElementById('post_add_form');
const msg = document.querySelector('.msg');
const allpost = document.querySelector('.allpost');


const getallpost = () => {
    let posts = readlsdata('insta_post');
    let list = '';

    posts.map(data => {
        list += `

        <div class="card-timline">
                        <div class="card">
                            <div class="card-body">
                                <div class="timeline-person">
                                    <div class="person-img">
                                        <img src="${data.aphoto}" alt="">
                                        <span>
                                            ${data.aname}
                                        </span>
                                        <i class="bi bi-three-dots"></i>
                                    </div>
                                    <div class="person-img-content pt-2">
                                        <img src="${data.pphoto}" alt="">
                                        <p> ${data.pcontent}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
        
        `
    })

    allpost.innerHTML = list;
}

getallpost();



post_form.onsubmit = (e) => {

    e.preventDefault();


    const form_Data = new FormData(e.target);
    const data = Object.fromEntries(form_Data.entries());
    const { aname, aphoto, pcontent, pphoto } = Object.fromEntries(form_Data.entries());

    if (!aname || !aphoto || !pcontent || !pphoto) {
        msg.innerHTML = setAlert('Not data found');
    } else {
        msg.innerHTML = setAlert('Data sumbited', 'green');
        createlsdata('insta_post', data);
        e.target.reset();
        getallpost();
    }





}