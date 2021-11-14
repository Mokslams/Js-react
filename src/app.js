import axios from "axios";



//calculator
// window.addEventListener('DOMContentLoaded', () => {
// const alert = document.querySelector('.alert-danger');
// const result = document.querySelector('.alert-success');


//     document.querySelector('button').addEventListener('click', () => {
//         const data = {};
//         data.d1 = document.querySelector('#d1').value || 0;
//         data.d2 = document.querySelector('#d2').value || 0;
//         data.action = document.querySelector('#action').value;
//         axios.post('http://127.0.0.1:3003/calculator', data).
//             then(res => {
//                 console.log(res);
//                 if(res.data.errMsg) {
//                     alert.style.display = 'block';
//                     result.style.display = 'none';
//                     alert.innerHTML = res.data.errMsg;
//                 }else {
//                     alert.style.display = 'none';
//                     result.style.display = 'block';
//                     result.innerHTML = res.data.answer;
//                 }
//             })
//     })


// })
//DOMINOS


window.addEventListener('DOMContentLoaded', () => {
    
    const getDominos = () => {

        axios.
        get('http://127.0.0.1:3003/dominos').
        then(res => {
            let dominoHtml = '';
            res.data.dominos.forEach(e => {
                dominoHtml = dominoHtml + `
                <div class="domino">
                        <div class="left-side">
                          ${e.left_side}
                        </div>

                      <div class="right-side">
                      ${e.right_side}
                   </div>

              </div>
                `;
            })
            document.querySelector('.dominos').innerHTML = dominoHtml;
            console.log(res.data);
        });


    }

    const alert = document.querySelector('.alert-danger');
    const result = document.querySelector('.alert-success');
    document.querySelector('button').addEventListener('click', () => {
        const data = {};
        data.left = document.querySelector('#left').value || 0;
        data.right = document.querySelector('#right').value || 0;
        axios.post('http://127.0.0.1:3003/dominos/add', data).
            then(res => {
                console.log(res);
                if (res.data.errMsg) {
                    alert.style.display = 'block';
                    result.style.display = 'none';
                    alert.innerHTML = res.data.errMsg;
                } else {
                    alert.style.display = 'none';
                    result.style.display = 'block';
                    result.innerHTML = 'New domino plate was added.';
                }
            })
    })
    getDominos();
});
