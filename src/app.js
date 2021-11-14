import axios from "axios";
axios.get('http://127.0.0.1:5500/public/data.txt').
then(res => {
    console.log(res);
})


console.log('Hello js');