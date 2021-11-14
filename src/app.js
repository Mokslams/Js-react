import axios from "axios";

// 


window.addEventListener('DOMContentLoaded', () => {
const alert =   document.querySelector('.alert-danger');
const result =   document.querySelector('.alert-success');


    document.querySelector('button').addEventListener('click', () => {
        const data = {};
        data.d1 = document.querySelector('#d1').value || 0;
        data.d2 = document.querySelector('#d2').value || 0;
        data.action = document.querySelector('#action').value;
        axios.post('http://127.0.0.1:3003/calculator', data).
            then(res => {
                console.log(res);
                if(res.data.errMsg) {
                    alert.style.dislpay = 'block';
                    result.style.dislpay = 'none';
                    alert.innerHTML = res.data.errMsg;
                }else {
                    alert.style.dislpay = 'none';
                    result.style.dislpay = 'block';
                    result.innerHTML = res.data.answer;
                }
            })
    })


})
